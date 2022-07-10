import Station, { StationName } from '../../src/entities/Station';
import Zone from '../../src/enums/Zone';

describe('Station', () => {
    it('should return station associated zones', () => {
        const stationZones = [Zone.ZONE_1, Zone.ZONE_2];
        expect(Station.getStationZones(StationName.EARLS_COURT)).toEqual(
            stationZones,
        );
    });
});
