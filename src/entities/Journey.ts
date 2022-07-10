import { StationName } from './Station';
import TransportType from '../enums/TransportType';

class Journey {
    private startPoint: StationName | null;
    private endPoint: StationName | null;
    private transportType: TransportType;

    constructor(type: TransportType, start: StationName | null) {
        this.transportType = type;
        this.startPoint = start;
        this.endPoint = null;
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
}

export default Journey;
