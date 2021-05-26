import Macro from "./Macro";

const Macros = ({ macroSchedule, onToggle }) => {
  return (
    <>
      {macroSchedule.map((macroInfo) => (
        <Macro key={macroInfo.day} macroInfo={macroInfo} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Macros;
