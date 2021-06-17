import { useState, useContext } from "react";
import Checkboxes from "./Checkboxes";
import { PersonInfoContext, PersonInfoProvider } from "../contexts/infoContext";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'


const AddInfo = ({onAdd}) => {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState({
    male: false,
    female: false,
  });
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const [dates, setDates] = useState({
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
  })
  const [weightIntensity, setWeightIntensity] = useState("Set Weight Intensity");
  const [cardioIntensity, setCardioIntensity] = useState("Set Cardio Intensity");
  const [fitnessGoals, setFitnessGoals] = useState("Set your Fitness Goals");

  const onSubmit = (e) => {
      console.log(dates)
      //Doesn't acutally submit to the page
      e.preventDefault();

      if(!weight) {
          alert('Please enter your weight')
          return
      }

      //Prevents users from moving onto the next screen if they do not select a goal/intensity
      if(weightIntensity[0] + weightIntensity[1] + weightIntensity[2]  === "Set") {
        alert('Please remember to select a weight intensity.');
        return;
      }
      if(cardioIntensity[0] + cardioIntensity[1] + cardioIntensity[2] === "Set") {
        alert('Please remember to select a cardio intensity.');
        return;
      }
      if(fitnessGoals[0] + fitnessGoals[1] + fitnessGoals[2] === "Set" ) {
        alert('Please remember to select a fitness goal.');
        return;
      }

      if(gender.male === false && gender.female === false) {
        alert('Please choose a gender/sex.')
      }

      //Adds info to the state via submitInfo function in App.js
      onAdd({weight, dates, weightIntensity, cardioIntensity, fitnessGoals})

      //Resets the values in the home screen
      setWeight('');
      setDates({
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
    })
      setWeightIntensity('Set Weight Intensity');
      setCardioIntensity('Set Cardio Intensity');
      setFitnessGoals('Set your Fitness Goals');
  }

  const updateDateState = (e) => {
    let thisDate = e.target.name;
    let checkStatus = e.target.checked;
    
    //Create a new obj with the boolean of each date from the useState obj
    let dateObjCopy = Object.assign({}, dates);

    //remove just the key (thisDate) that's being selected from the object (dates)
    delete dateObjCopy[thisDate];

    //Make a new object with a checked status 
    let newDateStatus = {};
    newDateStatus[thisDate] = checkStatus;

    let dateObjPush = Object.assign(dateObjCopy, newDateStatus);
    console.log(dateObjPush)

    //Set the new dates obj using useState hook
    setDates(
      dateObjPush
    )
  }

  const updateGender = (e) => {
    console.log(gender)
    let thisGender = e.target.id;
    let oldGenderStatus = gender[thisGender];

    let genderCopy = Object.assign({}, gender);
    delete genderCopy[thisGender];
    let newGenderStatus = {};
    newGenderStatus[thisGender] = !oldGenderStatus;
    console.log(genderCopy)
    console.log(newGenderStatus)

    let genderPush = Object.assign(genderCopy, newGenderStatus);
    console.log(genderPush)
    setGender(genderPush)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      {/* Set Age */}
      <div className="form-control">
        <label>Your Age</label>
        <input
          type="text"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      {/* Set Weight */}
      <div className="form-control">
        <label>Your weight in KG</label>
        <input
          type="text"
          placeholder="Enter your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      {/* Set Height */}
      <div className="form-control">
        <label>Your height in centimeters</label>
        <input
          type="text"
          placeholder="Enter your Height in Centimeters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      {/* Set Gender */}
      <div className="form-control">
        <label>Your Gender/Sex</label>
        {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Male" style={{width: "5px", height: "5px"}} className="Male" name="group1" type={type} id="male" onChange={(e) => {
            updateGender(e)
          }} />
      <Form.Check inline label="Female" style={{width: "5px", height: "5px", marginLeft: "30px"}} name="group1" type={type} id="female" onChange={(e) => {
            updateGender(e)
          }} />
    </div>
  ))}
      </div>



      <div className="form-control">
        <label>What is your work out frequency</label><br></br>

        <div key='inline-checkbox-Sunday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Sunday" name="Sunday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox-Monday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Monday" name="Monday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox-Wednesday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Tuesday" name="Tuesday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox-Thursday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Wednesday" name="Wednesday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox-Friday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Thursday" name="Thursday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox-Saturday' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Friday" name="Friday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>
        <div key='inline-checkbox' className="mb-3">
          <Form.Check style={{width: "5px", height: "5px"}} label="Saturday" name="Saturday" type="checkbox" onChange={(e) => {
            updateDateState(e)
          }}/>
        </div>

        {/* <Checkboxes /> */}

      </div>
      <div className="form-control">
        <label>How intense are your free weight/body weight workouts?</label>
        <DropdownButton id="dropdown-basic-button" title={weightIntensity}>
            <Dropdown.Item onClick={(e) => setWeightIntensity('Low')}>
            {'Low'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setWeightIntensity('Medium')}>
            {'Medium'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setWeightIntensity('High')}>
            {'High'}
            </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="form-control">
        <label>How intense are your cardio workouts?</label>
        <DropdownButton id="dropdown-basic-button" title={cardioIntensity}>
            <Dropdown.Item onClick={(e) => setCardioIntensity('Low')}>
            {'Low'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCardioIntensity('Medium')}>
            {'Medium'}
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setCardioIntensity('High')}>
            {'High'}
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


