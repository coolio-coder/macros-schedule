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

  //Brings the drop down item to the submisson page
  const getDropdownSelection = (e) => {
    console.log(e);
  }

  const sayHello = () => {
    console.log('hi');
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
        <label>What is your work out frequency</label><br></br>
      <Checkboxes day={"Sunday"}/>
      <Checkboxes day={"Monday"}/>
      <Checkboxes day={"Tuesday"}/>
      <Checkboxes day={"Wednesday"}/>
      <Checkboxes day={"Thursday"}/>
      <Checkboxes day={"Friday"}/>
      <Checkboxes day={"Saturday"}/>

        {/* <Checkboxes /> */}

      </div>
      <div className="form-control">
        <label>How intense are your free weight/body weight workouts?</label>
        <Dropdowns DropdownName={"Weights Intensity Level"} firstoption={"Low Intensity"} secondoption={"Medium Intensity"} thirdoption={"High Intensity"} getDropdown={getDropdownSelection } onClick={() => console.log('hi')}/>   
      </div>
      <div className="form-control">
        <label>How intense are your cardio workouts?</label>
        <Dropdowns DropdownName={"Cardio Intensity Level"} firstoption={"Low Intensity"} secondoption={"Medium Intensity"} thirdoption={"High Intensity"} getDropdown={getDropdownSelection}/>
      </div>
      <div className="form-control">
        <label>What do you want to gain?</label>
        <Dropdowns DropdownName={"Your fitness goals"} firstoption={"Tone Muscles"} secondoption={"Lose Weight"} thirdoption={"Gain Muscles"} getDropdown={getDropdownSelection}/>
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


