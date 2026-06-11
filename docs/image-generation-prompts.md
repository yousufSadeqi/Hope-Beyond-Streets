# Hope Beyond Streets — AI Image Generation Prompts (Gemini)

Use these prompts in **Google Gemini** image generation (or Imagen). Save each output to `charty/public/images/` using the **exact filename** listed, then update the matching `#/...` path in the content files.

## Global style guide (paste at the start of every prompt)

```
Brand: Hope Beyond Streets — humanitarian NGO, Lyon France. Slogan: "Donating is loving, caring and helping".
Palette: warm red #d62828 accents, clean whites, soft neutrals, hopeful mood.
Rules: dignified, never exploitative; no close-ups of children's faces; no poverty tourism; no tears or suffering poses; represent undocumented families with respect.
```

## Style key

| Style | When to use |
|-------|-------------|
| **REALISTIC** | Field work, volunteers, meetings, outreach — builds trust |
| **ILLUSTRATION** | Symbolic scenes, items flat-lays, hope/future themes — warm & safe |
| **MIXED** | Semi-realistic digital painting — emotional heroes without real people |

---

## HOME (`public/images/home/`)

### 1. `hero-lyon-tram-station.png` ✅ imported (desktop hero)
- **Style:** REALISTIC (documentary photograph)
- **Aspect ratio:** 21:9 — desktop hero (`lg` and up)
- **Save to:** `public/home/hero-lyon-tram-station.png`
- **Prompt for Gemini:**
```
Brand: Hope Beyond Streets — humanitarian NGO, Lyon France.

Wide cinematic documentary photograph, 21:9 aspect ratio. CLEAR, SHARP, FULL DAYLIGHT — no haze, no faded wash, no dark vignette, no opacity overlay baked into the image. Bright natural afternoon light, crisp details, true-to-life colors, high resolution.

Scene: Lyon, France — a young child begging on the pavement in front of a TCL tram station (tram tracks, shelter, platform signage, typical Lyon urban street). Medium-wide shot from eye level. Child seen from behind or side at respectful distance — face NOT visible, not a close-up. Optional adult figure nearby in soft focus.

Honest documentary street photography about vulnerability — NOT exploitative: no tears, no theatrical suffering poses, no poverty tourism. Real European tram stop environment, photorealistic.

Website hero background — image must stay clear and readable; leave right third slightly less busy for a donation card overlay.
```

**After saving:** update `content.ts` — `image: "/home/hero-lyon-tram-station.png"`

### 1b. `hero-lyon-tram-station-mobile.png` ✅ imported (mobile hero)
- **Style:** REALISTIC (documentary photograph)
- **Aspect ratio:** 9:16 (portrait)
- **Save to:** `public/home/hero-lyon-tram-station-mobile.png`
- **Prompt for Gemini:**
```
Brand: Hope Beyond Streets — humanitarian NGO, Lyon France.

Vertical documentary photograph, 9:16 mobile hero. CLEAR, SHARP, FULL DAYLIGHT — no haze, no faded opacity, no dark vignette. Crisp afternoon light, natural contrast, photorealistic.

Lyon tram station street scene: child begging on pavement near tram tracks and station shelter. Vertical composition — tram platform and street in upper/mid frame, child figure lower third, seen from behind or side, face NOT visible.

Ethical NGO framing — medium distance, documentary not sensational. TCL-style tram stop, Lyon architecture. Simple strong focal point for narrow phone screens. High resolution vertical banner.
```

**After saving:** update `content.ts` — `imageMobile: "/home/hero-lyon-tram-station-mobile.png"`

### 2. `problem-street-vulnerability-france.jpg`
- **Style:** ILLUSTRATION (soft watercolor)
- **Aspect ratio:** 4:5
- **Prompt:**
```
Soft watercolor illustration of an empty park bench at dusk in a French city. A small colourful child's backpack sits alone on the bench. Quiet emotional mood, symbolic not literal. Muted blues and warm streetlights, gentle and respectful. No people. Storybook illustration style for NGO awareness page.
```

### 3. `program-emergency-supplies.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Documentary photograph of diverse volunteers packing sealed food bags and hygiene kits on tables in a bright community hall. Warm lighting, organised NGO workspace, red volunteer vests with generic heart logo (not real brand). No beneficiaries visible, only volunteers' hands and torsos. Authentic, hopeful, professional charity photography.
```

### 4. `program-child-education.jpg`
- **Style:** MIXED (illustrated scene with realistic textures)
- **Aspect ratio:** 16:10
- **Prompt:**
```
Warm semi-realistic illustration of an adult tutor and child sitting side by side at a desk in a bright safe-space room, working on French homework. Faces turned away or partially hidden. Colourful books, welcoming atmosphere, soft natural light. Friendly modern editorial illustration style — hopeful education NGO campaign.
```

### 5. `program-family-guidance.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Professional documentary photo of a counsellor and parent sitting at a desk reviewing printed resource flyers and a map of Lyon services. Confidential NGO office, diverse adults, calm and welcoming. Faces in soft focus or three-quarter view. Natural light, trustworthy humanitarian organisation aesthetic.
```

### 6. `program-street-outreach.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Evening documentary photograph at a Lyon metro station entrance. Two volunteers in red vests respectfully speaking with an adult, maintaining dignified distance. Handing a sealed supply kit. Urban France setting, warm street lighting, ethical NGO field outreach — no children visible, respectful framing.
```

### 7. `difference-community-hope.jpg`
- **Style:** ILLUSTRATION (modern flat vector + soft gradients)
- **Aspect ratio:** 4:5
- **Prompt:**
```
Uplifting modern flat illustration of a community gathering in a Lyon square. Diverse stylised adults holding banners reading "Hope Beyond Streets" in simple typography. No detailed child faces — small figures in background only. Warm red and cream colour palette, celebratory but dignified. Clean vector NGO campaign art.
```

---

## ABOUT (`public/images/about/`)

### 8. `about-hero-origin-story.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 21:9
- **Prompt:**
```
Wide documentary photograph of a diverse founding team of 4–5 young adults planning field outreach in a Lyon community space. Whiteboard with simple sticky notes and arrows, collaborative energy, coffee cups, hopeful mood. No minors. Natural window light, authentic startup NGO origin story — professional but warm.
```

### 9. `about-children-dignity-field.jpeg` ✅ imported
- **Used in:** About narrative — “Children at the centre”

### 10. `about-ngo-partnership.png` ✅ imported
- **Used in:** About collaboration section

### 11. `about-transparency-ledger.png` ✅ imported
- **Used in:** About — Radical transparency section

---

## DONATE (`public/donate/`)

### 12. `hero-give-in-every-way.jpg` ✅ imported
- **Used in:** donate page hero

### 13. `financial-gift-impact.png` ✅ imported
- **Used in:** Financial gift section banner (`/donate/financial-gift-impact.png`)

### 14. `in-kind-clothing-shoes.jpg` ✅ imported
- **Used in:** Clothing & shoes card

### 15. `in-kind-school-supplies.jpg` ✅ imported
- **Used in:** School supplies card

### 19. `volunteer-teaching-mentoring.avif` ✅ imported
- **Used in:** Volunteer / time & skills section

### 20. `housing-safe-home-keys.webp` ✅ imported
- **Used in:** Housing & shelter section

---

## BLOG (`public/blog/`)

### 21. `featured-undocumented-family-france.png` ✅ imported
- **Used in:** `gap-between-emergency-aid-and-reintegration`

### 22. `street-exit-program-consultation.png` ✅ imported
- **Used in:** `street-exit-program`

### 23. `school-first-backpack-supplies.png` ✅ imported
- **Used in:** `school-first-campaign`

### 24. `anonymous-help-smartphone.png` ✅ imported
- **Used in:** `anonymous-help-platform`

### 25. `empty-classroom-winter-france.png` ✅ imported
- **Used in:** `understanding-child-poverty-france`

### 26. `volunteer-outreach-food-kits.png` ✅ imported (unused — assign to a post when ready)

### 27. `sponsor-month-impact-breakdown.png` ✅ imported
- **Used in:** `sponsor-a-childs-month`

### 28. `qr-poster-community-board.png` ✅ imported
- **Used in:** `qr-code-posters-multilingual`

### 29. `social-media-field-story.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Behind-the-scenes documentary photo of a communicator with camera filming a volunteer packing supply boxes in an NGO workspace. Consent-focused ethical storytelling vibe, authentic workspace, no children's faces, warm lighting.
```

### 30. `winter-emergency-coats-distribution.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Photograph of stacks of folded winter coats and blankets next to labelled donation boxes in a warm community hall. Volunteers preparing in soft background blur, no identifiable beneficiaries. Winter charity distribution preparation.
```

### 31. `legal-orientation-meeting.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Calm documentary photograph of a family sitting with a counsellor in a welcoming NGO meeting room. Printed resource flyers on table, plants, soft natural light. Professional confidential atmosphere, diverse adults, respectful medium wide shot.
```

### 32. `ngo-partnership-handshake.jpg`
- **Style:** REALISTIC
- **Aspect ratio:** 16:10
- **Prompt:**
```
Professional photo of two NGO coordinators shaking hands in front of a whiteboard with a shared action plan and sticky notes. Diverse team setting, collaborative energy, modern office, partnership theme.
```

### 33. `child-looking-toward-future.jpg`
- **Style:** ILLUSTRATION (symbolic landscape)
- **Aspect ratio:** 16:10
- **Prompt:**
```
Symbolic illustration of a child and parent seen from behind, walking hand in hand toward a sunlit school gate at golden hour. Soft painterly style, hopeful forward-looking composition, warm reds and golds, no faces shown. Path from shadow into light — future and education metaphor.
```

### 34. `ethics-consent-checklist.jpg`
- **Style:** ILLUSTRATION (flat lay)
- **Aspect ratio:** 16:10
- **Prompt:**
```
Top-down illustration of a clipboard with printed ethics checklist titled "Field Documentation Guidelines", checkbox items visible, beside a camera and notebook on a wooden desk. Clean organised NGO admin aesthetic, no people. Red pen accent.
```

### 35. `mission-hero-children-safety.jpg`
- **Style:** ILLUSTRATION (community celebration)
- **Aspect ratio:** 16:10
- **Prompt:**
```
Uplifting stylised illustration of a diverse crowd at a Lyon square community event holding red and white "Hope Beyond Streets" banners. Adults in foreground, small child figures distant and not detailed. Celebratory dignified NGO mission art, modern vector-wash hybrid style.
```

---

## After generation — update these files

Replace `#/home/...` → `/images/home/...` in:
- `src/app/modules/home/data/content.ts`

Replace `#/about/...` → `/images/about/...` in:
- `src/app/modules/about/data/content.ts`
- `src/app/modules/about/ui/components/about-transparency.tsx`

Replace `#/donate/...` → `/donate/...` in:
- `src/app/modules/donate/data/content.ts`

Replace `#/blog/...` → `/blog/...` in:
- `src/app/modules/blog/data/posts.ts`

## Quick copy template for Gemini

```
[GLOBAL STYLE GUIDE]

[PROMPT FROM ABOVE]

Output: high resolution, no watermark, no text unless specified.
```
