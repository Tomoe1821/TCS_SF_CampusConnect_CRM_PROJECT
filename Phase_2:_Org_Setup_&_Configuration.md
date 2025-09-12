# Phase 2: Org Setup & Configuration  
**Project:** CampusConnect CRM – Student Club & Event Management System  

---

## Salesforce Edition
- Developer Edition Org utilized for implementation.

---

## Company Profile Setup
- Company Name: *CampusConnect CRM*  
- Currency: *INR*  
- Time Zone: *Asia/Kolkata (IST)*  
- Address and contact details configured.

---

## Business Hours & Holidays
- Standard business hours: *Monday–Friday, 9 AM – 6 PM IST*.  
- Holidays configured: *Diwali, Christmas, Independence Day, and major academic holidays*.

---

## Fiscal Year Settings
- Standard Fiscal Year: *April – March*.

---

## User Setup & Licenses
- **System Administrator (Admin User)**  
- **Faculty Coordinator User**  
- **Club Leader User**  
- **Student User**

---

## Profiles
- **System Administrator** (default).  
- **Faculty Profile** (customized from Standard User).  
- **Club Leader Profile** (customized for event management).  
- **Student Profile** (customized with limited access).

---

## Roles
- **Admin**  
  - **Faculty Coordinator**  
    - **Club Leader**  
      - **Student**

---

## Permission Sets
- *Student Dashboard Access*  
- *Club Leader Event Management*  
- *Faculty Advanced Reporting*

---

## Organization-Wide Defaults (OWD)
- **Student Records**: Private  
- **Event Registrations**: Private  
- **Clubs & Events**: Public Read Only  
- **Participation History**: Controlled by Parent  

---

## Sharing Rules
- Faculty can access data of all clubs.  
- Club Leaders can view student registrations for their events.  
- Students restricted to their own event registrations and profiles.  

---

## Login Access Policies
- Enabled for troubleshooting and admin support.

---

## Dev Org Setup
- Developer Org created and configured for the project.

---

## Sandbox Usage
- Not applicable (*Developer Edition*).  
- Simulated via secondary Developer Org if required.

---

## Deployment Basics
- Change Sets identified as the primary deployment method.  
- Awareness of ANT Migration Tool and SFDX for advanced deployments.
