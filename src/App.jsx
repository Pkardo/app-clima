import { useState, useEffect } from 'react'
import climaPNG from './assets/climapng.webp'
import './App.css'


function App() {
  const [local, setLocal] = useState('')
  const [clima, setClima] = useState(null)
  const [erro, setErro] = useState('')

  async function dadosCordenadas() {
    try { // O código abaixo recebe o nome do local e retorna dados de latitude e longitude]
      if (local.trim()) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${local}&count=1&language=pt`)
        const dados = await response.json()

        if (!dados.results || dados.results.length === 0) {
          setErro('O Local digitado não existe')
          setClima(null)
          setLocal('')
          return
        }

        setErro('')
        return dados
      }
      //Tratamento de erro se o input for vazio
      else {
        setErro('Digite algo no campo de texto')
        setClima(null)
        return
      }
    }
    //Tratamento de erro de requisição
    catch (erro) {
      console.log('erro', erro)
      setErro('Não foi possivel carregar os dados. Tente novamente!')
      return
    }
  }

  async function ReceberDados() {
    const resposta = await dadosCordenadas()

    if (!resposta) return

    const cordenadas = resposta.results[0]

    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cordenadas.latitude}&longitude=${cordenadas.longitude}&current=temperature_2m&timezone=auto`)
      const dados = await response.json()
      console.log(dados)
      const listaObj = {
        name: cordenadas.name,
        temp: dados.current.temperature_2m,
        zone: dados.timezone,
      }
      setClima(listaObj)
    }
    catch (erro) {
      console.log('erro', erro)
      setErro('Não foi possivel carregar os dados. Tente novamente!')
      return
    }
    
    setLocal('') //Limpa o input após buscar os dados
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

        {erro ? <p className='erro'>{erro}</p> : ''}
        <div className='resultado'>

          {clima ?
            <>
              <p>Local: {clima.name}</p>
              <p>Temperatura: {clima.temp}°</p>
              <p>Local: {clima.zone}</p>
            </>
            : null}
        </div>

      </div>
    </>
  )
}

export default App