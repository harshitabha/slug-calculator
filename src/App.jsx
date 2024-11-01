import { useState, useEffect } from 'react'
import './App.css'
// import { set } from 'react-datepicker/dist/date_utils'

function App() {
  const [userData, setData] = useState({
    numMeals: 2,
    cost: 12.75,
    date: new Date(),
    lastDay: new Date(),
    points: 0,
  })

  const updateDate = (e) => {
  }

  const calculatePoints = () => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((userData.lastDay - userData.date) / oneDay));

    const newTotal = diffDays * userData.numMeals * userData.cost;
    setData({...userData, points: newTotal});
  }

  useEffect(() => {
  }, [userData])

  return (
    <>
      <h1>Count a Slug</h1>
      <h2>Calculate the maxium amount of slug points you need till the end of the quarter</h2>
      <div className="body">
        <div className="mealsContainer">
          <label htmlFor="mealsInput" className='inputLabel'>Meals Per Day: </label>
          <input 
            type="number"
            min={1}
            value={userData.numMeals}
            id='mealsInput'
            onChange={(e) => updateDate(e)}/>
        </div>

        <div className="costContainer">
          <label htmlFor="costInput" className='inputLabel'>Cost Per Meal: </label>
          <input 
            type="number"
            min={1}
            value={userData.cost}
            id="costInput"
            onChange={(e) => updateDate(e)}/>
        </div>

        <div className="dateContainer">
          <label htmlFor="dateInput" className='inputLabel'>Date</label>
          <input 
            type="date"
            value={userData.date}
            id='currDateInput'
            onChange={(e) => updateDate(e)}/>
        </div>

        <div className="dateContainer">
          <label htmlFor="dateInput" className='inputLabel'>Last day: </label>
          <input 
            type="date"
            value={userData.lastDay}
            id='lastDateInput'
            onChange={(e) => updateDate(e)}/>
        </div>

        <p className='result'>
          Need {userData.points} slug points
        </p>
      </div>
      
    </>
  )
}

export default App
