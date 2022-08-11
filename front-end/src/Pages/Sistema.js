import React, { useEffect, useState, Fragment } from 'react'
import Axios from 'axios'
import { Title } from '../Components/Texts/Texts'
import { Popover, Transition } from '@headlessui/react'
import { Formik, Form, Field } from 'formik'
import { PencilAltIcon } from '@heroicons/react/solid'

export function Sistema() {
  const [user, setUser] = useState([])
  const [infoUser, setInfoUser] = useState(false)
  const [editNome, setEditNome] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editCep, setEditCep] = useState(false)
  const [editComplemento, setEditComplemento] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3001/getInfoUser').then(response => {
      setUser(response.data[0])
    })
  })

  const sair = () => {
    localStorage.clear()
    window.location.reload()
  }

  const editarNome = values => {
    Axios.post('http://localhost:3001/editarNome', {
      nome: values.nome
    }).then(response => {
      alert('Nome atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarEmail = values => {
    Axios.post('http://localhost:3001/editarEmail', {
      email: values.email
    }).then(response => {
      alert('E-mail atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarCep = values => {
    Axios.post('http://localhost:3001/editarCep', {
      cep: values.cep
    }).then(response => {
      alert('CEP atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarComplemento = values => {
    Axios.post('http://localhost:3001/editarComplemento', {
      complemento: values.complemento
    }).then(response => {
      alert('Complemento atualizado com sucesso!')
      window.location.reload()
    })
  }

  return (
    <div className="p-10">
      <div className="mb-5">
        <Title title={`Olá ${user.nome}!!`} />
      </div>

      <div className="bg-indigo-700 p-5 rounded-md w-4/5 m-auto mt-5 mb-5 text-center text-white text-xl font-medium">
        <h1 className="text-center text-white text-2xl font-bold">
          Informações do Perfil
        </h1>
        <div>
          <button
            className="w-4/5 m-auto mt-5 mb-5 bg-indigo-500 hover:bg-indigo-300 rounded-md"
            onClick={() => {
              if (infoUser == false) {
                setInfoUser(true)
              } else {
                setInfoUser(false)
              }
            }}
          >
            {infoUser == false ? 'Abrir' : 'Fechar'}
          </button>
        </div>
      </div>

      {infoUser == false ? (
        ''
      ) : (
        <>
          <div className="bg-indigo-700 p-5 rounded-md w-4/5 m-auto mt-5 mb-5">
            <div className="w-4/5 m-auto mt-3 mb-3">
              <Formik initialValues={{}} onSubmit={editarNome}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editNome == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="nome">
                            Nome
                          </label>

                          <Field
                            name="nome"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editNome == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">Nome</label>

                          <input
                            type="text"
                            required
                            value={user.nome}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editNome == false) {
                              setEditNome(true)
                            } else {
                              setEditNome(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editNome == false ? (
                        ''
                      ) : (
                        <>
                          <button
                            className="bg-green-500 p-5 w-full hover:bg-green-800  text-white rounded-md duration-100 m-4"
                            type="submit"
                          >
                            Salvar
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-800 p-5 w-full text-white rounded-md  duration-100 m-4"
                            onClick={() => {
                              setEditNome(false)
                            }}
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </Formik>

              <Formik initialValues={{}} onSubmit={editarEmail}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editEmail == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="email">
                            E-mail
                          </label>

                          <Field
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editEmail == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">E-mail</label>

                          <input
                            type="email"
                            required
                            value={user.email}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editEmail == false) {
                              setEditEmail(true)
                            } else {
                              setEditEmail(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editEmail == false ? (
                        ''
                      ) : (
                        <>
                          <button
                            className="bg-green-500 p-5 w-full hover:bg-green-800  text-white rounded-md duration-100 m-4"
                            type="submit"
                          >
                            Salvar
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-800 p-5 w-full text-white rounded-md  duration-100 m-4"
                            onClick={() => {
                              setEditEmail(false)
                            }}
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </Formik>

              <Formik initialValues={{}} onSubmit={editarCep}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editCep == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="cep">
                            CEP
                          </label>

                          <Field
                            name="cep"
                            type="number"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editCep == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">CEP</label>

                          <input
                            type="number"
                            required
                            value={user.cep}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editCep == false) {
                              setEditCep(true)
                            } else {
                              setEditCep(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editCep == false ? (
                        ''
                      ) : (
                        <>
                          <button
                            className="bg-green-500 p-5 w-full hover:bg-green-800  text-white rounded-md duration-100 m-4"
                            type="submit"
                          >
                            Salvar
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-800 p-5 w-full text-white rounded-md  duration-100 m-4"
                            onClick={() => {
                              setEditCep(false)
                            }}
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </Formik>

              <Formik initialValues={{}} onSubmit={editarComplemento}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editComplemento == true && (
                        <div className="m-3 w-full">
                          <label
                            className="font-bold text-md"
                            form="complemento"
                          >
                            Complemento
                          </label>

                          <Field
                            name="complemento"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editComplemento == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">
                            Complemento
                          </label>

                          <input
                            type="text"
                            required
                            value={user.complemento}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editCep == false) {
                              setEditComplemento(true)
                            } else {
                              setEditComplemento(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editComplemento == false ? (
                        ''
                      ) : (
                        <>
                          <button
                            className="bg-green-500 p-5 w-full hover:bg-green-800  text-white rounded-md duration-100 m-4"
                            type="submit"
                          >
                            Salvar
                          </button>

                          <button
                            className="bg-red-500 hover:bg-red-800 p-5 w-full text-white rounded-md  duration-100 m-4"
                            onClick={() => {
                              setEditComplemento(false)
                            }}
                          >
                            Cancelar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </>
      )}

      <div
        onClick={sair}
        className="bg-indigo-700 p-5 w-4/5 m-auto rounded-md text-white text-center text-xl mt-5 mb-5 hover:bg-indigo-800 cursor-pointer"
      >
        Sair
      </div>
    </div>
  )
}
