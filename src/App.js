import "./app.css"
import {useState} from "react"

import personImage from "./images/image-jeremy.png"
import dataArray from "./dummyArray"
import TrackCard from "./components/TrackCard/TrackCard"

const App = () => {
  const [selectedTime,setSelectedTime] = useState()

  const handleChange = (value) => {
    setSelectedTime(value)
  }

  const selectedStyle = {color: "white"}

  return (
    <div className="App">
        <main>
            <div className="person-container grid-row-span-2">
              <div className="person-info-container">
                <img src={personImage} alt="person" className="person-img" />
                <div className="personal-info">
                  <span className="report-span">Report for</span>
                  <div>
                    <h3 className="first-name">Jeremy</h3>
                    <h3 className="last-name">Robson</h3>
                  </div>
                </div>
              </div>
            <div className="time-select-container">
              <span onClick={() => handleChange("Daily")} style={selectedTime === "Daily" ? selectedStyle : {}} >Daily</span>
              <span onClick={() => handleChange("Weekly")} style={selectedTime === "Weekly" ? selectedStyle : {}} >Weekly</span>
              <span onClick={() => handleChange("Monthly")} style={selectedTime === "Monthly" ? selectedStyle : {}} >Monthly</span>
            </div>
            </div>
            {dataArray.map((item,id) => <TrackCard key={`item-${id}`} data={item} />)}
        </main>
    </div>
  )
}

export default App
