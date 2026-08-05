# [Mission Control](https://azizr96.github.io/mission-control)
 
A Pomodoro focus timer with an integrated mission (task) list, built as a JavaScript Group Project for the AI Augmented FullStack Bootcamp.
 
Developers: 
Rauhan Aziz ([Azizr96](https://www.github.com/Azizr96)),
Amir Mohammadi ([amirmhmdi](https://github.com/amirmhmdi)),
Davy K. Berry ([davy-berry](https://github.com/davy-berry)),
Sarah J Hill ([sarahjhill](https://github.com/sarahjhill))



<!-- Add GitHub profile links for Sarah / Amir / Davy once available -->
 
[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Azizr96/mission-control)](https://www.github.com/Azizr96/mission-control/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/Azizr96/mission-control)](https://www.github.com/Azizr96/mission-control/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/Azizr96/mission-control)](https://www.github.com/Azizr96/mission-control)
[![badge](https://img.shields.io/badge/deployment-GitHub_Pages-purple)](https://azizr96.github.io/mission-control)
 
## Introduction
 
Mission Control is a single-page Pomodoro timer paired with a task list, wrapped in a "mission control" theme. Timer sessions are Pomodoros, tasks are missions, and progress is tracked as Mission Stats. It's built for anyone who wants a focused, distraction-free way to structure work into timed intervals: students revising for exams, developers deep in a coding session, or anyone using the Pomodoro Technique (25 minutes of focus, 5-minute breaks, a longer break every 4th cycle) to manage their attention.
 
We selected this project because effective time management and maintaining focus are challenges that every member of the team has experienced personally. A Pomodoro timer offered a well-defined yet meaningful problem to solve, providing opportunities to demonstrate thoughtful UX design through features such as a live countdown, mode switching, and data persistence. It also allowed us to incorporate accessibility best practices, including keyboard navigation, screen-reader support, and WCAG-compliant colour contrast, making it an ideal project for showcasing the full range of skills required by the assessment.
 
![screenshot](documentation/screenshots/responsive-preview.png)
 
source: [mission-control amiresponsive](https://ui.dev/amiresponsive?url=https://azizr96.github.io/mission-control)
 
## UX
 
### The 5 Planes of UX
 
#### 1. Strategy
 
**Purpose**
- Give users a simple, focused way to run Pomodoro sessions without leaving the page.
- Let users track missions (tasks) alongside their focus sessions, so the timer and the work list live in one place.
- Make the whole experience accessible: keyboard-navigable, screen-reader friendly, and WCAG-contrast-checked by design, not as an afterthought.
**Primary User Needs**
- Start, pause, and reset a focus session without confusion about which mode is active.
- Add, complete, and remove tasks quickly, and mark one as the current focus.
- Trust that progress (missions, durations) survives a page refresh.
**Business/Project Goals**
- Meet the bootcamp's assessment criteria for front-end design, interactivity, validation, deployment, documentation, and AI-tool usage.
- Demonstrate genuine team collaboration through a clear Git history and divided ownership of features.
#### 2. Scope
 
**[Features](#features)** (see below)
 
**Content Requirements**
- Clear mode labels (Pomodoro / Short Break / Long Break) and an always-visible countdown.
- An accessible mission list: add, complete, delete, and mark-as-current, with empty-input validation.
- A live, on-screen Mission Stats summary (missions done / incomplete).
- A short in-app instructions modal for first-time users.
#### 3. Structure
 
**Information Architecture**
- Single page, two main panels: the Timer panel and the Missions panel, side by side on desktop and stacked on mobile/tablet.
- A full-width Mission Stats strip beneath both panels.
- An instructions modal, reachable from a "How it works" link in the header, for on-demand guidance rather than cluttering the main layout.
**User Flow**
1. User lands on the page and (optionally) opens "How it works" for a quick briefing.
2. User adds one or more missions to the list, optionally marking one as current.
3. User presses Start to begin a 25-minute Pomodoro session.
4. On completion, the app automatically switches to a Short Break (or, every 4th cycle, a Long Break).
5. User checks off missions as they're completed; Mission Stats update live.
6. Settings (durations) and all missions persist automatically between visits.
#### 4. Skeleton
 
**[Wireframes](#wireframes)** (see below)
 
#### 5. Surface
 
**Visual Design Elements**
- **[Colour Scheme](#colour-scheme)** (see below)
- **[Typography](#typography)** (see below)

