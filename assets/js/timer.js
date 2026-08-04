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
}