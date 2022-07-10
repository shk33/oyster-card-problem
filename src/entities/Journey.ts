import { StationName } from './Station';
import TransportType from '../enums/TransportType';

class Journey {
    private startPoint: StationName;
    private endPoint: StationName | null;
    private transportType: TransportType;

    constructor(start: StationName, type: TransportType) {
        this.startPoint = start;
        this.transportType = type;
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
