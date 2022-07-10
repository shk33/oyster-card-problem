import Journey from '../../src/entities/Journey';
import TransportType from '../../src/enums/TransportType';
import { StationName } from '../../src/entities/Station';

describe('Journey', () => {
    it('should initialize a journey', () => {
        const start = StationName.EARLS_COURT;
        const end = StationName.HAMMERSMITH;
        const type = TransportType.TUBE;

        const journey = new Journey(start, end, type);

        expect(journey.getStarPoint()).toEqual(start);
        expect(journey.getEndPoint()).toEqual(end);
        expect(journey.getTransportType()).toEqual(type);
    });
});
