const {Animal} = include('models');

class AnimalsController {
    static async fetch(req, res, next) {
        try {
            const animals = await Animal.find(req.query);

            res.send(animals);
        } catch(err) {
            next (err);
        }
    }
}

module.exports = AnimalsController;
