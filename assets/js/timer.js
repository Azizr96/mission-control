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
  setMode(mode) {
    if (!this.durations[mode]) return;
    this._stopInterval();
    this.isRunning = false;
    this.mode = mode;
    this.remainingSeconds = this.totalSecondsForMode;
    this.onModeChange(this.mode);
    this._emitTick();
  }

  /** Start the countdown if it is not already running. */
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.intervalId = window.setInterval(() => this._tick(), 1000);
  }

  /** Pause the countdown and stop the interval. */
  pause() {
    if (!this.isRunning) return;
    this.isRunning = false;
    this._stopInterval();
  }

  /** Stop the countdown and reset it to the full duration for the current mode. */
  stop() {
    this._stopInterval();
    this.isRunning = false;
    this.remainingSeconds = this.totalSecondsForMode;
    this._emitTick();
  }

  /** Decrement the timer by one second and handle completion. */
  _tick() {
    this.remainingSeconds -= 1;
    if (this.remainingSeconds <= 0) {
      this.remainingSeconds = 0;
      this._emitTick();
      this._handleSessionComplete();
      return;
    }
    this._emitTick();
  }

  /** Handle a completed session and move to the next phase. */
  _handleSessionComplete() {
    this._stopInterval();
    this.isRunning = false;

    const finishedMode = this.mode;
    this.onComplete(finishedMode);

    if (finishedMode === "pomodoro") {
      this.completedPomodoros += 1;
      const nextMode =
        this.completedPomodoros % cycles_before_long_break === 0 ? "long" : "short";
      this.setMode(nextMode);
    } else {
      this.setMode("pomodoro");
    }
  }

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