import dotenv from 'dotenv';
dotenv.config();
import app from "./app";
import MongoConnection from "./models/MongoConnection";

//vamos utilizar variáveis de ambiente no servidor
const { SERVER_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const PORT = SERVER_PORT || 3000;

//estamos montando a string de config do banco e ficará
//assim: `mongodb://root:admin@localhost:27017/model_example?authSource=admin`
const MONGO_URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:27017/${DB_NAME}?authSource=admin`;

//pegamos a classe MongoConnection e chamamos o método estático connect
//se a conexão for estabelecida, então o servidor começa a rodar
//senão mandamos um log para entender o problema
MongoConnection.connect(MONGO_URI)
.then(() => {
    app.listen(PORT, () => console.log(`rodando em http://localhost:${PORT}`));
}).catch(error => {
    console.log(error);
});
