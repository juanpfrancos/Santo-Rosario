# CODEBASE_MAP.md

Legend: 🔴 critical · 🟡 sensitive to change · ⚪ low-risk · 💀 dead code · 🧊 untouched template

## /app
| Path | Status | Notes |
|---|---|---|
| `frontend/` | 🔴 | Entire feature lives here |
| `backend/` | 🧊 | Default FastAPI/Mongo template, NOT used by Rosary feature |
| `tests/` | ⚪ | empty placeholder |
| `scripts/` | ⚪ | empty placeholder |
| `memory/PRD.md` | ⚪ | living spec, update on feature changes |
| `design_guidelines.json` | ⚪ | output of design_agent; reference for theming |
| `test_reports/iteration_1.json` | ⚪ | last passing E2E report |

---

## /app/frontend/src

### Responsibility
React SPA root. Renders one route `/` → `<Rosary />`. Wires sonner Toaster.

### Files
| File | Status | Role |
|---|---|---|
| `index.js` | ⚪ | CRA entry, mounts `<App />` |
| `App.js` | 🟡 | Router + global `<Toaster richColors position="top-center" theme="dark"/>`. If route is added later, keep `BrowserRouter` here |
| `App.css` | 🟡 | Defines `@keyframes fade-in`, `@keyframes ping-slow`, `.animate-fade-in`, `.animate-ping-slow`, scrollbar, focus-visible, `::selection`. **`Rosary.jsx` and `RosaryBeads.jsx` depend on these class names** |
| `index.css` | 🟡 | Tailwind base layer + shadcn CSS vars (forced dark gold theme). `body` is locked to `#0A0E17` background |

### Side effects
- `App.css` sets `html, body, #root { background-color: #0a0e17 }` globally.

---

## /app/frontend/src/lib

### Responsibility
Pure data + sequence builder. **Single source of truth** for all prayer content and rosary structure.

### `rosaryData.js` 🔴
| Export | Type | Notes |
|---|---|---|
| `prayers` | object | Keys: `signOfCross`, `apostlesCreed`, `ourFather`, `hailMary`, `gloryBe`, `fatima`, `hailHolyQueen`, `finalPrayer`. Each: `{title, text}` |
| `mysteries` | object | Keys: `Gozosos`, `Dolorosos`, `Gloriosos`, `Luminosos`. Each: `{name, days, list: [{title, subtitle, meditation} ×5]}` |
| `getMysteriesForToday(date=new Date())` | fn | Returns mystery key per `Date.getDay()`. 🔴 |
| `buildRosarySequence(mysteryKey)` | fn | Returns ordered array of 80 step objects. 🔴 |
| `TOTAL_BEADS` | const | `60` |

**Step object shape (returned by buildRosarySequence):**
```
{ type, beadIndex, prayerKey, label, content, decade, inDecadeIndex, subtitle? }
type ∈ "intro" | "ourFatherIntro" | "hailMaryIntro" | "gloryIntro"
      | "mysteryAnnounce" | "ourFather" | "hailMary" | "glory" | "fatima"
      | "salve" | "final" | "end"
decade ∈ 0..6  (0 = intro, 1..5 = decades, 6 = closing prayers)
beadIndex ∈ 0..59 | null
```

### Coupling
- `RosaryBeads.jsx` imports only `TOTAL_BEADS` from here.
- `Rosary.jsx` imports `buildRosarySequence`, `getMysteriesForToday`, `mysteries` from here.
- Changing the sequence length will silently affect `progress = stepIndex / (sequence.length - 1)` math; `ProgressBar` derives `Paso X / total`, so harmless. But `RosaryBeads.completedBeads` iterates `sequence[0..stepIndex]` so must stay in sync.
- 🟡 The bead layout in `RosaryBeads.getBeadPosition` hardcodes the mapping `(i-5) % 11 === 0 ⇒ OF decade bead`. If you alter the per-decade composition (e.g. change number of HM), update both `buildRosarySequence` AND `getBeadType` / `getBeadPosition`.

### Side effects
None. Pure module.

---

## /app/frontend/src/pages

### `Rosary.jsx` 🔴
Whole feature UI + state machine. 456 lines, intentionally co-located.

**Default export:** `Rosary` (page component).

**Internal components (file-local, not exported):**
| Component | Role |
|---|---|
| `WelcomeScreen({mysteryInfo, dayName, onStart})` | Pre-prayer hero. Shows `start-btn` |
| `CompletedScreen({onRestart})` | Post-prayer screen with `restart-completed-btn` |
| `ProgressBar({step, total, currentStep, progress})` | Decade label + step count + gold bar. `progress-count` testid |
| `PrayerCard({step, fadeKey})` | Glass card showing `prayer-title` + optional subtitle + `prayer-text`. Re-mounts on `fadeKey` change to retrigger animation |

**State (in `Rosary` component):**
| State | Initial | Setter usage |
|---|---|---|
| `mysteryKey` | `todayMysteryKey` | **never set** after mount — 💀 setter `setMysteryKey` declared but unused |
| `started` | `false` | `true` on first Enter / start-btn |
| `stepIndex` | `0` | incremented by `next()` |
| `completed` | `false` | true when `stepIndex >= length-1` then Enter |
| `musicOn` | `false` | toggled by music-toggle-btn |
| `showInfo` | `false` | controlled `<Dialog open>` |
| `fadeKey` | `0` | incremented to remount `<PrayerCard>` |

**Refs:**
- `audioRef` → `<audio>` element (DOM ref)

**Memo:**
- `today = useMemo(() => new Date(), [])` 🟡 — fixed at mount, **no midnight rollover**
- `todayMysteryKey = useMemo(() => getMysteriesForToday(today), [today])`
- `sequence = useMemo(() => buildRosarySequence(mysteryKey), [mysteryKey])`

**Functions:**
- `next()` 🔴 — `useCallback([started, sequence.length])`. If not started → sets started. Else increments index or marks completed.
- `restart()` — `useCallback([])`. Resets state + toast.success.

**Effects:**
1. Keyboard listener — adds/removes `keydown` on window. Triggers `next()` for `Enter`, `Space`, `ArrowRight`. **Bails out** when `showInfo` is true; **bails out** when `completed` is true. deps: `[next, completed, showInfo]`.
2. Audio controller — on `musicOn` toggle, plays or pauses `audioRef.current`. Catches play() rejection → toast.error + `setMusicOn(false)`. deps: `[musicOn]`.

**Hardcoded URLs (lines 20–25):**
- `BG_URL` (background stained-glass)
- `MUSIC_URL` (Gregorian chant, archive.org) 🟡 — external, may fail.

**data-testid surface:**
`rosary-app`, `bg-audio`, `music-toggle-btn`, `info-btn`, `restart-btn`, `welcome-screen`, `start-btn`, `next-btn`, `prayer-card`, `prayer-title`, `prayer-text`, `progress-bar`, `progress-count`, `completed-screen`, `restart-completed-btn`.

**Dangerous edits:**
- Removing `key={fadeKey}` on `PrayerCard` will kill the fade-in transition between steps.
- Adding any `await` in `next()` will break the synchronous keydown handler flow.
- Re-ordering JSX so that `<RosaryBeads>` mounts before `started=true` is fine but wastes CPU.
- Changing `next()`'s "if !started → set started; return" early-return means the first Enter will skip step 0.

---

## /app/frontend/src/components

### `RosaryBeads.jsx` 🔴 (Pure SVG)
Default + named export `RosaryBeads`. Pure function of props.

**Props:**
| Prop | Type | Used for |
|---|---|---|
| `activeBead` | `number | null | undefined` | Determines glow + scale-up |
| `currentStep` | `number` | Upper bound for completed-beads computation |
| `sequence` | array | Read `sequence[i].beadIndex` for completed-set |

**Module-scope constants:** `VIEW_W=360`, `VIEW_H=580`, `LOOP_CX=180`, `LOOP_CY=200`, `LOOP_R=140`, `PENDANT_X=180`, `PENDANT_TOP_Y=LOOP_CY+LOOP_R+10=350`.

**Helpers (file-local):**
- `getBeadType(index)` → `"crucifix" | "large" | "small"` 🔴
  - 0 → crucifix
  - 1 → large (OF intro)
  - 2..4 → small (3 HM intro)
  - 5..59 → large iff `(index-5) % 11 === 0` else small
- `getBeadPosition(index)` → `{x, y}` 🔴
  - 0 → `(180, 490)`
  - 1 → `(180, 450)`
  - 2..4 → vertical, `y = 380 + (i-2)*22`
  - 5..59 → circular: `angle = 90° + (i-5) * (360/55)`

**Render:**
- `<defs>`: 3 radial gradients (`bead-gold`, `bead-inactive`, `bead-completed`), 1 `<filter id="glow">`, 1 linear gradient `cord`.
- Loop chord path via SVG `A` arc.
- Crucifix rendered as 2 `<rect>` + 1 `<circle>` (jewel).
- Each bead: `<circle>` with optional secondary pulsing `<circle>` (uses `animate-ping-slow` class from `App.css`).

**completedBeads logic (inside render):**
```js
for (let i = 0; i < currentStep; i++)
   if step[i].beadIndex !== null && step[i].beadIndex !== activeBead
       completedBeads.add(step[i].beadIndex)
```
O(stepIndex) per render. 🟡 Acceptable at N≤80, but called on every parent re-render.

**Coupling:** depends on `TOTAL_BEADS` from `lib/rosaryData.js`. If `TOTAL_BEADS` ≠ actual beads referenced in sequence, dead/missing beads will appear.

**Side effects:** none.

---

### `components/ui/*` ⚪ (shadcn)
Used: `button.jsx`, `dialog.jsx`, `sonner.jsx`. All standard shadcn — do not edit.

| Component | Imported by |
|---|---|
| `Button` | `Rosary.jsx` |
| `Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger` | `Rosary.jsx` |
| `Toaster, toast` | `App.js` (Toaster), `Rosary.jsx` (toast) |

All others are present in the template but unused by the feature.

---

## /app/frontend/public

| File | Status | Notes |
|---|---|---|
| `index.html` | 🟡 | Hosts: Google Fonts link (Cormorant Garamond, Lora, Work Sans), title `Santo Rosario · Oración Diaria`, Emergent badge, posthog analytics snippet (platform-injected). **Removing the fonts link will visibly break typography** |

---

## /app/backend 🧊 (template, untouched)

| File | Status | Notes |
|---|---|---|
| `server.py` | 🧊 | FastAPI app with `/api/` and `/api/status` endpoints. Reads `MONGO_URL` and `DB_NAME` at import — crashes if missing. NOT called by feature |
| `requirements.txt` | 🧊 | Do not rewrite; only append via pip + pip freeze |
| `.env` | 🟡 | Contains `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`. Required by backend at import; modifying breaks backend startup |

---

## Dangerous Couplings (quick reference)

| Coupling | Where | Impact if broken |
|---|---|---|
| `TOTAL_BEADS` ↔ sequence `beadIndex` range | `lib/rosaryData.js` ↔ `RosaryBeads.jsx` | Beads visible without prayers or vice versa |
| OF decade bead = `(i-5)%11===0` | `RosaryBeads.getBeadType` ↔ structure in `buildRosarySequence` | Wrong bead sizes / wrong OF location |
| `key={fadeKey}` on `PrayerCard` | `Rosary.jsx` | Loss of fade-in transition |
| Global keydown listener vs `<Dialog>` | `Rosary.jsx` effect | If `showInfo` desync, Enter blocked silently; if not bailed, Enter inside dialog advances rosary |
| `today` memoized `[]` | `Rosary.jsx` | No mystery rollover at midnight |
| `MUSIC_URL` / `BG_URL` hardcoded | `Rosary.jsx:20-25` | External 404/CORS → toast error; bg silently missing |
| `App.css` keyframes consumed by inline `className="animate-fade-in"` / `animate-ping-slow` | `Rosary.jsx`, `RosaryBeads.jsx` | Rename keyframes → animations vanish |
| `body { background-color: #0a0e17 }` in `App.css`/`index.css` | global | If removed, white flash before background image loads |

## Legacy / Dead Code

| Item | Location |
|---|---|
| `setMysteryKey` declared, never invoked | `Rosary.jsx:41` 💀 |
| `Music`, `X` icons imported, unused | `Rosary.jsx:2` 💀 |
| Backend `/api/status` endpoints | `server.py` 🧊 unused by feature |
| Default `Home` component from CRA template | already removed in `App.js` |

## Where to make common changes

| Goal | File · symbol |
|---|---|
| Edit a prayer text | `lib/rosaryData.js` → `prayers.<key>.text` |
| Edit a mystery's title / meditation | `lib/rosaryData.js` → `mysteries.<Key>.list[i]` |
| Change day → mystery mapping | `lib/rosaryData.js` → `getMysteriesForToday` |
| Add a step / change structure | `lib/rosaryData.js` → `buildRosarySequence` (then verify bead positions) |
| Change bead geometry | `components/RosaryBeads.jsx` → `getBeadPosition`, `LOOP_*`, `PENDANT_*` |
| Change theme colors | `index.css` (CSS vars) + tokens in `Rosary.jsx` (currently inline hex) |
| Wire manual mystery selector | `Rosary.jsx` add UI → call `setMysteryKey(newKey)` |
| Swap music | `Rosary.jsx:24` `MUSIC_URL` |
| Swap background | `Rosary.jsx:20` `BG_URL` |
| Add keyboard shortcut | `Rosary.jsx` keydown effect |
| Add Toast | import `toast` from `sonner`, call `toast.success/error/info` |
