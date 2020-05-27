const {
    request,
    Sinon
} = require('..');

const {Animal} = include('models');

describe('api/animals', () => {
    // Descripcion de lo que estamos haciendo
    let modelFunction;
    let modelFunction2;
    let mockResult;

    beforeEach(() => {
        // se ejecuta antes de cada it << iteracion
        mockResult = [
            {
                id: '00000000-0000-0000-0000-000000000000',
                animal: 'fake-animal'
            },
            {
                id: '00000000-0000-0000-0000-000000000001',
                animal: 'fake-animal-2'
            }
        ];
        modelFunction = Sinon.stub(Animal, 'find').returns(Promise.resolve(mockResult));
        modelFunction2 = Sinon.stub(Animal, 'countDocuments').returns(Promise.resolve([{count: 33}]));
    });

    afterEach(() => {
        // se ejecuta dsp de cada it << iteracion
        Animal.find.restore();
        Animal.countDocuments.restore();
    });

    // Lo bueno
    // Lo Malo
    // Y Lo Prohibido -- Roles | <<<  >>>
    it('animals response', done => {
        request
            .get('/api/animals')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            /**
             *  Esto es tu body que se envia para post / put
                .send(JSON.stringify({
                    username: 'fake-user',
                    password: 'fake-password'
                }))
             */
            .expect(200)
            .end((err, res) => {
                const result = modelFunction.calledWith();
                const result2 = modelFunction2.calledWith();

                res.body.should.have.property('animals').which.is.an.Array();
                res.body.should.have.property('total').which.is.a.Number();
                res.body.should.have.property('limit').which.is.a.Number();
                res.body.countries.should.be.deepEqual(mockResult);
                console.log(result, result2);
                done();
            });
    });

});
