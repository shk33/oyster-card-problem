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
        this.isCompleted = true;
    }

    isJourneyInZone(zone: Zone): boolean {
        if (this.startPoint && this.endPoint) {
            const startZones = Station.getStationZones(this.startPoint);
            const endZones = Station.getStationZones(this.endPoint);

            return startZones.includes(zone) && endZones.includes(zone);
        }

        return false;
    }

    doesJourneyIncludesZone(zone: Zone): boolean {
        if (this.startPoint && this.endPoint) {
            const startZones = Station.getStationZones(this.startPoint);
            const endZones = Station.getStationZones(this.endPoint);

            return startZones.includes(zone) || endZones.includes(zone);
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

            const minStartDistance = Math.max(...startZones);
            const minEndDistance = Math.max(...endZones);

            return Math.abs(minStartDistance - minEndDistance);
        }

        return 0;
    }

    getFare(): number {
        if (this.transportType === TransportType.BUS) {
            return Fare.BUS_FARE;
        }

        if (!this.isCompleted) {
            return Fare.MAX_TUBE_COST;
        }

        if (this.isCompleted && this.transportType === TransportType.TUBE) {
            const journeyMinDistance = this.getJourneyMinDistance();

            if (journeyMinDistance == 0) {
                const isJourneyInZone1 = this.isJourneyInZone(Zone.ZONE_1);

                if (isJourneyInZone1) {
                    return Fare.COST_ONLY_ZONE_ONE;
                }
                return Fare.COST_ONE_ZONE_NOT_INCLUDING_ZONE_ONE;
            }

            if (journeyMinDistance == 1) {
                const doesJourneyIncludesZone = this.doesJourneyIncludesZone(
                    Zone.ZONE_1,
                );

                if (doesJourneyIncludesZone) {
                    return Fare.COST_TWO_ZONES_INCLUDING_ZONE_ONE;
                }
                return Fare.COST_TWO_ZONES_EXCLUDING_ZONE_ONE;
            }

            return Fare.MAX_TUBE_COST;
        }

        return 0;
    }
}

export default Journey;
