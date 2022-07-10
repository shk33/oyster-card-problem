import { StationName } from './Station';
import TransportType from '../enums/TransportType';

class Journey {
    private startPoint: StationName;
    private endPoint: StationName;
    private transportType: TransportType;

    constructor(start: StationName, end: StationName, type: TransportType) {
        this.startPoint = start;
        this.endPoint = end;
        this.transportType = type;
    }

    getStarPoint() {
        return this.startPoint;
    }

    getEndPoint() {
        return this.endPoint;
    }

    getTransportType() {
        return this.transportType;
    }
}

export default Journey;
