import "./LoadingCard.css";
import LoaderGift from "../../assets/animation-images/output-onlinegiftools-com.gif"

function Loading({ isLoading }) {

    if (isLoading) {
        return (
            <div className="container">
                <img src={LoaderGift} alt="" />
                <p>Carregando dados..</p>
            </div>
        )
    }

    else {
        return null
    }
}

export default Loading;