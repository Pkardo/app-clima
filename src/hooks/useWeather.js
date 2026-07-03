import { useState } from "react";
import {
    buscarCordenadas,
    buscarClima
} from "../services/weatherApi";

export function useWeather() {
    const [local, setLocal] = useState('');
    const [clima, setClima] = useState(null);
    const [erro, setErro] = useState('');

    async function buscarCidade() {

        if (!local.trim()) {
            setErro("Digite uma cidade");
            setClima(null);
            return;
        }
        try {
            const response = await buscarCordenadas(local);

            if (!response.results || response.results.length === 0) {
                setErro("Cidade não encontrada");
                setClima(null);
                setLocal("");
                return;
            }

            const cidade = response.results[0];

            const climaApi = await buscarClima(cidade.latitude, cidade.longitude);

            const climaFormato = {
                name: cidade.name,
                temp: climaApi.current.temperature_2m,
                zone: cidade.admin1
            };

            setClima(climaFormato);
            setLocal("");
            setErro("");
        }

        catch (error) {
            console.log(error);

            setErro("Não foi possível carregar os dados. Tente novamente!");
            setClima(null);
            setLocal('');
        }
    }

    function alterarLocal(valor) {
        setLocal(valor);
    }

    return {
        local,
        alterarLocal,
        erro,
        clima,
        buscarCidade
    }
}
