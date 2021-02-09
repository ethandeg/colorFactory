import {useState} from "react"
import {useHistory} from "react-router-dom"
const NewColor = ({addColor}) => {
    const INITIALSTATE = {color: ''}
    const history = useHistory()
    const [formData, setFormData] = useState(INITIALSTATE)
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, [name]: value}
        ))

    }
    const handleSubmit = e => {
        e.preventDefault()
        addColor(formData.color)
        setFormData(INITIALSTATE)
        history.push("/color")
        }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a new Color</h1>
            <label htmlFor="color">Color: </label>
            <input 
                type="text"
                id="color"
                name="color"
                value={formData.color}
                placeholder="color"
                onChange={handleChange}
            />
            <button>Submit Color</button>
        </form>
    )
}

export default NewColor