import React, { useEffect, useState, Fragment } from 'react'
import Axios from 'axios'
import { Title } from '../Components/Texts/Texts'
import { Formik, Form, Field } from 'formik'
import { PencilAltIcon } from '@heroicons/react/solid'

export function Sistema() {
  const [user, setUser] = useState([])
  const [infoUser, setInfoUser] = useState(false)
  const [editNome, setEditNome] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editCep, setEditCep] = useState(false)
  const [editComplemento, setEditComplemento] = useState(false)
  const [editPais, setEditPais] = useState(false)
  const [editUf, setEditUf] = useState(false)
  const [editMunicipio, setEditMunicipio] = useState(false)
  const [editRua, setEditRua] = useState(false)
  const [editNumero, setEditNumero] = useState(false)
  const [editPassword, setEditPassword] = useState(false)

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

  const editarPais = values => {
    Axios.post('http://localhost:3001/editarPais', {
      pais: values.pais
    }).then(response => {
      alert('País atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarUf = values => {
    Axios.post('http://localhost:3001/editarUf', {
      uf: values.uf
    }).then(response => {
      alert('UF atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarMunicipio = values => {
    Axios.post('http://localhost:3001/editarMunicipio', {
      municipio: values.municipio
    }).then(response => {
      alert('Município atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarRua = values => {
    Axios.post('http://localhost:3001/editarRua', {
      rua: values.rua
    }).then(response => {
      alert('Rua atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarNumero = values => {
    Axios.post('http://localhost:3001/editarNumero', {
      numero: values.numero
    }).then(response => {
      alert('Número atualizado com sucesso!')
      window.location.reload()
    })
  }

  const editarPassword = values => {
    Axios.post('http://localhost:3001/editarPassword', {
      password: values.password
    }).then(response => {
      alert('Senha atualizado com sucesso!')
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
                            if (editComplemento == false) {
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

              <Formik initialValues={{}} onSubmit={editarPais}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editPais == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="pais">
                            País
                          </label>

                          <Field
                            name="pais"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editPais == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">País</label>

                          <input
                            type="text"
                            required
                            value={user.pais}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editPais == false) {
                              setEditPais(true)
                            } else {
                              setEditPais(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editPais == false ? (
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
                              setEditPais(false)
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

              <Formik initialValues={{}} onSubmit={editarUf}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editUf == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="uf">
                            UF
                          </label>

                          <Field
                            name="uf"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editUf == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">UF</label>

                          <input
                            type="text"
                            required
                            value={user.uf}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editUf == false) {
                              setEditUf(true)
                            } else {
                              setEditUf(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editUf == false ? (
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
                              setEditUf(false)
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

              <Formik initialValues={{}} onSubmit={editarMunicipio}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editMunicipio == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="municipio">
                            Município
                          </label>

                          <Field
                            name="minicipio"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editMunicipio == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">Município</label>

                          <input
                            type="text"
                            required
                            value={user.municipio}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editMunicipio == false) {
                              setEditMunicipio(true)
                            } else {
                              setEditMunicipio(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editMunicipio == false ? (
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
                              setEditMunicipio(false)
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

              <Formik initialValues={{}} onSubmit={editarRua}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editRua == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="rua">
                            Rua
                          </label>

                          <Field
                            name="rua"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editRua == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">Rua</label>

                          <input
                            type="text"
                            required
                            value={user.rua}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editRua == false) {
                              setEditRua(true)
                            } else {
                              setEditRua(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editRua == false ? (
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
                              setEditRua(false)
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

              <Formik initialValues={{}} onSubmit={editarNumero}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editNumero == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="numero">
                            Número
                          </label>

                          <Field
                            name="numero"
                            type="number"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editNumero == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">Número</label>

                          <input
                            type="number"
                            required
                            value={user.numero}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editNumero == false) {
                              setEditNumero(true)
                            } else {
                              setEditNumero(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editNumero == false ? (
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
                              setEditNumero(false)
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

              <Formik initialValues={{}} onSubmit={editarPassword}>
                <Form className="text-white">
                  <div>
                    <div className="flex justify-between">
                      {editPassword == true && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md" form="password">
                            Senha
                          </label>

                          <Field
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}

                      {editPassword == false && (
                        <div className="m-3 w-full">
                          <label className="font-bold text-md">Senha</label>

                          <input
                            type="number"
                            required
                            value={user.password}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                      )}
                      <div className="p-5 w-16">
                        <PencilAltIcon
                          className="h-10 w-10 text-center text-indigo-300 hover:text-indigo-400 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => {
                            if (editPassword == false) {
                              setEditPassword(true)
                            } else {
                              setEditPassword(false)
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="w-11/12 m-auto mt-5 mb-5">
                      {editPassword == false ? (
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
                              setEditPassword(false)
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
