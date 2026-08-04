import { PomodoroTimer } from "./timer.js";

/*  DOM references  */
const timerDisplay = document.getElementById("timer-display");
const ringProgress = document.getElementById("ring-progress");
const sessionCounterEl = document.getElementById("session-counter");
const timerAnnouncer = document.getElementById("timer-announcer");

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");

const tabButtons = document.querySelectorAll(".mode-tab");

const settingsForm = document.getElementById("settings-form");
const settingsError = document.getElementById("settings-error");

const missionForm = document.getElementById("mission-form");
const missionInput = document.getElementById("mission-input");
const missionError = document.getElementById("mission-error");
const missionListEl = document.getElementById("mission-list");

const statDoneEl = document.getElementById("stat-done");
const statIncompleteEl = document.getElementById("stat-incomplete");