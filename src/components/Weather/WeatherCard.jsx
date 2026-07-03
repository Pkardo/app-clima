import "./WeatherCard.css";

function WeatherCard({ clima }) {
    if (!clima) return null;

    return (
        <div className="resultado">

            <p>Nome: {clima.name}</p>

            <p>Temperatura: {clima.temp}°</p>

            <p>Local: {clima.zone}</p>

        </div>
    );
}

export default WeatherCard;