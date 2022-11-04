/* eslint-disable mocha/no-hooks-for-single-case */
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
      beforeEach(function () {
        sinon.stub(fs, 'readFile').resolves(users);
      });
    
      afterEach(function () {
        sinon.restore();
      });
      
      const writeStub = sinon.stub(fs, 'writeFile').resolves();

      const response = await chai.request(app).post('/users').send(newUser);
      expect(response.status).to.be.equal(201);
      expect(writeStub.called).to.equal(true);
    });
  });
});
