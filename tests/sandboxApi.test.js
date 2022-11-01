const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { getUsers } = require('../src/utils/handleFs');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing if the API works properly', function () {
  it('Using method GET on the root route', async function () {
    const users = await getUsers();
    
    const response = await chai.request(app).get('/');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(users);
  });
});