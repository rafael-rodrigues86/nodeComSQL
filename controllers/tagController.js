const tagData = require("../data/tagData");

const getTags = async () => {
  const tags = tagData.getTags();
  if (tags) {
    return tags;
  } else {
    throw new Error("Erro ao obter os usuários");
  }
};

const createTag = async (tag_name) => {
  try {
    const result = tagData.createTag(tag_name);
    return result;
  } catch (error) {
    throw new Error("Erro ao inserir tag. Detalhes: " + error.message);
  }
};

const deleteTagById = async (id) => {
  try {
    const result = tagData.deleteTagById(id);
    return result;
  } catch (error) {
    throw new Error("Erro ao excluir tag. Detalhes: " + error.message);
  }
};

module.exports = {
  getTags,
  createTag,
  deleteTagById,
};
