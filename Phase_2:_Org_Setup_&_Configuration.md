# Phase 2: Org Setup & Configuration (Campus CRM + Student Club)

## 1. Salesforce Editions

* Use a **Developer Edition (Free Dev Org)**.
* Developer Org gives you:

  * 2 licenses (Admin + 1 User).
  * Full access to Objects, Apex, Flows, LWC.
  * Sufficient for Campus CRM prototype.

---

## 2. Company Profile Setup

* Setup → **Company Information**.
* Example details:

  * Company Name: *CampusConnect CRM*
  * Address: *University Campus, Jabalpur, MP*
  * Currency: *INR*
  * Default Time Zone: *Asia/Kolkata (IST)*

---

## 3. Business Hours & Holidays

* Setup → **Business Hours** → New:

  * Name: *Campus Office Hours*
  * Monday–Saturday: 9 AM – 8 PM IST
* Setup → **Holidays** → Add University holidays (Diwali, Republic Day, Annual Fest Week).

***Automations like event reminders & mood-based suggestions can reference this.***

---

## 4. Fiscal Year Settings

* Setup → **Fiscal Year**.
* Use **Standard Fiscal Year (April–March)** for academic cycle.
* If needed → Custom Fiscal Year to align with *Semester-based sessions*.

---

## 5. User Setup & Licenses

* Create 3–4 test users:

  1. **Admin (You)** – System Administrator.
  2. **Faculty Advisor** – Standard User.
  3. **Student Leader (Club Head)** – Custom profile with event management access.
  4. **Student Member** – Basic student access, can register for events.

***Helps demo different roles.***

---

## 6. Profiles

* Profiles define what users can do.
* Example Profiles:

  * **System Administrator** → Full access.
  * **Faculty Profile** → Can monitor clubs & approve events.
  * **Club Leader Profile** → Can create/manage student events.
  * **Student Profile** → Can view & register for events only.

---

## 7. Roles

* Roles define **data visibility hierarchy**.

  * Admin (Top)

    * Faculty Advisor

      * Club Leader

        * Student Member

***Role hierarchy ensures leaders can track their members’ participation.***

---

## 8. Permission Sets

* Create **extra permissions** beyond profiles.

  * *“Mood Event Dashboard Access”* → For students to see mood-based event suggestions.
  * *“Event Analytics Access”* → For faculty & club leaders to track participation.

---

## 9. OWD (Organization-Wide Defaults)

* Setup → Sharing Settings.
* Suggested defaults:

  * **Students** → Private.
  * **Events** → Public Read Only (anyone can see events).
  * **Mood Updates** → Private (confidential to student + admin).
  * **Club Data** → Controlled by Parent (Club Leader → Members).

---

## 10. Sharing Rules

* Add sharing for collaboration:

  * Faculty can see all club events.
  * Club Leaders can see all student registrations for their club.
  * Students can only see **their own registrations**.

---

## 11. Login Access Policies

* Setup → **Login Access Policies**.
* Allow users to grant temporary access to Admin for troubleshooting.

---

## 12. Dev Org Setup

* Stick to **Developer Org**.
* Optional: Use **Scratch Orgs (SFDX)** if showcasing DevOps.

---

## 13. Sandbox Usage

* Not available in free Dev Org.
* Can simulate by creating a **second Dev Org** as “Sandbox.”

---

## 14. Deployment Basics

* Use **Change Sets** for moving customizations.
* Steps:

  1. Create Outbound Change Set (Dev Org).
  2. Upload to another Org (Sandbox Demo Org).
  3. Deploy.


