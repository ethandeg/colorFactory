import {useState} from "react"
const ColorList = () => {
    const [colors, setColors] = useState(["red", "green", "blue"])
    const style = {backgroundColor: "rgba(0,0,0,0.9"}
    const add = formData => {
        setColors([...colors, formData])
    }
    return (
        <div className = "container">
        <div className = "banner" style={style}>
            <h1>Choose a Color from Below</h1>
            <h2><a href="/color/new">Add a New Color to The List</a></h2>
        </div>
        <div className = "color-list">
            <ul>
            {colors.map(color => (
                <li><a href={`/color/${color}`}>{color}</a></li>
            ))}
            </ul>
        </div>
        </div>
    )
}

export default ColorList