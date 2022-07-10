import Card from '../../src/entities/Card';

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
});
