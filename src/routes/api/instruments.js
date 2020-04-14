const {InstrumentsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(InstrumentsController.fetch)
        .post(InstrumentsController.create);

    router.route('/:id')
        .get(InstrumentsController.getOne)
        .put(InstrumentsController.save)
        .delete(InstrumentsController.delete);

    return router;
};
