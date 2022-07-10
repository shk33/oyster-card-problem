import { StationName } from './Station';
import Fare from './Fare';
import TransportType from '../enums/TransportType';

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
