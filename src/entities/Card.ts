import Journey from './Journey';
import { StationName } from './Station';

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

    swipeOut(journey: Journey, endPoint: StationName) {
        journey.completeJourney(endPoint);

        if (journey.isJourneyTubeType()) {
            const actualFare = journey.getFare();
            const maximunFare = journey.getMaximumPossibleFare();

            if (actualFare < maximunFare) {
                this.addCredit(maximunFare);
                this.makeCharge(actualFare);
            }
        }
    }

    private makeCharge(amount: number) {
        const newBalance = this.credit - amount;
        this.setCurrentCredit(newBalance);
    }
}

export default Card;
