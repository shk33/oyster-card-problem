class Card {
    credit: number;

    constructor() {
        this.credit = 0;
    }

    getCurrentCredit() {
        return this.credit;
    }

    addCredit(creditToAdd: number) {
        this.credit += creditToAdd;
    }
}

export default Card;
