const {AnimalsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(AnimalsController.fetch)
        .post(AnimalsController.create);

    router.route('/:id')
        .get(AnimalsController.getOne)
        .put(AnimalsController.save)
        .delete(AnimalsController.delete);
    return router;
};
