import Header from "./components/Header";
import Macros from "./components/MacroSchedule";
import AddInfo from "./components/AddInfo";
import React, { useContext, useEffect, useState } from "react";
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
    "Low": {
      "Tone Muscles": 1,
      "Lose Weight": 1.2,
      "Gain Muscles": 1.4,
    },
    "Medium": {
      "Tone Muscles": 1.4,
      "Lose Weight": 1.6,
      "Gain Muscles": 1.8,
    },
    "High": {
      "Tone Muscles": 1.6,
      "Lose Weight": 1.8,
      "Gain Muscles": 2.0,
    }
  }
};

function ChildApp() {
  const [macroSchedule, setSchedule] = useContext(PersonInfoContext)
  
  const tempArr = {
    age: "24",
    cardioIntensity: "High",
    dates: {Friday: false,
      Monday: false,
      Saturday: false,
      Sunday: true,
      Thursday: false,
      Tuesday: true,
      Wednesday: false,
    },
    fitnessGoals: "Lose Weight",
    gender: {female: false, male: true},
    height: "180",
    id: 46062,
    weight: "89",
    weightIntensity: "Medium",
  }

  const intensityFactor = {
      cardioIntensity: {
        "High": {
          weightIntensity: {
            "High": 1.9,
            "Medium": 1.725,
            "Low": 1.55,
          }},
        "Medium": {
          weightIntensity: {
            "High": 1.725,
            "Medium": 1.55,
            "Low": 1.375,
          }},
        "Low": {
          weightIntensity: {
            "High": 1.55,
            "Medium": 1.375,
            "Low": 1.2,
          }
        }
      }
  }

  //function to calculate BMR (http://en.wikipedia.org/wiki/Harris-Benedict_equation)
  const BMRCalculator = (arr) => {
    let BMR
    if(arr.gender.male === true) {
      BMR = 66.5 + (13.75 * arr.weight) + (5.003 * arr.height) - (6.755 * arr.age);
      return BMR
    }
    if(arr.gender.female == true) {
      BMR = 655 + (9.563 * arr.weight) + (1.85 * arr.height) - (4.676 * arr.age);
      return BMR
    }
  } 

  //calculate your BMR based on the intensity of your work out above in the intensity factor. 
  const gymMRCalculator = (arr) => {
    return BMRCalculator(arr) * (intensityFactor.cardioIntensity[arr.cardioIntensity].weightIntensity[arr.weightIntensity])
  }

  console.log(gymMRCalculator(tempArr))

  const proteinCalculator = (arr) => {
    let proteinFactor = proteinCalculation.cardioIntensity[arr.cardioIntensity][arr.fitnessGoals];
    return proteinFactor * arr.weight;
  }

  console.log(proteinCalculator(tempArr))


  const AddTask = (day) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newMacro = {id, ...day}
    console.log(newMacro);

    //Set the dates object by itself
    let dateList = newMacro.dates;

    //Need to read more
    Object.filter = (obj, predicate) => 
      Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );


    let workoutDays = Object.filter(dateList, workout => workout === true);
    let nonworkoutDays = Object.filter(dateList, workout => workout === false);

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

    let weeklyScheduleUnsorted = Object.assign({}, workoutDays, nonworkoutDays)
    let weeklyScheduleSorted = Object.entries(weeklyScheduleUnsorted).map((e) => ( { [e[0]]: e[1] } ));
    
    
    console.log(weeklyScheduleSorted)
    // setSchedule(oldState => [...oldState, ['hi']])
    // console.log(macroSchedule)

    // setSchedule(weeklyScheduleSorted, function() {
    //   console.log('hi')
    // })
    useEffect(() => {
      console.log('hi')
    })
    setSchedule(weeklyScheduleSorted);
    console.log(macroSchedule)

    // console.log(`Your weight is ${day.weight} and you train ${day.frequency} per week. Your fitness goals is to ${day.fitnessGoals}, which requires you to work out ${day.frequency} per week. In order to meet your goals, you'll need to take ${proteinFactor * day.weight} grams of protein during your work out days.`)
  }

  // const CalculateCalorie = () => {
  //   const [macroSchedule, setSchedule] = useContext(PersonInfoContext)
  //   let proteinFactor = proteinCalculation.cardioIntensity[macroSchedule.cardioIntensity][macroSchedule.fitnessGoals];
  //   console.log(proteinFactor)
  // }

  return (
    <>
    <AddInfo onAdd={AddTask}/> 
    {/* <Macros
    // macroSchedule={macroSchedule}
    // setMSchedule={setSchedule}
    onToggle={toggleTraining}
    /> */}
    </> 
  )

  
}

function App() {
  
  
  return (
    <PersonInfoProvider>
    <div className="container">
      <Header />
      <ChildApp>        
      </ChildApp>

    </div>
    {/* // <button type='button' className='btn btn-primary'>Primary</button> */}
        </PersonInfoProvider>
  );
}

export default App;