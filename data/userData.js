const db = require("./conn");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users";

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getOldestUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users ORDER BY created_at LIMIT 10";

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getNewUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users ORDER BY created_at DESC LIMIT 10";

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getInnactiveUsers = () => {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT users.id, username, users.created_at FROM users
    LEFT JOIN photos ON users.id = photos.user_id
    WHERE image_url IS NULL;
    `;

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getUsersPaginated = (startIndex, pageSize) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users ORDER BY id LIMIT ?, ?";
    const values = [startIndex, pageSize];

    db.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const searchUsers = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE username LIKE ?";
    const searchTermLike = `${searchTerm}%`;

    db.query(query, [searchTermLike, searchTermLike], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createUser = (username) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (username) VALUES (?)";

    db.query(query, [username], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM users WHERE id = ?";

    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  getUsers,
  getOldestUsers,
  getNewUsers,
  getInnactiveUsers,
  getUsersPaginated,
  searchUsers,
  createUser,
  deleteUser,
};
