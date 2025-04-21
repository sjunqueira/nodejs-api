import { Database } from "./database.js";
import { randomUUID } from 'node:crypto';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: '/users',
    handler: (req, res) => {
      const users = database.select('users');
      return res.end(JSON.stringify(users));
    }
  },
  {
    method: 'POST',
    path: '/users',
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
];