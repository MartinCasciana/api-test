const {CarsController} = include('controllers');

module.exports = router => {
    router.get('/', CarsController.fetch);
    return router;
};
