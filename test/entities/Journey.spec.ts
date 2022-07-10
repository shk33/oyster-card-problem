import Journey from '../../src/entities/Journey';
import Fare from '../../src/entities/Fare';
import TransportType from '../../src/enums/TransportType';
import { StationName } from '../../src/entities/Station';

describe('Journey', () => {
    it('should initialize a journey', () => {
        const start = StationName.EARLS_COURT;

        const type = TransportType.TUBE;

        const journey = new Journey(type, start);

        expect(journey.getStarPoint()).toEqual(start);
        expect(journey.getTransportType()).toEqual(type);
    });

    it('should set end point of a journey', () => {
        const start = StationName.EARLS_COURT;
        const type = TransportType.TUBE;
        const end = StationName.HAMMERSMITH;

        const journey = new Journey(type, start);
        journey.setEndPoint(end);

        expect(journey.getEndPoint()).toEqual(end);
    });

    it('should return Bus fare when Journey is a Bus Trip', () => {
        const type = TransportType.BUS;

        const journey = new Journey(type, null);

        expect(journey.getFare()).toEqual(Fare.BUS_FARE);
    });
});
