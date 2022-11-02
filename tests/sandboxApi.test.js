const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { getUsers } = require('../src/utils/handleFs');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing if the API works properly', function () {
  describe('GET method', function () {
    it('Using GET method on the root route', async function () {
      const users = await getUsers();
  
      const response = await chai.request(app).get('/');
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(users);
    });
    it('Using GET method to find a person by an id', async function () {
      const neron = {
        id: 10,
        firstName: 'Neron',
        lastName: 'Izakovitz',
        gender: 'Male',
      };
  
      const response = await chai.request(app).get('/users/10');
  
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(neron);
    });
  });
  describe('POST method', function () {
    it('Using POST method to add a new user', async function () {
      // Mock fsWriteFile

      // Create new user

      // Post new user 

      // Assert database's length and the last item's id
    });
  });
});
