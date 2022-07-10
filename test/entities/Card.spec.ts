import TransportType from '../../src/enums/TransportType';
import Card from '../../src/entities/Card';
import Journey from '../../src/entities/Journey';

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
});
