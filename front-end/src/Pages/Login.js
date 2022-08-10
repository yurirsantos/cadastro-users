import { ErrorMessage, Formik, Form, Field } from 'formik'
import Axios from 'axios'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Login({ logado = false }) {
  const [formaLogin, setFormaLogin] = useState('')
  const [getNome, setNome] = useState('')

  function setEmail() {
    setFormaLogin('email')
  }
  function setCpf() {
    setFormaLogin('cpf')
  }
  function setPis() {
    setFormaLogin('pis')
  }

  const handleLogin = values => {
    if (formaLogin == 'email') {
      Axios.post('http://localhost:3001/loginEmail', {
        email: values.email,
        password: values.password
      }).then(response => {
        const page = response.data

        if (page === true) {
          localStorage.setItem('@user', JSON.stringify(response.config.data))
          window.location.reload()
        } else {
          alert(response.data.msg)
        }
      })
    } else if (formaLogin == 'cpf') {
      Axios.post('http://localhost:3001/loginCpf', {
        cpf: values.cpf,
        password: values.password
      }).then(response => {
        const page = response.data

        if (page === true) {
          localStorage.setItem('@user', JSON.stringify(response.config.data))
          window.location.reload()
        } else {
          alert(response.data.msg)
        }
      })
    } else if (formaLogin == 'pis') {
      Axios.post('http://localhost:3001/loginPis', {
        pis: values.pis,
        password: values.password
      }).then(response => {
        const page = response.data

        if (page === true) {
          localStorage.setItem('@user', JSON.stringify(response.config.data))
          window.location.reload()
        } else {
          alert(response.data.msg)
        }
      })
    }
  }

  return (
    <div className="body">
      <div className="right-login">
        <div className="card-login">
          <div className="user-links">
            <div className="user-link-home">
              {!logado && <Link to="/">Home</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Desafio Pontotel
            </h2>
          </div>
          <Formik initialValues={{}} onSubmit={handleLogin}>
            <Form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div class="mt-4">
                  <span class="text-gray-700">Como logar?</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="email"
                        onClick={setEmail}
                      />
                      <span class="ml-2">E-mail</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="cpf"
                        onClick={setCpf}
                      />
                      <span class="ml-2">CPF</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="accountType"
                        value="pis"
                        onClick={setPis}
                      />
                      <span class="ml-2">PIS</span>
                    </label>
                  </div>
                </div>

                {formaLogin == 'email' && (
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      E-mail
                    </label>
                    <Field
                      name="email"
                      type="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Informe seu E-mail..."
                    />

                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>
                )}

                {formaLogin == 'cpf' && (
                  <div>
                    <label htmlFor="cpf-address" className="sr-only">
                      CPF
                    </label>
                    <Field
                      name="cpf"
                      type="number"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Informe seu CPF..."
                    />

                    <ErrorMessage
                      component="span"
                      name="cpf"
                      className="form-error"
                    />
                  </div>
                )}

                {formaLogin == 'pis' && (
                  <div>
                    <label htmlFor="pis-address" className="sr-only">
                      PIS
                    </label>
                    <Field
                      name="pis"
                      type="number"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Informe seu PIS..."
                    />

                    <ErrorMessage
                      component="span"
                      name="pis"
                      className="form-error"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <Field
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Informe sua senha..."
                  />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
          <div className="text-md text-center">
            {!logado && (
              <Link to="/cadastro">
                <p className="font-medium text-indigo-600 hover:text-indigo-500">
                  Cadastre-se aqui!
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
