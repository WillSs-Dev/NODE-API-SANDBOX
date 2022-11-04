const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs').promises;
const app = require('../src/app');

chai.use(chaiHttp);

const { expect } = chai;

const users = JSON.stringify([
  {
    id: 1,
    firstName: 'Edi',
    lastName: 'Sweetlove',
    gender: 'Female',
  },
  {
    id: 2,
    firstName: 'Vincents',
    lastName: 'Ducker',
    gender: 'Male',
  },
  {
    id: 3,
    firstName: 'Sloan',
    lastName: 'Brickstock',
    gender: 'Male',
  },
]);

const newUser = {
  id: 4,
  firstName: 'Trevar',
  lastName: 'Mantha',
  gender: 'Male',
};

describe('Testing if the API works properly', function () {
  describe('GET method', function () {
    beforeEach(function () {
      sinon.stub(fs, 'readFile').resolves(users);
    });
  
    afterEach(function () {
      sinon.restore();
    });

    it('Using GET method on the root route', async function () {
      const response = await chai.request(app).get('/');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(JSON.parse(users));
    });
    it('Using GET method to find a person by an id', async function () {
      const neron = JSON.stringify({
        id: 3,
        firstName: 'Sloan',
        lastName: 'Brickstock',
        gender: 'Male',
      });

      const response = await chai.request(app).get('/users/3');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(JSON.parse(neron));
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
