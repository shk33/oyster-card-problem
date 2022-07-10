import Journey from './Journey';

class Card {
    private credit: number;
    private fare: number;

    constructor() {
        this.credit = 0;
        this.fare = 0;
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
        
    }

    private addCharge(amount: number) {
        const newBalance = this.credit - amount;
        this.setCurrentCredit(newBalance);
    }
}

export default Card;
