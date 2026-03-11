# FunnelFixer

## Current State
FunnelFixer is a 4-page affiliate marketing funnel app:
- Page 1: Bridge/Story page (Ashfaq's backstory)
- Page 2: Opt-in page (name + email form stored in backend)
- Page 3: Presentation/Training video page
- Page 4: Sales page with WhatsApp CTA

Backend stores user leads (name, email, timestamp) and visitor analytics. No admin panel exists. No Make.com webhook integration.

## Requested Changes (Diff)

### Add
- Admin login page at `/admin` with password protection
- Admin dashboard showing all leads (name, email, timestamp)
- CSV export button to download leads for Systeme.io import
- Make.com webhook URL field in admin panel (save/update)
- Backend: store admin password and webhook URL
- Backend: HTTP outcall to Make.com webhook URL when a new user opts in (sends name + email)
- Admin route in App.tsx

### Modify
- `createUser` backend function: after saving lead, trigger Make.com webhook HTTP outcall if URL is set

### Remove
- Nothing

## Implementation Plan
1. Select `http-outcalls` component for backend HTTP calls to Make.com
2. Regenerate backend with admin auth, webhook URL storage, HTTP outcall on createUser
3. Add `/admin` route to App.tsx
4. Build AdminPage with: login form, leads table, CSV export, webhook URL setting
