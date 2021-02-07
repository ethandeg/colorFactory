import {useParams} from "react-router-dom"
const Color = () => {
    const {color} = useParams()
    const style = {backgroundColor: color}
    return (
        <div className="container">
            <div className="banner" style = {style}>
                <h1>{color}</h1>
                <h2>So you chose {color} huh? well enjoy the look</h2>
                <h3>Not feeling it anymore? <a href="/color">Go back</a></h3>
            </div>

        </div>
    )
}

export default Color