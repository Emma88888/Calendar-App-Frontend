import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddTask = () => {
    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault()
        const fData = new FormData(event.target)
        const params = {date: fData.get("date"), location: fData.get("location"), 
        time: `${fData.get("time-hour")}:${fData.get("time-minute")}`, task: fData.get("task")
        }
       axios.post("http://localhost:4000/api/calendar", params)
        .then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="date" type="date">
                </input>
                <input name="time-hour" type="number">
                </input>
                <input name="time-minute" type="number">
                </input>
                <input name="location" type="text">
                </input>
                <input name="task" type="text">
                </input>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

// date: Date,
//     time: String,
//     task: String,
//     location: String

export default AddTask;