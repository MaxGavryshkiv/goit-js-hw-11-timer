class CountdownTimer {
  constructor(selector, targetDate = 0) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;
  }
  getSeconds() {
    const secs = Math.floor((this.targetDate % (1000 * 60)) / 1000);
    return String(secs).padStart(2, '0');
  }
  getMinutes() {
    const mins = Math.floor((this.targetDate % (1000 * 60 * 60)) / (1000 * 60));
    return String(mins).padStart(2, '0');
  }
  getHours() {
    const hours = Math.floor(
      (this.targetDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    return String(hours).padStart(2, '0');
  }
  getDays() {
    const days = Math.floor(this.targetDate / (1000 * 60 * 60 * 24));
    return String(days).padStart(2, '0');
  }
  render() {
    this.element.innerHTML = `
      <div class="field">
        <span class="value" data-value="days">${this.getDays()}</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">${this.getHours()}</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">${this.getMinutes()}</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">${this.getSeconds()}</span>
        <span class="label">Seconds</span>
      </div>
    `;
  }

  init() {
    const interval = setInterval(() => {
      this.targetDate -= 1000;

      if (this.targetDate <= 0) {
        this.targetDate = 0;
        clearInterval(interval);
      }

      this.render();
    }, 1000);
  }
}

const timer = new CountdownTimer('.timer', 10000000);
timer.init();
