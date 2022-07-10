import Journey from '../../src/entities/Journey';
import Fare from '../../src/entities/Fare';
import TransportType from '../../src/enums/TransportType';
import Zone from '../../src/enums/Zone';
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

    describe('isJourneyInZone()', () => {
        it('should return true when end and start point are in the same zone', () => {
            const type = TransportType.TUBE;
            const start = StationName.EARLS_COURT;
            const end = StationName.HOLBORN;

            const journey = new Journey(type, start);
            journey.setEndPoint(end);

            expect(journey.isJourneyInZone(Zone.ZONE_1)).toEqual(true);
        });

        it('should return false when end and start point are in different zones', () => {
            const type = TransportType.TUBE;
            const start = StationName.EARLS_COURT;
            const end = StationName.WIMBLEDON;

            const journey = new Journey(type, start);
            journey.setEndPoint(end);

            expect(journey.isJourneyInZone(Zone.ZONE_3)).toEqual(false);
        });
    });

    describe('getJourneyMinDistance()', () => {
        it('should return 0 when end and start point are in the zone 1', () => {
            const type = TransportType.TUBE;
            const start = StationName.EARLS_COURT;
            const end = StationName.HOLBORN;

            const journey = new Journey(type, start);
            journey.setEndPoint(end);

            expect(journey.getJourneyMinDistance()).toEqual(0);
        });

        it('should return 0 when end and start point are in the zone 2', () => {
            const type = TransportType.TUBE;
            const start = StationName.EARLS_COURT;
            const end = StationName.HAMMERSMITH;

            const journey = new Journey(type, start);
            journey.setEndPoint(end);

            expect(journey.getJourneyMinDistance()).toEqual(0);
        });

        it('should return 2 when end is in zone 3 and start is in zone 1', () => {
            const type = TransportType.TUBE;
            const start = StationName.HOLBORN;
            const end = StationName.WIMBLEDON;

            const journey = new Journey(type, start);
            journey.setEndPoint(end);

            expect(journey.getJourneyMinDistance()).toEqual(2);
        });
    });

    describe('getFare()', () => {
        it('should return Bus fare when Journey is a Bus Trip', () => {
            const type = TransportType.BUS;

            const journey = new Journey(type, null);

            expect(journey.getFare()).toEqual(Fare.BUS_FARE);
        });
    });

});
