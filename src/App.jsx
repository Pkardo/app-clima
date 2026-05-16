import { useState, useEffect } from 'react'
import climaPNG from './assets/climapng.webp'
import './App.css'


function App() {
  const [local, setLocal] = useState('')
  const [clima, setClima] = useState(null)
  const [erro, setErro] = useState('')

  async function dadosCordenadas() {
    try {
      if (local.trim()) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${local}&count=1&language=pt`)
        console.log(response)
        const dados = await response.json()
        return dados
      }
      else {
        setErro('Ocorreu um erro.')
      }
    }
    catch (erro) {
      console.log('erro', erro)
      setErro('Não foi possivel carregar os dados. Tente novamente')
    }
  }

  async function ReceberDados() {
    const resposta = await dadosCordenadas()

    if (!resposta) return

    const cordenadas = resposta.results[0]

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cordenadas.latitude}&longitude=${cordenadas.longitude}&current=temperature_2m&timezone=auto`)
    const dados = await response.json()
    console.log(dados)
  }


  return (
    <>
      <div id='container'>

        <div className='area-pesquisa'>
          <img src={climaPNG} alt="imagem-clima" />
          <input type="text" value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          <button onClick={ReceberDados}>Buscar</button>
        </div>

        <div className='resultado'>
          {erro? <p className='erro'>{erro}</p> : ''}

        </div>

      </div>
    </>
  )
}

export default App