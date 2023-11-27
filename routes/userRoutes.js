const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  userController
    .getUsers()
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter usuários!" + error);
    });
});

router.get("/oldest", (req, res) => {
  userController
    .getOldestUsers()
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter usuários mais antigos!" + error);
    });
});

router.get("/new", (req, res) => {
  userController
    .getNewUsers()
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter usuários mais novos!" + error);
    });
});

router.get("/innactive", (req, res) => {
  userController
    .getInnactiveUsers()
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter usuários inativos!" + error);
    });
});

router.get("/search", (req, res) => {
  const searchTerm = req.query.searchTerm;
  userController
    .searchUsers(searchTerm)
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res
        .status(500)
        .send("Erro ao buscar usuário por termo! Detalhes: " + error);
    });
});

router.get("/paginated", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 20;

  userController
    .getUsersPaginated(page, pageSize)
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter usuários por página!" + error);
    });
});

router.post("/", (req, res) => {
  const { username } = req.body;

  userController
    .createUser(username)
    .then((result) => {
      res.status(200).json({
        message: "Usuário criada com sucesso! Id: " + result.insertId,
      });
    })
    .catch((error) => {
      res.status(500).send("Erro ao inserir usuário!" + error);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  userController
    .deleteUser(id)
    .then((result) => {
      res.status(200).send("Usuário excluido com sucesso!");
    })
    .catch((error) => {
      res.status(500).send("Erro ao excluir usuário! " + error);
    });
});

module.exports = router;
