let jsonData = require("./data.json")

const obterDados = async (req, res, next) => {
  try {
    res.json(jsonData)
  } catch(error) {
    next({})
  }
}

module.exports = {
  obterDados
}