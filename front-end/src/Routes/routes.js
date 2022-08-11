import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from '../Pages/Login'
import { Cadastro } from '../Pages/Cadastro'
import { Sistema } from '../Pages/Sistema'

const logado = localStorage.getItem('@user')

export function Rotas() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!logado && (
            <Route path="/" exact element={<Login logado={logado} />} />
          )}
          {logado && <Route path="/" exact element={<Sistema />} />}
          {!logado && (
            <Route
              path="/cadastro"
              exact
              element={<Cadastro logado={logado} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
