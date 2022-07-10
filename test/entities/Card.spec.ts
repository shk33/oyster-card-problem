import Card from '../../src/entities/Card';

describe('Card', () => {
    it('should have inital credit of zero', () => {
        const card = new Card();
        expect(card.getCurrentCredit()).toEqual(0);
    });

    it('should have inital fare of zero', () => {
        const card = new Card();
        expect(card.getFare()).toEqual(0);
    });

    it('should add card credit', () => {
        const card = new Card();
        card.addCredit(30);
        expect(card.getCurrentCredit()).toEqual(30);
    });
});
