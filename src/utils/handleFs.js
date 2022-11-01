const fs = require('fs').promises;

const getUsers = async () => {
  try {
    const users = await fs.readFile(`${__dirname}/../users.json`, 'utf8');
    return JSON.parse(users);
  } catch (error) {
    return `An error ocurred: ${error}`;
  }
};

module.exports = { getUsers };
