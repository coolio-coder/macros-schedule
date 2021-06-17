import Header from "./components/Header";
import Macros from "./components/MacroSchedule";
import AddInfo from "./components/AddInfo";
import React, { useContext, useState } from "react";
import { PersonInfoProvider, PersonInfoContext } from "./contexts/infoContext";

//First we will create a new contex
// const myContext = React.createContext();

// Actual calculations (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/)

//Maintain muscle mass = 0.8g/kg
//Ideal protein intake = 1.4 - 2.0 g/kg
    //low tone = 1.0 g/kg
    //low lose = 1.2 g/bg
    //low gain = 1.4 g/bg
    //moderate tone = 1.4 g/kg
    //moderate lose = 1.6 g/kg
    //moderate gain = 1.8 g/kg
    //high tone = 1.6 g/kg
    //high lose = 1.8 g/kg
    //high gain = 2.0 g/kg

const proteinCalculation = {
  cardioIntensity: {
    "Low Intensity": {
      "Tone Muscles": 1,
      "Lose Weight": 1.2,
      "Gain Muscles": 1.4,
    },
    "Medium Intensity": {
      "Tone Muscles": 1.4,
      "Lose Weight": 1.6,
      "Gain Muscles": 1.8,
    },
    "High Intensity": {
      "Tone Muscles": 1.6,
      "Lose Weight": 1.8,
      "Gain Muscles": 2.0,
    }
  }
};


function App() {
  // const [macroSchedule, setSchedule] = useContext(PersonInfoContext)
  
  const toggleTraining = (day) => {
  //   console.log(day);
  //   // setSchedule(
  //   //   macroSchedule.map((macroInfo) =>
  //   //     macroInfo.day === day ?  console.log('Hi')  : console.log('bye')
  //   //   )
  //   // );
  };

  const addTask = (day) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newMacro = {id, ...day}
    console.log(newMacro);
    // setSchedule(...day, newMacro)
    // console.log(day)

    //Set the dates object by itself
    let dateList = newMacro.dates;

    //Need to read more
    Object.filter = (obj, predicate) => 
      Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );


    let workoutDays = Object.filter(dateList, workout => workout === true);
    let nonworkoutDays = Object.filter(dateList, workout => workout === false);

    console.log(workoutDays)
    console.log(nonworkoutDays)

    //WorkoutInfo details all the info regarding the user's health and workout intensity
    const healthInfo = Object.keys(newMacro).reduce((object, key) => {
      if (key !== "dates" && key !== "id" && key !== "cardioIntensity" && key !== "fitnessGoals" && key !== "weightIntensity") {
        object[key] = newMacro[key]
      }
      return object
    }, {})

    const fitnessInfo = Object.keys(newMacro).reduce((object, key) => {
      if (key !== "dates" && key !== "id" && key != "weight") {
        object[key] = newMacro[key]
      }
      return object
    }, {})

    //Go through each date and add fitnessinfo if there it's a workout date or just health info on a regular date
    Object.keys(workoutDays).map(function(key) {
      workoutDays[key] = {healthInfo, fitnessInfo};
    });

    Object.keys(nonworkoutDays).map(function(key) {
      nonworkoutDays[key] = healthInfo;
    });

    console.log(workoutDays)
    console.log(nonworkoutDays)

    let weeklyScheduleUnsorted = Object.assign({}, workoutDays, nonworkoutDays)
    let weeklyScheduleSorted = Object.entries(weeklyScheduleUnsorted).map((e) => ( { [e[0]]: e[1] } ));

    console.log(weeklyScheduleSorted);
    
    // setSchedule(prevSchedules => [...prevSchedules, (weeklyScheduleSorted)])
    // let proteinFactor = proteinCalculation.cardioIntensity[day.cardioIntensity][day.fitnessGoals];

    // console.log(`Your weight is ${day.weight} and you train ${day.frequency} per week. Your fitness goals is to ${day.fitnessGoals}, which requires you to work out ${day.frequency} per week. In order to meet your goals, you'll need to take ${proteinFactor * day.weight} grams of protein during your work out days.`)
  }

  
  return (
    <PersonInfoProvider>
    <div className="container">
      <Header />
      <AddInfo onAdd={addTask}/>
      <Macros
        // macroSchedule={macroSchedule}
        // setMSchedule={setSchedule}
        onToggle={toggleTraining}
        />
    </div>
    {/* // <button type='button' className='btn btn-primary'>Primary</button> */}
        </PersonInfoProvider>
  );
}

export default App;
