import { FaTimes } from "react-icons/fa";

const Macro = ({ macroInfo}) => {
    
    return (
        <div className='task' >
            <h3>{macroInfo.day} <FaTimes style={{ cursor: 'pointer'}} /></h3>
            <h5>Today, you will have {macroInfo.training ? "to work out. Good Luck!" : "to take a rest day. Enjoy!"} </h5>
            <br></br>
            <p>Calories: {macroInfo.calories}</p> 
            <p>Protein: {macroInfo.protein}</p> 
            <p>Carbohydrate: {macroInfo.carbs}</p> 
            <p>Fat: {macroInfo.fat}</p> 
        </div>
    )
}

export default Macro
