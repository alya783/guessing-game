class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.attempt = Math.round((this.max - this.min) / 2) + this.min;
        return this.attempt;
    }

    lower() {
        this.min = this.attempt + 1;
    }

    greater() {
         this.max = this.attempt - 1;
    }
}

module.exports = GuessingGame;
