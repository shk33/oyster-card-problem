import TransportType from '../../src/enums/TransportType';
import Card from '../../src/entities/Card';
import Journey from '../../src/entities/Journey';
import { StationName } from '../../src/entities/Station';

describe('Multiple Trips', () => {
    it('should make a tube trip, a bus trip and a tube trip', () => {
        const card = new Card();
        card.addCredit(30);

        const tubeJourney1 = new Journey(
            TransportType.TUBE,
            StationName.HOLBORN,
        );

        card.swipeIn(tubeJourney1);
        card.swipeOut(tubeJourney1, StationName.EARLS_COURT);

        const busJourney = new Journey(TransportType.BUS, null);
        card.swipeIn(busJourney);

        const tubeJourney2 = new Journey(
            TransportType.TUBE,
            StationName.EARLS_COURT,
        );
        card.swipeIn(tubeJourney2);
        card.swipeOut(tubeJourney2, StationName.HAMMERSMITH);

        expect(card.getCurrentCredit()).toEqual(23.7);
    });
});
