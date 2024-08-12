import { useNavigate } from "react-router-dom"

const GoBackButton = () => {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <button
                onClick={handleGoBack}
                className="p-2"
            >
                <svg className="w-8 aspect-square fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
            </button>
        </>
    )
}

export default GoBackButton