import React, { useState } from 'react'
import { Title } from '../Components/Texts/Texts'
import Axios from 'axios'

export function Sistema(props) {
  const [name, setName] = useState([])

  const sair = () => {
    localStorage.clear()
    window.location.reload()
  }

  const getNameUser = values => {
    Axios.post('http://localhost:3001/nameUser', {
      email: values.email
    }).then(response => {
      console.log(response)
    })
  }

  return (
    <div>
      <Title title={`Olá`} />
      <div
        onClick={sair}
        className="bg-indigo-700 p-5 w-4/5 m-auto rounded-md text-white text-center text-xl mt-5 mb-5 hover:bg-indigo-800 cursor-pointer"
      >
        Sair
      </div>
    </div>
  )
}
