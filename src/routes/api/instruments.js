const {InstrumentsController} = include('controllers');

module.exports = router => {
    router.get('/', InstrumentsController.fetch);
    return router;
};
