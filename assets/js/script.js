import { PomodoroTimer } from "./timer.js";
import { MissionList } from "./tasks.js";
import { loadJSON, saveJSON } from "./storage.js";

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

/*  Missions (task list)  */
const missions = new MissionList();
renderMissions();

missionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const added = missions.add(missionInput.value);
  if (!added) {
    missionError.textContent = "Enter a mission before adding it.";
    return;
  }
  missionError.textContent = "";
  missionInput.value = "";
  renderMissions();
});

function renderMissions() {
  missionListEl.innerHTML = "";

  missions.getAll().forEach((mission) => {
    const li = document.createElement("li");
    li.className = "mission-item list-group-item d-flex align-items-center gap-2";
    if (mission.completed) li.classList.add("is-complete");
    if (mission.isCurrent) li.classList.add("is-current");

    const checkboxId = `mission-check-${mission.id}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "mission-item__checkbox form-check-input mt-0";
    checkbox.id = checkboxId;
    checkbox.checked = mission.completed;
    checkbox.setAttribute("aria-label", `Mark "${mission.text}" as complete`);
    checkbox.addEventListener("change", () => {
      missions.toggleComplete(mission.id);
      renderMissions();
    });

    const label = document.createElement("label");
    label.className = "mission-item__label";
    label.setAttribute("for", checkboxId);
    label.textContent = mission.text;

    const currentBtn = document.createElement("button");
    currentBtn.type = "button";
    currentBtn.className = "mission-item__current-btn btn btn-sm btn-outline-secondary rounded-pill";
    currentBtn.textContent = mission.isCurrent ? "Current" : "Set current";
    currentBtn.setAttribute("aria-pressed", mission.isCurrent ? "true" : "false");
    currentBtn.addEventListener("click", () => {
      missions.setCurrent(mission.id);
      renderMissions();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "mission-item__delete btn-close btn-close-white";
    deleteBtn.setAttribute("aria-label", `Delete mission "${mission.text}"`);
    deleteBtn.addEventListener("click", () => {
      missions.remove(mission.id);
      renderMissions();
    });

    li.append(checkbox, label, currentBtn, deleteBtn);
    missionListEl.appendChild(li);
  });

  statDoneEl.textContent = missions.countDone();
  statIncompleteEl.textContent = missions.countIncomplete();
}

