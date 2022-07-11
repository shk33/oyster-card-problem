import { findSmallestDifference } from '../../src/helper/Helper';

describe('Helper', () => {
    describe('findSmallestDifference()', () => {
        it('should return the smallest diff in two arrays of numbers', () => {
            expect(findSmallestDifference([0, 1, 2, 3, 4], [3, 4, 5])).toEqual(
                0,
            );
            expect(
                findSmallestDifference([11, 5, 3, 2], [9, 35, 7, 40]),
            ).toEqual(2);
            expect(findSmallestDifference([87, 23, 45], [40, 12, 56])).toEqual(
                5,
            );
        });
    });
});
