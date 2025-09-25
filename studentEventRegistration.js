import { LightningElement, api, track, wire } from 'lwc';
import getUpcomingEventsForStudent from '@salesforce/apex/EventRegistrationController.getUpcomingEventsForStudent';
import registerStudentForEvent from '@salesforce/apex/EventRegistrationController.registerStudentForEvent';
import getEventCapacity from '@salesforce/apex/EventRegistrationController.getEventCapacity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// If you want to auto-detect logged in student, you can pass studentId as @api or
// resolve server-side by using UserInfo methods in Apex.
export default class StudentEventRegistration extends LightningElement {
    @api studentId; // pass this from parent or set in markup via recordId when on record page
    @track eventOptions = [];
    @track selectedEventId = null;
    @track selectedEventDate;
    @track selectedEventVenue;
    @track capacityDisplay = '';
    @track comments = '';
    @track isRegistering = false;
    @track error;

    connectedCallback() {
        this.loadEvents();
    }

    loadEvents() {
        getUpcomingEventsForStudent({ studentId: this.studentId })
        .then(events => {
            this.eventOptions = events.map(e => ({
                label: `${e.Name} — ${this.formatDate(e.Event_DateTime__c)}`,
                value: e.Id,
                raw: e
            }));
            this.error = undefined;
        })
        .catch(err => {
            this.error = this.parseError(err);
        });
    }

    handleEventChange(event) {
        this.selectedEventId = event.detail.value;
        const chosen = this.eventOptions.find(o => o.value === this.selectedEventId);
        if (chosen && chosen.raw) {
            this.selectedEventDate = this.formatDate(chosen.raw.Event_DateTime__c);
            this.selectedEventVenue = chosen.raw.Venue__c;
            this.loadCapacity(chosen.raw.Id);
        } else {
            this.selectedEventDate = undefined;
            this.selectedEventVenue = undefined;
            this.capacityDisplay = '';
        }
    }

    loadCapacity(eventId) {
        getEventCapacity({ eventId })
        .then(res => {
            // res: { capacity, registered }
            const cap = res.capacity;
            const reg = res.registered;
            this.capacityDisplay = cap ? `${reg} / ${cap}` : `${reg}`;
        })
        .catch(err => {
            this.error = this.parseError(err);
        });
    }

    handleCommentsChange(e) {
        this.comments = e.detail.value;
    }

    handleRegister() {
        if (!this.selectedEventId) {
            this.showToast('Error', 'Please select an event', 'error');
            return;
        }
        this.isRegistering = true;
        registerStudentForEvent({ eventId: this.selectedEventId, studentId: this.studentId })
        .then(resultId => {
            this.showToast('Success', 'Registered successfully', 'success');
            this.isRegistering = false;
            // Optionally refresh list or dispatch event to parent to update UI
            this.dispatchEvent(new CustomEvent('registered', { detail: { registrationId: resultId } }));
        })
        .catch(err => {
            this.isRegistering = false;
            this.error = this.parseError(err);
            this.showToast('Error', this.error, 'error');
        });
    }

    formatDate(dt) {
        if (!dt) return '';
        // server returns ISO string — keep simple formatting
        const d = new Date(dt);
        return d.toLocaleString();
    }

    parseError(err) {
        let message = 'Unknown error';
        if (Array.isArray(err.body?.message)) {
            message = err.body.message.join('; ');
        } else if (err.body?.message) {
            message = err.body.message;
        } else if (err.message) {
            message = err.message;
        }
        return message;
    }

    showToast(title, message, variant='info') {
        const evt = new ShowToastEvent({ title, message, variant });
        this.dispatchEvent(evt);
    }
}
