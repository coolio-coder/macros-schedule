import Macro from "./Macro";
import { PersonInfoContext, PersonInfoProvider } from "../contexts/infoContext"
import { useContext } from "react";

const Macros = () => {
  const [macroSchedule, setSchedule] = useContext(PersonInfoContext)
  
  return (
    <>        
      {macroSchedule.map((macroInfo) => (
        <Macro key={macroInfo.day} macroInfo={macroInfo} />
      ))}
    </>
  );
};

export default Macros;
