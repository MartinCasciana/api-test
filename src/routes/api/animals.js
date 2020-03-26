const {AnimalsController} = include('controllers');

module.exports = router => {
    router.get('/', AnimalsController.fetch);
    return router;
};
