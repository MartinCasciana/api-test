const {
    request,
    Sinon
} = require('..');

const {Instrument} = include('models');

describe('api/instruments', () => {
    // Descripcion de lo que estamos haciendo
    let modelFunction;
    let modelFunction2;
    let mockResult;

    beforeEach(() => {
        // se ejecuta antes de cada it << iteracion
        mockResult = [
            {
                id: '00000000-0000-0000-0000-000000000000',
                instrument: 'fake-instrument'
            },
            {
                id: '00000000-0000-0000-0000-000000000001',
                instrument: 'fake-instrument-2'
            }
        ];
        modelFunction = Sinon.stub(Instrument, 'find').returns(Promise.resolve(mockResult));
        modelFunction2 = Sinon.stub(Instrument, 'countDocuments').returns(Promise.resolve([{count: 33}]));
    });

    afterEach(() => {
        // se ejecuta dsp de cada it << iteracion
        Instrument.find.restore();
        Instrument.countDocuments.restore();
    });

    // Lo bueno
    // Lo Malo
    // Y Lo Prohibido -- Roles | <<<  >>>
    it('instrument response', done => {
        request
            .get('/api/instrument')
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

                res.body.should.have.property('instrument').which.is.an.Array();
                res.body.should.have.property('total').which.is.a.Number();
                res.body.should.have.property('limit').which.is.a.Number();
                res.body.countries.should.be.deepEqual(mockResult);
                console.log(result, result2);
                done();
            });
    });

});
