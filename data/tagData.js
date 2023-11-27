const db = require("./conn");

const getTags = () => {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT tag_name, tag_id, COUNT(tag_id) AS total
    FROM photo_tags
    JOIN tags ON photo_tags.tag_id = tags.id
    GROUP BY tag_id
    ORDER BY total DESC
    LIMIT 5;`;

    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const createTag = (tag_name) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO tags (tag_name) VALUES (?)";

    db.query(query, [tag_name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteTagById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM tags WHERE id = ?";

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
  getTags,
  createTag,
  deleteTagById,
};
