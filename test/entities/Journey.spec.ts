import Journey from '../../src/entities/Journey';

describe('Journey', () => {
    it('should have inital credit of zero', () => {
        const card = new Card();
        expect(card.getCurrentCredit()).toEqual(0);
    });
});
