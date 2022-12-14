const bcrypt = require('bcryptjs');

const userService = {

  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },

  getUsers(db) {
    return db
      .select('users.username')
      .from('users');
  },

  validateUserName(db, username) {
    return db('users')
      .where({ username })
      .first()
      .then(user => !!user);
  },

  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(([user]) => user );
  },

  addBudgets(db, user_id) {
    return db
      .insert({user_id})
      .into('limits')
  },

  addSummarys(db, user_id) {
    return db
      .insert({user_id})
      .into('summary')
  }
};

module.exports = userService;