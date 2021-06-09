import { useState } from "react";
import Checkboxes from "./Checkboxes";
import { PersonInfoContext, PersonInfoProvider } from "../contexts/infoContext";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


const AddInfo = ({onAdd}) => {
  const [weight, setWeight] = useState("");
  const [frequency, setFrequency] = useState("");
  const [weightIntensity, setWeightIntensity] = useState("Set Weight Intensity");
  const [cardioIntensity, setCardioIntensity] = useState("Set Cardio Intensity");
  const [fitnessGoals, setFitnessGoals] = useState("Set your Fitness Goals");

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
        <DropdownButton id="dropdown-basic-button" title={weightIntensity}>
            <Dropdown.Item onClick={(e) => setWeightIntensity('Low Intensity')}>
            {'Low Intensity'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setWeightIntensity('Medium Intensity')}>
            {'Medium Intensity'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setWeightIntensity('High Intensity')}>
            {'High Intensity'}
            </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="form-control">
        <label>How intense are your cardio workouts?</label>
        <DropdownButton id="dropdown-basic-button" title={cardioIntensity}>
            <Dropdown.Item onClick={(e) => setCardioIntensity('Low Intensity')}>
            {'Low Intensity'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCardioIntensity('Medium Intensity')}>
            {'Medium Intensity'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCardioIntensity('High Intensity')}>
            {'High Intensity'}
            </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="form-control">
        <label>What do you want to gain?</label>
        <DropdownButton id="dropdown-basic-button" title={fitnessGoals}>
            <Dropdown.Item onClick={(e) => setFitnessGoals('Tone Muscles')}>
            {'Tone Muscle'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setFitnessGoals('Lose Weight')}>
            {'Lose Weight'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setFitnessGoals('Gain Muscles')}>
            {'Gain Muscles'}
            </Dropdown.Item>
        </DropdownButton>
      </div>


      <input type='submit' value='Submit your Info' className='btn btn-block btn-primary' />
    </form>
  );
};

export default AddInfo;


