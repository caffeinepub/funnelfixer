# FunnelFixer

## Current State

4-page affiliate marketing funnel (Bridge, OptIn, Presentation, Sales) + Admin Panel at /admin. Backend stores leads (name, email) on IC. Admin panel has login, leads list, CSV export, Make.com webhook field.

Known broken:
- Admin panel login fails ("Internet check kare" error) — root cause: `backend.ts` generated class does NOT include `adminLogin`, `setWebhookUrl`, `getWebhookUrl` methods, so actor cast fails silently
- Opt-in form submission fails — same actor initialization/type mismatch issue
- Guidance photo (red hoodie) and logo not showing

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- Regenerate Motoko backend so `backend.ts` bindgen output includes all admin methods (`adminLogin`, `setWebhookUrl`, `getWebhookUrl`)
- Fix OptInPage and AdminPage to use actor correctly without unsafe casts
- Fix image paths for guidance photo and logo

### Remove
- Remove unsafe cast `actor as AdminBackend` — use direct backendInterface which will include admin methods after regen

## Implementation Plan

1. Regenerate backend with `generate_motoko_code` — ensures bindgen produces correct `backend.ts` with all methods
2. Fix `OptInPage.tsx` — simplify actor usage, remove pending-submit complexity that causes issues
3. Fix `AdminPage.tsx` — remove `AdminBackend` interface cast; use `backendInterface` directly
4. Fix image paths — ensure `/assets/uploads/WhatsApp-Image-2026-03-09-at-2.08.08-AM-1.jpeg` is correctly referenced
5. Validate and deploy
