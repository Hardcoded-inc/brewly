const axios = require('axios').default;
const { getApiUrl } = require('../utils');

const API_URL = getApiUrl() + '/coffee'
const TEST_COFFEE = {
    _id: '6251bf2703f444271e0f10e4',
    name: 'Mazenda Moinho',
    acidity: 'high',
    bitterness: 'medium',
    sweetness: 'low',
    origin: 'Brasil',
    flavors: [ 'orange', 'grapes', 'rose' ],
    __v: 0,
    imgUrl: 'https://www.konesso.pl/pol_pl_Kawa-ziarnista-Caffe-Grano-Nicaragua-Marcellesa-250g-9494_1.jpg'
  }

describe('coffe.js', () => {
    describe('GET /coffee', () => {
        it('GET should return coffee data', async () => {
            const result = await axios.get(API_URL)
            expect(result.status).toEqual(200);
            expect(result.data.length).toBeGreaterThan(0);
            expect(result.data).toContainEqual(TEST_COFFEE);
        })
    })

    describe('GET /coffee/:id', () => {
        it('GET coffee by id should return coffee data', async () => {
            const result = await axios.get(API_URL + '/' + TEST_COFFEE._id + '/');
            expect(result.status).toEqual(200);
            expect(result.data).toEqual(TEST_COFFEE);
        })

        it('GET coffee by id when id is unknown should return 500 status code', async() => {
            try {
                await axios.get(API_URL + '/200')
            } catch (err) {
                console.log(err.response);
                expect(err.response.status).toEqual(500)
            }
        })
    })

    describe('POST /coffee', () => {
        it('POST should create new data', async () => {
            const result = await axios.post(API_URL, {'name': 'test_name'})
            expect(result.status).toEqual(200)
            expect(result.data.name).toContain('test_name')
        })
    })

    describe('POST /coffee', () => {
        it('POST should create new data', async () => {
            const result = await axios.post(API_URL, {'name': 'test_name'})
            expect(result.status).toEqual(200)
            expect(result.data.name).toEqual('test_name')
        })
    })
})