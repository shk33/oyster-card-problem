import Station, { StationName } from './Station';
import Fare from './Fare';
import TransportType from '../enums/TransportType';
import Zone from '../enums/Zone';

class Journey {
    private startPoint: StationName | null;
    private endPoint: StationName | null;
    private transportType: TransportType;
    private isCompleted: boolean;

    constructor(type: TransportType, start: StationName | null) {
        this.transportType = type;
        this.startPoint = start;
        this.endPoint = null;
        this.isCompleted = false;
    }

    getStarPoint() {
        return this.startPoint;
    }

    getEndPoint() {
        return this.endPoint;
    }

    setEndPoint(end: StationName) {
        this.endPoint = end;
    }

    getTransportType() {
        return this.transportType;
    }

    completeJourney(end: StationName) {
        this.endPoint = end;
    }

    isJourneyInZone(zone: Zone): boolean {
        if (this.startPoint && this.endPoint) {
            const startZones = Station.getStationZones(this.startPoint);
            const endZones = Station.getStationZones(this.endPoint);

            return startZones.includes(zone) && endZones.includes(zone);
        }

        return false;
    }

    getJourneyMinDistance(): number {
        if (this.startPoint && this.endPoint) {
            const startZones = Station.getStationZones(this.startPoint);
            const endZones = Station.getStationZones(this.endPoint);

            const zonesIntersection = startZones.filter((x) =>
                endZones.includes(x),
            );
            const isJourneyInSameZone = zonesIntersection.length > 0;

            if (isJourneyInSameZone) return 0;

            const minStartDistance = Math.min(...startZones);
            const minEndDistance = Math.min(...endZones);

            return Math.abs(minStartDistance - minEndDistance);
        }

        return 0;
    }

    getFare(): number {
        if (this.transportType === TransportType.BUS) {
            return Fare.BUS_FARE;
        }

        if (!this.isCompleted) {
            return Fare.MAX_TUBE_FARE;
        }

        

        return 0;
    }
}

export default Journey;
