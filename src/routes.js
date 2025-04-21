import path from "node:path";
import { Database } from "./database.js";
import { randomUUID } from 'node:crypto';
import { BuildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: BuildRoutePath('/users'),
    handler: (req, res) => {
      const users = database.select('users');
      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: BuildRoutePath('/users'),
    handler: (req, res) => {
      const { name, email } = req.body;
      console.log(name, email);
      if (name === undefined || email === undefined) {
        return res.writeHead(400).end('JSON body incorreto ou não informado');
      } else {
        const user = {
          id: randomUUID(),
          name: name,
          email: email
        };
        database.insert('users', user);
        return res.writeHead(201).end('Cadastro realizado');
      }
    }
  },
  {
    method: 'DELETE',
    path: BuildRoutePath('/users/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      database.delete('users', id);

      return res.writeHead(200).end('Usuário removido');
    }
  }
];