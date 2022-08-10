import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Title } from '../Components/Texts/Texts'

export function Sistema(props) {
  const [nome, setNome] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:3001/getNome').then(response => {
      setNome(response.data[0].nome)
    })
  })

  const sair = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <Title title={`Olá ${nome}!!`} />
      <div
        onClick={sair}
        className="bg-indigo-700 p-5 w-4/5 m-auto rounded-md text-white text-center text-xl mt-5 mb-5 hover:bg-indigo-800 cursor-pointer"
      >
        Sair
      </div>
    </div>
  )
}
