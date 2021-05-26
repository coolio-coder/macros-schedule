import { useState } from "react";
import Dropdowns from "./Dropdown";
import Checkboxes from "./Checkboxes";


const AddInfo = ({onAdd}) => {
  const [weight, setWeight] = useState("");
  const [frequency, setFrequency] = useState("");
  const [weightIntensity, setWeightIntensity] = useState("Medium Intensity");
  const [cardioIntensity, setCardioIntensity] = useState("Medium Intensity");
  const [fitnessGoals, setFitnessGoals] = useState("Lose Weight");

  const onSubmit = (e) => {
      //Doesn't acutally submit to the page
      e.preventDefault();

      if(!weight) {
          alert('Please enter your weight')
          return
      }

      //Adds info to the state via submitInfo function in App.js
      onAdd({weight, frequency, weightIntensity, cardioIntensity, fitnessGoals})

      //Resets the values in the home screen
      setWeight('')
      setFrequency('')
      setWeightIntensity('')
      setCardioIntensity('')
      setFitnessGoals('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Your weight in KG</label>
        <input
          type="text"
          placeholder="Enter your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>What is your work out frequency</label>
        <input
          type="text"
          placeholder="How often do you workout"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        {/* <Checkboxes /> */}

      </div>
      <div className="form-control">
        <label>How intense are your free weight/body weight workouts?</label>
        <Dropdowns DropdownName={"Weights Intensity Level"} firstoption={"Low Intensity"} secondoption={"Medium Intensity"} thirdoption={"High Intensity"} onChange={(e) => setCardioIntensity(e.target.value)}/>   
      </div>
      <div className="form-control">
        <label>How intense are your cardio workouts?</label>
        <Dropdowns DropdownName={"Cardio Intensity Level"} firstoption={"Low Intensity"} secondoption={"Medium Intensity"} thirdoption={"High Intensity"} onSelect={(e) => setCardioIntensity(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>What do you want to gain?</label>
        <Dropdowns DropdownName={"Your fitness goals"} firstoption={"Tone Muscles"} secondoption={"Lose Weight"} thirdoption={"Gain Muscles"} onSelect={(e) => setCardioIntensity(e.target.value)}/>
      </div>


      <input type='submit' value='Submit your Info' className='btn btn-block btn-primary' />
    </form>
  );
};

AddInfo.defaultProps = {
  cardioIntensity: 'Medium Intensity',
  weightIntensity: 'Medium Intensity',
}

export default AddInfo;


