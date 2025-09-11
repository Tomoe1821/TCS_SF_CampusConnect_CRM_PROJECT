# CampusConnect CRM – Student Club & Event Management System  

## Phase 1: Problem Understanding & Industry Analysis  

**Industry:** Education (Campus Clubs & Events)  
**Project Type:** Salesforce CRM Implementation (Admin + Developer)  
**Target Users:** Students, Club Leaders, Faculty Coordinators, Admin  

---

## Problem Statement  

Student clubs and events on campus are currently managed using scattered tools like Google Forms, WhatsApp groups, and Excel sheets. This leads to:  
- Missed or delayed event updates.  
- Duplicate or invalid registrations.  
- No centralized way to track student participation.  
- Manual effort for faculty coordinators to generate reports.  

---

## Goal  

Implement a Salesforce CRM that:  
- Centralizes student, club, and event data.  
- Automates event registration and reminders.  
- Tracks attendance and generates participation history.  
- Provides dashboards for real-time engagement analytics.  
- Introduces smart, innovative, and gamified experiences for students.  

---

## Requirement Gathering  

### Business Needs  
- Centralized platform for managing clubs, students, and events.  
- Automated registration and event reminders.  
- Streamlined attendance & feedback tracking.  
- Dashboards for faculty and coordinators to monitor student engagement.  
- Innovative features like mood-based recommendations, NFT badges, and dynamic pricing to make events more engaging.  

### Functional Requirements  
- **Student Object:** Capture student details (Year, Branch, Skills, Mood).  
- **Event Object:** Fields for Event Name, Date, Venue, Capacity, Club, Pricing Tier.  
- **Event Registration Object:** Links Students to Events.  
- **Automation:** Email/SMS reminders before event day.  
- **Reports:** Participation trends, event attendance, club performance.  
- **Friend-Match Logic:** Suggests events based on friends’ participation.  
- **NFT Badges:** Auto-generated collectibles for attended events.  

### Non-Functional Requirements  
- Mobile-friendly (via Salesforce Mobile App).  
- Role-based access (Students vs Leaders vs Faculty).  
- Secure and scalable for 1000+ student records.  
- Easy-to-use interface for non-technical users.  

---

## Stakeholder Analysis  

| Stakeholder   | Needs / Responsibilities |
|---------------|---------------------------|
| Students      | Register for events, receive reminders, view participation history, collect NFT badges, get event suggestions. |
| Club Leaders  | Create/manage events, track registrations, configure pricing tiers, issue NFT badges, view attendance. |
| Faculty       | Oversee multiple clubs, approve budgets, track student engagement, review reports. |
| Admin         | Setup org, users, profiles, roles, permissions, and manage data security. |

---

## Business Process Mapping  

### Current Manual Process  
- Club shares Google Form links via WhatsApp.  
- Student data manually compiled into Excel.  
- Event reminders sent manually by club leaders.  
- Attendance tracked via paper sheets.  
- Reports created monthly using Excel.  

### Proposed Salesforce Process  
1. Student registers via Salesforce form → captured as Event Registration Record.  
2. Auto-confirmation email/SMS sent to the student.  
3. Salesforce Flow sends reminders 1 day before the event.  
4. Attendance tracked digitally using custom objects.  
5. Participation history + NFT badges shown in Student Profile.  
6. Mood + Friend-Match engine suggests events in real time.  
7. Dynamic pricing automatically adjusts fees based on registration count.  
8. Dashboards auto-refresh for real-time engagement insights.  

---

## Industry-Specific Use Cases  

- **Mood-Based Event Suggestions:** Students update their mood (Happy, Stressed, Curious) → Salesforce recommends matching events (Yoga for stressed, Hackathon for curious, Fest for excited).  
- **Smart Friend-Match:** When registering, system suggests events that friends or classmates are also attending → boosting participation.  
- **Dynamic Pricing / Early Bird Discounts:** First 20 signups free, next 30 at discounted price, last batch at full price → auto-managed in Salesforce.  
- **Event NFTs / Digital Collectibles:** Students receive unique NFT badges after attending events. Collecting milestones unlocks rewards like “Campus Influencer.”  
- **Student Engagement Leaderboard:** Rankings based on event participation, mood badges, and NFT collections.  
- **Automated Certificates:** Issued digitally after successful attendance.  
- **Budget Approval Workflow:** Faculty reviews & approves club event budgets via Salesforce Approval Process.  
- **Multi-Club Membership Management:** Students can belong to multiple clubs at once with participation history tracked.  

---

## AppExchange Exploration  

- **Eventbrite Sync** → Seamless event registration integration.  
- **FormAssembly** → Custom student registration forms.  
- **SurveyMonkey** → Event feedback surveys.  
- **Conga Composer** → Auto-generate participation certificates.  
- **Blockchain/NFT API Integration** → Event NFT badge distribution.  

---

## Phase 1 Summary  

- Problem statement clarified.  
- Requirements (business, functional, non-functional) documented.  
- Stakeholders identified with responsibilities.  
- Current vs Proposed process mapped.  
- Real-world education-specific + innovative use cases listed.  
- Relevant AppExchange tools explored for faster implementation.  
