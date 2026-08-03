## Day 1 — Ideation, design, repo setup

- [x] Brainstorm project idea (chose: Pomodoro-style focus session tracker)
- [x] Write a one-line project proposal: audience, goal, main features
- [x] Sketch/approve wireframe (`documentation/wireframes`)
- [x] Create GitHub repository
- [x] Set up a project board (GitHub Projects / Issues or Trello) with user stories
- [x] Initial commit with base file structure (`index.html`, `css/`, `js/`, `documentation/`)
- [x] Scaffold semantic HTML structure (header, nav, main sections, footer)
- [x] Set up external CSS file with base styling and layout
- [ ] Set up Bootstrap main skeleton code for all files and link them
- [ ] Create README template on ('https://markdown.2bn.dev/')
- [ ] Add readme file and readme template
- [ ] Add wireframes to REDME file and snapshots to ('documentation/images')
- [ ] Add user stories to README file and short description of the project, it's needs and benefits.
- [ ] Push Day 1 work, confirm nothing is broken on `main`

## Day 2 — Implementation

- [ ] Implement timer state machine (focus/break, Start/Pause/Skip/Reset)
- [ ] Implement session settings with input validation
- [ ] Implement task list (add/complete/delete) — DOM updated live
- [ ] Implement session history log and live stats
- [ ] Implement optional Web Audio completion cue with visible toggle
- [ ] Implement accessible status announcements (aria-live, phase changes only)
- [ ] Manual test: desktop Chrome
- [ ] Manual test: desktop Firefox or Safari
- [ ] Manual test: mobile viewport (real device or dev tools)
- [ ] Manual test: keyboard-only navigation (tab through entire page)
- [ ] Manual test: screen reader pass on status announcements and task list
- [ ] Code review: check indentation, naming, comments
- [ ] Commit + push, resolve any merge conflicts

## Day 3 — Polish, validation, deployment

- [ ] Run HTML through [W3C Validator](https://validator.w3.org/) — fix all errors
- [ ] Run CSS through [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) — fix all errors
- [ ] Run JS through a linter (e.g. `npx eslint js/script.js`) — fix all significant issues
- [ ] Confirm zero console errors: empty task submit, invalid session length, skip-before-start, rapid pause/resume
- [ ] Remove all commented-out / dead code
- [ ] Take screenshots of key states (focus running, break running, task list, history) and add to `docs/`
- [ ] Update `README.md` screenshots table with real images + captions
- [ ] Write/finalize AI-use reflection in `README.md` in your own words
- [ ] Deploy to GitHub Pages (or chosen host)
- [ ] Verify deployed version matches dev version exactly — full focus→break cycle, tasks, history
- [ ] Update README with live demo + repo links
- [ ] Final commit with clear message; confirm commit history is clean and descriptive

---

## Grading criteria cross-check

### 1. Front-end design
- [ ] 1.1 Semantic HTML, zero WCAG errors, responsive layout, consistent styling matching wireframe
- [ ] 1.2 Interactive JS features; DOM manipulation of 2+ elements reflecting real-time changes (timer, task list, stats, history table all update live)

### 2. Code validation & responsiveness
- [ ] 2.1 JS passes linter, HTML passes W3C validator, CSS passes Jigsaw validator
- [ ] 2.2 Media queries adjust layout correctly at all breakpoints; semantic markup; intuitive single-page navigation

### 3. Cloud deployment
- [ ] 3.1 Deployed to a cloud host; matches dev version; Git/GitHub used throughout with clear commits; no commented-out code; all links/interactions work

### 4. Documentation & organization
- [ ] 4.1 README explains purpose, user value, deployment steps; screenshots + descriptions included; external code attributed
- [ ] 4.2 Custom vs. external code separated; HTML/CSS/JS well-commented and organized; CSS/JS in external linked files; consistent indentation; descriptive file/folder naming

### 5. JavaScript functionality
- [ ] 5.1 Functions use conditionals/loops correctly; invalid/empty input handled gracefully (settings, task text); no console errors from user actions

### 6. AI tool use & reflection
- [ ] 6.1 README reflection: AI used for code generation, focused on outcomes
- [ ] 6.2 README reflection: AI used for debugging, key interventions noted
- [ ] 6.3 README reflection: AI used for performance/UX optimisation
- [ ] 6.4 README reflection: high-level impact of AI on workflow

---

## Notes / parking lot

_Use this space to jot blockers, ideas for a v2 (e.g. persisting history across visits, long-break-every-4-sessions logic), or things to ask a reviewer._
