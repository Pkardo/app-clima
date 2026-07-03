import "./Animation.css";

function AplicarAnimacao({ temp }) {

    if (temp == null) return null

    if (temp <= 20) {
      return (
        <div className="geada">
          <span className="floco"></span>
          <span className="floco"></span>
          <span className="floco"></span>
          <span className="floco"></span>
          <span className="floco"></span>
          <span className="floco"></span>
        </div>
      )
    }

    if (temp >= 30) {
      return (
        <>
          <div className="sol"></div>
          <div className="raio"></div>
        </>
      )
    }
    return null
}

export default AplicarAnimacao;