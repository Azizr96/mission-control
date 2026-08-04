import { loadJSON, saveJSON } from "./storage.js";

const storage_key = "missions";

export class MissionList {
    constructor() {
        this.missions = loadJSON(storage_key, []);
    }

    getAll() { }

    /** Add a new mission. Returns false (and adds nothing) if the text is empty/whitespace. */
    add(text) { }

    toggleComplete(id) { }

    remove(id) {}

    /** Mark one mission as the current focus, deselecting any previous one. */
    setCurrent(id) {}

    countDone() {}

    countIncomplete() {}

    _persist() { }
}
