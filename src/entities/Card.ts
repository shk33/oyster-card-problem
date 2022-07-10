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

    getFare() {
        return this.fare;
    }

    addCredit(creditToAdd: number) {
        this.credit += creditToAdd;
    }
}

export default Card;
