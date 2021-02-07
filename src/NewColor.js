import {useState} from "react"
const NewColor = ({add}) => {
    const INITIALSTATE = {color: ''}
    const [formData, setFormData] = useState(INITIALSTATE)
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, [name]: value}
        ))

    }
    const handleSubmit = e => {
        e.preventDefault()
        add(formData)
        setFormData(INITIALSTATE)
        }
    return (
        <form>
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