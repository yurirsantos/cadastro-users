const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const saltRounds = 10
const bcrypt = require('bcrypt')

let getEmail = ''
let getCpf = ''
let getPis = ''

const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'banco'
})

app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
  const nome = req.body.nome
  const cpf = req.body.cpf
  const pis = req.body.pis
  const cep = req.body.cep
  const complemento = req.body.complemento
  const pais = req.body.pais
  const uf = req.body.uf
  const municipio = req.body.municipio
  const rua = req.body.rua
  const numero = req.body.numero
  const email = req.body.email
  const password = req.body.password

  db.query(
    'SELECT * FROM banco.usuarios WHERE email = ?',
    [email],
    (err, result) => {
      if (err) {
        res.send(err)
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query(
            `INSERT INTO banco.usuarios (nome, cpf, pis, cep, complemento, pais, uf, municipio, rua, numero, email, password) VALUES ("${nome}","${cpf}","${pis}","${cep}","${complemento}","${pais}","${uf}","${municipio}","${rua}",${numero},"${email}","${hash}")`,
            (error, response) => {
              if (err) {
                res.send(err)
              } else {
                res.send({ msg: 'Usuário cadastrado com sucesso' })
              }
            }
          )
        })
      } else {
        res.send({ msg: 'Email já cadastrado' })
      }
    }
  )
})

app.post('/loginEmail', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  getEmail = email

  let sql = 'SELECT * FROM usuarios WHERE email = ?'

  db.query(sql, [email], (err, result) => {
    if (err) {
      res.send(err)
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error)
        }
        if (response === true) {
          res.send(response)
        } else {
          res.send({ msg: 'email ou senha incorreta' })
        }
      })
    } else {
      res.send({ msg: 'Usuário não registrado!' })
    }
  })
})

app.post('/loginCpf', (req, res) => {
  const cpf = req.body.cpf
  const password = req.body.password

  getCpf = cpf

  let sql = 'SELECT * FROM usuarios WHERE cpf = ?'

  db.query(sql, [cpf], (err, result) => {
    if (err) {
      res.send(err)
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error)
        }
        if (response === true) {
          res.send(response)
        } else {
          res.send({ msg: 'CPF ou senha incorreta' })
        }
      })
    } else {
      res.send({ msg: 'Usuário não registrado!' })
    }
  })
})

app.post('/loginPis', (req, res) => {
  const pis = req.body.pis
  const password = req.body.password

  getPis = pis

  let sql = 'SELECT * FROM usuarios WHERE pis = ?'

  db.query(sql, [pis], (err, result) => {
    if (err) {
      res.send(err)
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error)
        }
        if (response === true) {
          res.send(response)
        } else {
          res.send({ msg: 'PIS ou senha incorreta' })
        }
      })
    } else {
      res.send({ msg: 'Usuário não registrado!' })
    }
  })
})

app.get('/getInfoUser', (req, res) => {
  if (getEmail.length > 0) {
    let sql = 'SELECT * FROM usuarios WHERE email = ?'

    db.query(sql, [getEmail], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  } else if (getCpf > 0) {
    let sql = 'SELECT * FROM usuarios WHERE cpf = ?'

    db.query(sql, [getCpf], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  } else if (getPis > 0) {
    let sql = 'SELECT * FROM usuarios WHERE pis = ?'

    db.query(sql, [getPis], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  }
})

app.post('/editarNome', (req, res) => {
  const nome = req.body.nome

  let sql = `UPDATE usuarios SET nome="${nome}" WHERE cpf="${getCpf}";`

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/editarEmail', (req, res) => {
  const email = req.body.email

  let sql = `UPDATE usuarios SET email="${email}" WHERE cpf="${getCpf}";`

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/editarCep', (req, res) => {
  const cep = req.body.cep

  let sql = `UPDATE usuarios SET cep="${cep}" WHERE cpf="${getCpf}";`

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/editarComplemento', (req, res) => {
  const complemento = req.body.complemento

  let sql = `UPDATE usuarios SET complemento="${complemento}" WHERE cpf="${getCpf}";`

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log('rodando na porta 3001')
})
