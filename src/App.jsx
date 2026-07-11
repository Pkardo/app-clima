import './App.css'

import SearchBar from "./components/SearchBar/SearchBar"
import WeatherCard from "./components/Weather/WeatherCard"
import Animation from "./components/Animation/Animation"
import ErrorMensagem from "./components/ErrorMessage/ErrorMessage"
import Loading from "./components/Loading/LoadingCard"

import { useWeather } from "./hooks/useWeather";

function App() {
  const {
    local,
    alterarLocal,
    clima,
    erro,
    buscarCidade,
    isLoading
  } = useWeather();

  //Área de renderização
  return (
    <>

      <SearchBar
        local={local}
        alterarLocal={alterarLocal}
        buscarCidade={buscarCidade}
      />

      <WeatherCard
        clima={clima}
      />

      <Loading
      isLoading={isLoading}
      />

      <Animation
        temp={clima?.temp}
      />

      <ErrorMensagem erro={erro}/>
    </>
  )
}

export default App