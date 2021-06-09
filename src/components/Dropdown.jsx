import React, { useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { DropDownGoalContext, DropDownGoalProvider } from "../contexts/infoContext"

const Dropdown1 = ({DropdownName, firstoption, secondoption, thirdoption , getDropdown}) => {
    const [btnTitle, setBtnTitle] = useState(DropdownName)

    const setDropdownSelection = (e) => {
      getDropdown(e.target.innerText);
    }

    return (
    <DropdownButton id="dropdown-basic-button" title={btnTitle}>
      <Dropdown.Item onClick={(e) => 
        {
        setDropdownSelection(e);
        setBtnTitle(firstoption)
        }
        }>
        {firstoption}
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => 
        {
        setDropdownSelection(e);
        setBtnTitle(secondoption)
        }
        }>
        {secondoption}
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => 
        {
        setDropdownSelection(e);
        setBtnTitle(thirdoption)
        }
        }>
        {thirdoption}
      </Dropdown.Item>
    </DropdownButton>
    )
}

export default Dropdown1;
