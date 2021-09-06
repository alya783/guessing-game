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
       this.setRange(this.min, this.attempt);
    }

    greater() {
        this.setRange(this.attempt, this.max); 
    }
}

module.exports = GuessingGame;
