const usersData = require("../data/userData");

const getUsers = async () => {
  const users = usersData.getUsers();
  if (users) {
    return users;
  } else {
    throw new Error("Erro ao obter os usuários");
  }
};

const getOldestUsers = async () => {
  const oldestUsers = usersData.getOldestUsers();
  if (oldestUsers) {
    return oldestUsers;
  } else {
    throw new Error("Erro ao obter os usuários mais antigos");
  }
};

const getNewUsers = async () => {
  const newUsers = usersData.getNewUsers();
  if (newUsers) {
    return newUsers;
  } else {
    throw new Error("Erro ao obter os usuários mais novos");
  }
};

const getInnactiveUsers = async () => {
  const innactiveUsers = usersData.getInnactiveUsers();
  if (innactiveUsers) {
    return innactiveUsers;
  } else {
    throw new Error("Erro ao obter os usuários inativos");
  }
};

const getUsersPaginated = async (page = 1, pageSize = 20) => {
  try {
    if (page === 0) {
      page = 1;
    }

    const startIndex = (page - 1) * pageSize;

    const users = usersData.getUsersPaginated(startIndex, pageSize);

    return users;
  } catch (error) {
    throw new Error(
      "Erro ao obter users paginados! Detalhes: " + error.message
    );
  }
};

const searchUsers = async (searchTerm) => {
  try {
    const users = usersData.searchUsers(searchTerm);
    return users;
  } catch (error) {
    throw new Error("Erro ao encontrar usuários! Detalhes: " + error);
  }
};

const createUser = async (username) => {
  try {
    const result = usersData.createUser(username);
    return result;
  } catch (error) {
    throw new Error("Erro ao inserir usuário. Detalhes: " + error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const result = usersData.deleteUser(id);
    return result;
  } catch (error) {
    throw new Error("Erro ao excluir usuário. Detalhes: " + error.message);
  }
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
