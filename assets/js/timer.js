const cycles_before_long_break = 4;


export class PomodoroTimer {

  /**
   * @param {{pomodoro:number, short:number, long:number}} durationsInMinutes
   * @param {{onTick:Function, onModeChange:Function, onComplete:Function}} callbacks
   */

    constructor(durationsInMinutes, callbacks = {}) {
    this.durations = { ...durationsInMinutes }; // in minutes
    this.mode = "pomodoro";
    this.remainingSeconds = this.durations.pomodoro * 60;
    this.isRunning = false;
    this.completedPomodoros = 0;
    this.intervalId = null;

    this.onTick = callbacks.onTick || (() => {});
    this.onModeChange = callbacks.onModeChange || (() => {});
    this.onComplete = callbacks.onComplete || (() => {});
  }

  get totalSecondsForMode() {
    return this.durations[this.mode] * 60;
  }

/** Update the stored durations (e.g. from the settings form). Does not affect a running session. */
  setDurations(durationsInMinutes) {
    this.durations = { ...durationsInMinutes };
  }

  /** Switch mode, stop any running countdown, and reset the display to that mode's duration. */

  

    _emitTick() {
    this.onTick(this.remainingSeconds, this.totalSecondsForMode, this.mode);
  }

  _stopInterval() {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

}