import { ErrorMessage, Formik, Form, Field } from 'formik'
import Axios from 'axios'
import { Title } from '../Components/Texts/Texts'

export function Cadastro({ logado = false }) {
  const handleRegister = values => {
    Axios.post('http://localhost:3001/register', {
      nome: values.nome,
      cpf: values.cpf,
      pis: values.pis,
      cep: values.cep,
      complemento: values.complemento,
      pais: values.pais,
      uf: values.uf,
      municipio: values.municipio,
      rua: values.rua,
      numero: values.numero,
      email: values.email,
      password: values.password
    }).then(response => {
      window.location.reload()
    })
  }

  const inputs = [
    {
      title: 'Nome',
      name: 'nome',
      type: 'text',
      placeholder: 'Informe seu nome...'
    },
    {
      title: 'CPF',
      name: 'cpf',
      type: 'number',
      placeholder: 'Informe seu CPF...'
    },
    {
      title: 'PIS',
      name: 'pis',
      type: 'number',
      placeholder: 'Informe seu PIS...'
    },
    {
      title: 'CEP',
      name: 'cep',
      type: 'number',
      placeholder: 'Informe seu CEP...'
    },
    {
      title: 'Complemento',
      name: 'complemento',
      type: 'text',
      placeholder: 'Informe seu complemento...'
    },
    {
      title: 'Pais',
      name: 'pais',
      type: 'text',
      placeholder: 'Informe seu país...'
    },
    {
      title: 'UF',
      name: 'uf',
      type: 'text',
      placeholder: 'Informe seu estado (UF)...'
    },
    {
      title: 'Município',
      name: 'municipio',
      type: 'text',
      placeholder: 'Informe seu Município...'
    },
    {
      title: 'Rua',
      name: 'rua',
      type: 'text',
      placeholder: 'Informe sua Rua...'
    },
    {
      title: 'Número',
      name: 'numero',
      type: 'numero',
      placeholder: 'Informe seu Número da Residência...'
    },
    {
      title: 'E-mail',
      name: 'email',
      type: 'email',
      placeholder: 'Informe seu e-mail...'
    },
    {
      title: 'Senha',
      name: 'password',
      type: 'password',
      placeholder: 'Informe sua senha...'
    },
    {
      title: 'Confirmar senha',
      name: 'confirmation',
      type: 'password',
      placeholder: 'Confirme sua senha...'
    }
  ]

  return (
    <div className="body">
      <div className="m-8">
        {!logado && (
          <a
            className="bg-indigo-700 p-5 rounded-md w-40 m-5 text-white font-bold hover:bg-indigo-600 transition-all duration-150"
            href="/"
          >
            Home
          </a>
        )}
      </div>

      <div className="m-8"></div>

      <Title title="Cadastro" />
      <Formik initialValues={{}} onSubmit={handleRegister}>
        <Form className="w-4/5 m-auto bg-indigo-700 p-5 rounded-md text-white">
          {inputs.map(item => {
            return (
              <>
                <div className="m-3">
                  <label className="font-bold text-md" form={item.name}>
                    {item.title}
                  </label>

                  <Field
                    name={item.name}
                    type={item.type}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={item.placeholder}
                  />

                  <ErrorMessage
                    component="span"
                    name={item.name}
                    className="form-error"
                  />
                </div>
              </>
            )
          })}

          <div className="w-11/12 m-auto mt-5 mb-5">
            <button
              className="bg-indigo-500 p-5 w-full text-white rounded-md hover:bg-indigo-800 hover:scale-110 duration-100"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
