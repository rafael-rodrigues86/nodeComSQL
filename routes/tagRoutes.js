const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController");

router.get("/most-used", (req, res) => {
  tagController
    .getTags()
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter tags!" + error);
    });
});

router.post("/", (req, res) => {
  const { tag_name } = req.body;
  tagController
    .createTag(tag_name)
    .then((result) => {
      res.status(200).json({
        message: "Tag criada com sucesso! Id: " + result.insertId,
      });
    })
    .catch((error) => {
      res.status(500).send("Erro ao inserir tag na rota!" + error);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  tagController
    .deleteTagById(id)
    .then((result) => {
      res.status(200).send("Tag Excluida com sucesso!");
    })
    .catch((error) => {
      res.status(500).send("Erro ao excluir tag! " + error);
    });
});

module.exports = router;
