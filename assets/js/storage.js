const prefix = "missionControl:";

/**
 * Load and parse a JSON value from localStorage.
 * Returns fallback if the key is missing or the stored value is corrupt.
 */
export function loadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(prefix + key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`Could not read "${key}" from storage, using fallback.`, err);
    return fallback;
  }
}

/**
 * Stringify and save a value to localStorage.
 */
export function saveJSON(key, value) {
  try {
    window.localStorage.setItem(prefix + key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`Could not save "${key}" to storage.`, err);
    return false;
  }
}
