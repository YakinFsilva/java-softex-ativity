const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'host',
  user: 'usuario',
  password: 'senha',
  database: 'banco_de_dados'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  console.log('Conexão bem-sucedida!');


  connection.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão:', err);
      return;
    }
    console.log('Conexão encerrada.');
  });
});

