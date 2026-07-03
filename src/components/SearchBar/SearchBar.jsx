import climaPNG from "../../assets/images/climapng.webp";
import "./SearchBar.css";

function SearchBar({ local, alterarLocal, buscarCidade }) {
    return (
        <div className='area-pesquisa'>
            <img src={climaPNG} alt="imagem-clima" />

            <input type="text"
                value={local}
                onChange={(e) => alterarLocal(e.target.value)}
            />

            <button onClick={buscarCidade}>Buscar</button>

        </div>
    );
}

export default SearchBar;



