const {CountriesController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CountriesController.fetch)
        .post(CountriesController.create);

    router.route('/:id')
        .get(CountriesController.getOne)
        .put(CountriesController.save)
        .delete(CountriesController.delete);

    return router;
};
