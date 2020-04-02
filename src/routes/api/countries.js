const {CountriesController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(CountriesController.fetch)
        .post(CountriesController.create);
    router.route('/:id')
        .put(CountriesController.save)
        .delete(CountriesController.delete);
    return router;
};
