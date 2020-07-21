Commands terminal Sass transpile CSS
sass --watch --no-source-map style.scss:../../style.css

## Hold your horses

Antes de mais nada, você precisa instalar uma dependência global para executar as APIs que irá consumir:

```sh
$ npm install -g json-server
```

## APIs de consumo

A lib `json-server` irá criar um backend servindo alguns endpoints baseados em arquivos com objetos JSON.
Para isto, execute os comandos em **terminais distintos**:

```sh
# Serviço de Pizzas
$ json-server --watch api/pizzas.json --port 3001


Os comandos acima disponibilizarão alguns endpoints para você:

**Pizzas**

- **GET** `http://localhost:3001/pizzas/`
- **GET** `http://localhost:3001/pizza/<id da pizza>`

```
