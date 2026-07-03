import "./ErrorMessage.css";

function WeatherErros({ erro }) {
    if (!erro) return null;

    return (
        <p className="erro">{erro}</p>
    )
}

export default WeatherErros;