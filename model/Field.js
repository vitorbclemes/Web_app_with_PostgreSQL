const {pool} = require('../config/database');

const selectField = (request,response) => {
  pool.query('SELECT * FROM Quadra;',(error, results) => {
    if(error) 
      throw error;
    response.status(200).json(results.rows);
  })  
};

const insertField = (request,response) => {
  const idBloco = request.body.nome;
  const modalidade = request.body.modalidade;

  pool.query(`INSERT INTO Quadra values(default,${idBloco},'${modalidade}')`,(error,results) => {
    if(error){
      throw error;
    }
    response.status(201).send('Quadra inserida com sucesso.')
  })
};

const deleteField = (request,response) => {
  const id = parseInt(request.body.id);

  pool.query(`DELETE FROM Quadra where id = ${id}`,(error,results) => {
    if(error) throw error;
    response.status(201).send('Bloco removido com sucesso');
  })
}

const updateField = (request,response) => {
  const id = parseInt(request.body.id);
  const modalidade = request.body.modalidade;
  pool.query(`UPDATE Quadra SET modalidade='${modalidade}' WHERE id = ${id}`,(error,results) => {
    if(error) throw error
    response.status(201).send('Bloco atualizado com sucesso');
  })
};

module.exports = {
  selectField,
  insertField,
  deleteField,
  updateField
}