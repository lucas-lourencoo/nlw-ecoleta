import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import {errors} from 'celebrate'

const app = express();

//Funcionalidade do express
app.use(cors());
app.use(express.json());
app.use(routes);

//Rota para as imagens estáticas
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

// request = Dados da requisição
// response = Devolver resposta da rota

/*  
*   --------------Requisições HTTP------------
*   GET: Buscar um ou mais dados da aplicação
*   POST: Criar nova informação
*   PUT: Atualizar uma informação existente no back-end
*   DELETE: Remover uma informação do back-end
*   ------------------------------------------
*/

// Request Param: Parametros na própria rota
// Query Param: Parametros da rota (Porém, opcionais)
// Request body: Parâmetros para criação e atualização de informações
app.listen(3333);