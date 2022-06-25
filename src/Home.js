import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([])
  const api = "http://localhost:4000/api/calendar/"
  useEffect(() => {
      axios.get(api)
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(console.error)
    }, [])
    return (
    <div>
        {data.map((item, index) => {
            return (
                <div key={index}>
                    <label>
                        Task:
                    </label>
                    <p>
                        {item.task}
                    </p>
                    <label>
                        Date:
                    </label>
                    <p>
                        {item.date}
                    </p>
                    <label>
                        Location:
                    </label>
                    <p>
                        {item.location}
                    </p>
                    <label>
                        Time:
                    </label>
                    <p>
                        {item.time}
                    </p>
                </div>
            )
        })}
    </div>
    )
}

export default Home