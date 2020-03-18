const {Instrument} = include('models');

class InstrumentsController {
    static async fetch(req, res, next) {
        try {
            const instruments = await Instrument.find(req.query);

            res.send(instruments);
        } catch(err) {
            next (err);
        }
    }
}

module.exports = InstrumentsController;
