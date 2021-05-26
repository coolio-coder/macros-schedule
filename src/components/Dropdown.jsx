import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Dropdown1 = ({DropdownName, firstoption, secondoption, thirdoption }) => {
    const [btnTitle, setBtnTitle] = useState(DropdownName)

    return (
    <DropdownButton id="dropdown-basic-button" title={btnTitle}>
      <Dropdown.Item onClick={() => setBtnTitle(firstoption)}>
        {firstoption}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setBtnTitle(secondoption)}>
        {secondoption}
      </Dropdown.Item>
      <Dropdown.Item onClick={() => setBtnTitle(thirdoption)}>
        {thirdoption}
      </Dropdown.Item>
    </DropdownButton>
    )
}

export default Dropdown1;
