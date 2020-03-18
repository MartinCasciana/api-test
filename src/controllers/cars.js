const {Car} = include('models');

class CarsController {
    static async fetch(req, res, next) {
        try {
            const cars = await Car.find(req.query);

            res.send(cars);
        } catch(err) {
            next (err);
        }
    }
}

module.exports = CarsController;
