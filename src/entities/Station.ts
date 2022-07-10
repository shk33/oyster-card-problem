import Zone from '../enums/Zone';

export enum StationName {
    HOLBORN = 'HOLBORN',
    EARLS_COURT = 'EARLS COURT',
    WIMBLEDON = 'WIMBLEDON',
    HAMMERSMITH = 'HAMMERSMITH',
}

const StationZonesMap = {
    [StationName.HOLBORN]: [Zone.ZONE_1],
    [StationName.EARLS_COURT]: [Zone.ZONE_1, Zone.ZONE_2],
    [StationName.WIMBLEDON]: [Zone.ZONE_3],
    [StationName.HAMMERSMITH]: [Zone.ZONE_2],
};

class Station {
    public static getStationZones(stationName: StationName) {
        return StationZonesMap[stationName];
    }
}

export default Station;
