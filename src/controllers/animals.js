const {Animal} = include('models');

class AnimalsController {
    static async fetch(req, res, next) {
        try {
            const animals = await Animal.find(req.query);
            console.log(req.query);
            const total = await Animal.countDocuments();
            console.log(total);
            res.send({
                animals,
                total: 100,
                limit: process.env.PAGE_SIZE
            });
        } catch(err) {
            next(err);
        }
    }

    static async create(req, res, next) { //post -- crear
        try {
            const result = await Animal.insertOne(req.body);
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
            //const result = await Animal.findAndUpdate(req.params.id, req.body);
            // Actualiza si encuentra el elemento (sino lo crea)
            const result = await Animal.updateOne({id: req.params.id}, req.body);
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
            const result = await Animal.deletedOne(req.params.id);

            console.log(result);

            if(!result){
                res.status(404).send({code: 'ANIMAL_NOT_FOUND'});
            }

            res.send({
                success: true,
                result
            });
        } catch(err) {
            next(err);
        }
    }

    static async getOne(req, res, next) {
        try {
            const [animal] =await Animal.findById(req.params.id);
            res.send({ animal });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = AnimalsController;
