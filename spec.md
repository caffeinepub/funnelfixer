# FunnelFixer

## Current State

4-page affiliate marketing funnel app:
- **Page 1 (BridgePage):** Generic headline about affiliate marketing problem, short mentor intro, Active vs System Owner comparison, CTA to Opt-in page. No personal story.
- **Page 2 (OptInPage):** Email + name form, benefit headline, "what this is NOT" bullets, form submits via createUser, redirects to PresentationPage.
- **Page 3 (PresentationPage):** Shows an old YouTube video (b0JGFV9bWJE), mentor image, expectations bullets, CTA to Sales page.
- **Page 4 (SalesPage):** Coupon code SYSTEMLEAD, WhatsApp CTA, benefits list, "not for everyone" section. Unchanged.

## Requested Changes (Diff)

### Add
- **Page 1 (BridgePage):** Full personal story section for Ashfaq Sheikh with hook — dahi vada stall owner turned digital system builder. Story arc: struggle → exploration (YouTube, MLM 3 years, dropshipping, affiliate, digital products, ecommerce, share market) → clarity problem (no guidance, no niche) → automation vision → discovery of funnel system. Hook: "Dahi vada bechne wale ne 4 saal mein 7 businesses try kiye... aur finally ek system dhundha jo 24/7 kaam karta hai."
- **Page 3 (PresentationPage):** After Video 1 (6 min funnel training), add a CTA button "17 Min Ki Full Presentation Dekhein" which when clicked reveals/shows Video 2 (17 min presentation - youtu.be/XWID-7Pqhvw) inline below it.

### Modify
- **Page 1 (BridgePage):** Replace generic mentor intro text with detailed story (dahi vada → MLM → dropshipping → digital products → funnel discovery). Keep existing sections (Active vs System Owner, CTA) intact.
- **Page 3 (PresentationPage):** Replace old video embed (b0JGFV9bWJE) with Video 1 (youtu.be/O23vqlIDQmU - 6 min funnel training). Add a reveal button below Video 1 for Video 2 (youtu.be/XWID-7Pqhvw - 17 min presentation).

### Remove
- Nothing removed from Page 2 (OptInPage) or Page 4 (SalesPage).

## Implementation Plan

1. **BridgePage.tsx** — Add a "Meri Story" section between the mentor intro and the Active/System Owner comparison:
   - Hook headline with strong emotional pull
   - Timeline-style story cards showing each phase (dahi vada → YouTube → MLM → dropshipping → affiliate → digital → ecommerce → share market → automation vision → funnel discovery)
   - Staggered fade-in animations on each story card
   - Keep all other existing sections unchanged

2. **PresentationPage.tsx** — Update video section:
   - Replace iframe src from b0JGFV9bWJE to O23vqlIDQmU
   - Add label "6 Min Ki Free Training" above Video 1
   - Below Video 1, add animated CTA button "17 Min Ki Full Presentation Dekhein" with Play icon
   - On button click, set showPresentation state to true, scroll smoothly to Video 2
   - Video 2 section (XWID-7Pqhvw) renders below with fade-in animation only when showPresentation is true
   - After Video 2 is shown, existing CTA to Sales page appears below it

3. No changes to OptInPage.tsx, SalesPage.tsx, App.tsx, backend, or Layout/Header/Footer.
