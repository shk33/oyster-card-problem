import TransportType from '../../src/enums/TransportType';
import Card from '../../src/entities/Card';
import Journey from '../../src/entities/Journey';
import Fare from '../../src/entities/Fare';
import { StationName } from '../../src/entities/Station';

describe('Card', () => {
    it('should have inital credit of zero', () => {
        const card = new Card();
        expect(card.getCurrentCredit()).toEqual(0);
    });

    it('should set current credit', () => {
        const card = new Card();
        card.setCurrentCredit(12);
        expect(card.getCurrentCredit()).toEqual(12);
    });

    it('should add card credit', () => {
        const card = new Card();
        card.addCredit(30);
        expect(card.getCurrentCredit()).toEqual(30);
    });

    it('should add card credit', () => {
        const card = new Card();
        card.addCredit(30);
        expect(card.getCurrentCredit()).toEqual(30);
    });

    describe('Bus journey', () => {
        it('should swipe in a bus journey and charge the Bus fare ', () => {
            const card = new Card();
            const busJourney = new Journey(TransportType.BUS, null);
            card.addCredit(30);
            card.swipeIn(busJourney);

            expect(card.getCurrentCredit()).toEqual(28.2);
        });
    });

    describe('Tube journey', () => {
        it('should swipe in a tube journey and initially charge the Max fare (No swipe out happened)', () => {
            const card = new Card();
            const tubeJourney = new Journey(
                TransportType.TUBE,
                StationName.EARLS_COURT,
            );

            const initalCredit = 30;
            card.addCredit(initalCredit);
            card.swipeIn(tubeJourney);

            const currentCredit = initalCredit - Fare.MAX_TUBE_COST;
            expect(card.getCurrentCredit()).toEqual(currentCredit);
        });
    });
});
