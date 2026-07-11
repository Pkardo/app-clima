import "./LoadingCard.css";
import LoaderGift from "../../assets/animation-images/output-onlinegiftools-com.gif"

function Loading({ isLoading }) {

    if (isLoading) {
        return (
            <div className="container">
                <p>Carregando dados..</p>
            </div>
        )
    }

    else {
        return null
    }
}

export default Loading;