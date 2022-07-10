import Journey from './Journey';

class Card {
    private credit: number;

    constructor() {
        this.credit = 0;
    }

    getCurrentCredit() {
        return this.credit;
    }

    setCurrentCredit(amount: number) {
        this.credit = amount;
    }

    addCredit(creditToAdd: number) {
        this.credit += creditToAdd;
    }

    swipeIn(journey: Journey) {
        const fare = journey.getFare();
        this.makeCharge(fare);
    }

    private makeCharge(amount: number) {
        const newBalance = this.credit - amount;
        this.setCurrentCredit(newBalance);
    }
}

export default Card;
