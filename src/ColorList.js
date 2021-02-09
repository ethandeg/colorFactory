import {useState} from "react"
import {Link} from "react-router-dom"
const ColorList = ({colors}) => {
    // const [colors, setColors] = useState(["red", "green", "blue"])
    const style = {backgroundColor: "rgba(0,0,0,0.9"}
    // const add = formData => {
    //     setColors([...colors, formData])
    // }
    return (
        <div className = "container">
        <div className = "banner" style={style}>
            <h1>Choose a Color from Below</h1>
            <h2><Link to ="/color/new">Add a New Color to the List</Link></h2>
        </div>
        <div className = "color-list">
            <ul>
            {colors.map(color => (
                <li><Link to={`/color/${color}`}>{color}</Link></li>
            ))}
            </ul>
        </div>
        </div>
    )
}

export default ColorList