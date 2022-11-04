const fs = require('fs').promises;

const getUsers = async () => {
  try {
    const users = await fs.readFile(`${__dirname}/../users.json`, 'utf8');
    return JSON.parse(users);
  } catch (error) {
    return `An error ocurred: ${error}`;
  }
};

const addUser = async (user) => {
  try {
    const users = await getUsers();
    const newUserWithId = {
      id: users[users.length - 1].id + 1,
      ...user,
    };
    users.push(newUserWithId);
    fs.writeFile(`${__dirname}/../users.json`, JSON.stringify(users));
    return `User added to the database: ${JSON.stringify(newUserWithId)}`;
  } catch (error) {
    return `An error ocurred: ${error}`;
  }
};

module.exports = { getUsers, addUser };
