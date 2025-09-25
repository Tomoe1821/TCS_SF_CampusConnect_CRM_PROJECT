public with sharing class EventRegistrationController {
    
    @AuraEnabled(cacheable=true)
    public static List<ClubEvent__c> getUpcomingEventsForStudent(Id studentId) {
        if (studentId == null) return new List<ClubEvent__c>();

        
        Set<Id> clubIds = new Set<Id>();
        for (ClubMembership__c cm : [
            SELECT Club__c FROM ClubMembership__c WHERE Student__c = :studentId AND Status__c != 'Inactive'
        ]) {
            if (cm.Club__c != null) clubIds.add(cm.Club__c);
        }

        if (clubIds.isEmpty()) return new List<ClubEvent__c>();

        
        List<ClubEvent__c> events = [
            SELECT Id, Name, Event_DateTime__c, Venue__c, Capacity__c, Status__c, Related_Club__c
            FROM ClubEvent__c
            WHERE Related_Club__c IN :clubIds AND Event_DateTime__c >= :System.now()
            ORDER BY Event_DateTime__c ASC
            LIMIT 50
        ];
        return events;
    }

    
    @AuraEnabled(cacheable=true)
    public static List<EventRegistration__c> getRegistrationHistory(Id studentId) {
        if (studentId == null) return new List<EventRegistration__c>();
        return [
            SELECT Id, Name, ClubEvent__c, ClubEvent__r.Name, Status__c, CreatedDate
            FROM EventRegistration__c
            WHERE Student__c = :studentId
            ORDER BY CreatedDate DESC
            LIMIT 200
        ];
    }

   
    @AuraEnabled
    public static Id registerStudentForEvent(Id eventId, Id studentId) {
        if (eventId == null || studentId == null) {
            throw new AuraHandledException('Event and student are required.');
        }

        
        Integer existingCount = [
            SELECT count()
            FROM EventRegistration__c
            WHERE ClubEvent__c = :eventId AND Student__c = :studentId
        ];
        if (existingCount > 0) {
            throw new AuraHandledException('You are already registered for this event.');
        }

        
        ClubEvent__c ev = [
            SELECT Id, Capacity__c,
                (SELECT Id FROM EventRegistrations__r) 
            FROM ClubEvent__c
            WHERE Id = :eventId
            LIMIT 1
        ];

        Integer regCount = 0;
        
        try {
            regCount = ev.EventRegistrations__r != null ? ev.EventRegistrations__r.size() : 0;
        } catch (Exception ex) {
           
            regCount = [SELECT count() FROM EventRegistration__c WHERE ClubEvent__c = :eventId];
        }

        
        if (ev.Capacity__c != null && regCount >= Integer.valueOf(ev.Capacity__c)) {
            throw new AuraHandledException('Event is full. No seats available.');
        }

        // Create registration
        EventRegistration__c reg = new EventRegistration__c();
        reg.ClubEvent__c = eventId;
        reg.Student__c = studentId;
        reg.Status__c = 'Registered'; // ensure the picklist value exists
        insert reg;
        return reg.Id;
    }

    /**
     * Update participation/status for a registration or mark attended/cancelled.
     */
    @AuraEnabled
    public static Boolean updateParticipationStatus(Id registrationId, String status) {
        if (registrationId == null) {
            throw new AuraHandledException('Registration Id is required.');
        }
        EventRegistration__c reg = [SELECT Id, Status__c FROM EventRegistration__c WHERE Id = :registrationId LIMIT 1];
        reg.Status__c = status;
        update reg;
        return true;
    }

    /**
     * Returns capacity and current registration count for the event.
     */
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getEventCapacity(Id eventId) {
        Map<String, Object> result = new Map<String, Object>{ 'capacity' => null, 'registered' => 0 };
        if (eventId == null) return result;

        ClubEvent__c ev = [SELECT Id, Capacity__c FROM ClubEvent__c WHERE Id = :eventId LIMIT 1];
        Integer registered = [SELECT count() FROM EventRegistration__c WHERE ClubEvent__c = :eventId];

        result.put('capacity', ev.Capacity__c);
        result.put('registered', registered);
        return result;
    }
}
