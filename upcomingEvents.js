import { LightningElement, api, wire, track } from 'lwc';
import getUpcomingEventsForStudent from '@salesforce/apex/EventRegistrationController.getUpcomingEventsForStudent';

export default class UpcomingEvents extends LightningElement {
    @api studentId; // Pass recordId when placed on record page or set via parent
    @track events;
    @track error;

    @wire(getUpcomingEventsForStudent, { studentId: '$studentId' })
    wiredEvents({ error, data }) {
        if (data) {
            this.events = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.events = undefined;
        }
    }

    get isEmpty() {
        return !this.events || this.events.length === 0;
    }

    formatDate(dt) {
        if (!dt) return '';
        const d = new Date(dt);
        return d.toLocaleString();
    }
}
