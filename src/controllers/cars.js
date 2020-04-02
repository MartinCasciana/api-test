const {Car} = include('models');

class CarsController {
    static async fetch(req, res, next) {
        try {
            const cars = await Car.find(req.query);
            console.log(req.query);
            const total = await Car.countDocuments();
            console.log(total);
            res.send({
                cars,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) { //post -- crear
        try {
            const result = await Car.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async save(req, res, next) { //post -- crear
        try {
            //const result = await Car.findAndUpdate(req.params.id, req.body);
            // Actualiza si encuentra el elemento (sino lo crea)
            const result = await Car.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async delete(req, res, next) { //post -- crear
        try {
            const result = await Car.deletedOne(req.params.id);

            console.log(result);

            if(!result){
                res.status(404).send({code: 'CAR_NOT_FOUND'});
            }

            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }
}

module.exports = CarsController;
