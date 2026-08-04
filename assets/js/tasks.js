import { loadJSON, saveJSON } from "./storage.js";

const storage_key = "missions";

export class MissionList {
  constructor() {
    this.missions = loadJSON(storage_key, []);
  }

  getAll() {
    return this.missions;
  }

  /** Add a new mission. Returns false (and adds nothing) if the text is empty/whitespace. */
  add(text) {
    const trimmed = (text || "").trim();
    if (!trimmed) return false;

    this.missions.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      text: trimmed,
      completed: false,
      isCurrent: false,
    });
    this._persist();
    return true;
  }

  toggleComplete(id) {
    const mission = this.missions.find((m) => m.id === id);
    if (!mission) return;
    mission.completed = !mission.completed;
    this._persist();
  }

  remove(id) {
    this.missions = this.missions.filter((m) => m.id !== id);
    this._persist();
  }

  /** Mark one mission as the current focus, deselecting any previous one. */
  setCurrent(id) {
    this.missions.forEach((m) => {
      m.isCurrent = m.id === id ? !m.isCurrent : false;
    });
    this._persist();
  }

  countDone() {
    return this.missions.filter((m) => m.completed).length;
  }

  countIncomplete() {
    return this.missions.filter((m) => !m.completed).length;
  }

  _persist() {
    saveJSON(storage_key, this.missions);
  }
}
