const {Country} = include('models');

class CountriesController {
    static async fetch(req, res, next) {
        try {
            const countries = await Country.find(req.query);
            console.log(req.query);
            const total = await Country.countDocuments();
            console.log(total);
            res.send({
                countries,
                total: 244,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Country.insertOne(req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Country.updateOne({id: req.params.id}, req.body);
            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const result = await Country.deletedOne(req.params.id);

            console.log(result);

            if(!result){
                res.status(404).send({code: 'COUNTRY_NOT_FOUND'});
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

module.exports = CountriesController;
