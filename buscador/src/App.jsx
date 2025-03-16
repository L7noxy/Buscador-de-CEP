import { CiSearch } from "react-icons/ci";
import './style.css'
import { useState } from "react";
import api from './services/api'

export default function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {

    // 88032560/json/

    if (input === '') {
      alert("Erro ao procurar pelo CEP")
      return;
    }

    try {
      const res = await api.get(`${input}/json`)
      setCep(res.data)
      setInput("")

    } catch {
      setInput("")
    }

  }

  return (

    <>
      <div className="container">
        <h1 className="title">busacador de CEP</h1>
        <div className="container-input">
          <input
            placeholder="Digite seu CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            <CiSearch size={25} color="white" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf} </span>

          </main>
        )}
      </div>
    </>
  )
}

