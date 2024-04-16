const dbPool = require("../config/database");

const getUser = () => {
  const SQLQuery = "SELECT * FROM user";

  return dbPool.execute(SQLQuery);
};

const createUser = (body) => {
  const SQLQuery = `  INSERT INTO user (nama, alamat, hobi) 
                        VALUES ('${body.nama}', '${body.alamat}', '${body.hobi}' )`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (body, id) => {
  const SQLQuery = `  UPDATE user 
                        SET nama='${body.nama}', alamat='${body.alamat}', hobi='${body.hobi}'
                        WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM user WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
