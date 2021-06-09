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
  const value = useContext(PersonInfoContext);
  
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
