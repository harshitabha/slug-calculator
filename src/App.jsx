import { useState } from 'react'
import './App.css'

function App() {
  const [userData, setData] = useState({
    numMeals: 2,
    cost: 12.75,
    date: new Date(),
    points: 0,
  })
  const [points, setPoints] = useState(0)


  return (
    <>
      <h1>Slug Points Calculator</h1>
      <h2>Calculate the maxium amount of slug points you need till the end of the quarter</h2>
      <div className="body">
        <div className="mealsContainer">
          <label htmlFor="mealsInput" className='inputLabel'>Meals Per Day</label>
          <input type="number" min={1} value={userData.numMeals} id='mealsInput'/>
        </div>

        <div className="costContainer">
          <label htmlFor="costInput" className='inputLabel'>Cost Per Meal</label>
          <input type="number" min={1} value={userData.cost} id="costInput"/>
        </div>

        <div className="dateContainer">
          <label htmlFor="dateInput" className='inputLabel'>Date</label>
          <input type="date" value={userData.date}/>
        </div>

        <p className='result'>
          Need {userData.points} slug points
        </p>
      </div>
      
    </>
  )
}

export default App
