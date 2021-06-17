import React, {useState, createContext} from 'react';

//Creates a context for the person's info
export const PersonInfoContext = createContext();

//Creates a context for the dropdown options
// export const DropDownGoalContext = createContext();

//Provider wraps around all the components that can access the state (info) below
export const PersonInfoProvider = props => {
    const [macroSchedule, setSchedule] = useState([
        {
          cardio: "high",
          weight: "medium",
        },
    ]);

return(
  <PersonInfoContext.Provider value={[macroSchedule, setSchedule]}>
      {props.children}
  </PersonInfoContext.Provider>
)

}

// export const DropDownGoalProvider = props => {
//   const [goal, setGoal] = useState ([]);

// return(
//   <DropDownGoalProvider value={[goal,setGoal]}>
//       {props.children}
//   </DropDownGoalProvider>
// )

// }


// {
//   day: "Sunday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: true,
//   cardio: "high",
//   weight: "medium",
// },
// {
//   day: "Monday",
//   calories: 2300,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: true,
//   cardio: "medium",
//   weight: "low",
// },
// {
//   day: "Tuesday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: false,
//   cardio: "low",
//   weight: "medium",
// },
// {
//   day: "Wednesday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: true,
//   cardio: "medium",
//   weight: "medium",
// },
// {
//   day: "Thursday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: false,
//   cardio: "high",
//   weight: "medium",
// },
// {
//   day: "Friday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: true,
//   cardio: "low",
//   weight: "high",
// },
// {
//   day: "Saturday",
//   calories: 2100,
//   protein: 180,
//   carbs: 60,
//   fat: 60,
//   training: true,
//   cardio: "medium",
//   weight: "medium",
// },