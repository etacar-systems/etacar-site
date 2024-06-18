import React, {useState} from 'react';
import {CheckedBoxIcon, UnCheckedBoxIcon} from '../icons';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div onClick={handleCheckboxChange}>
      {checked ? <CheckedBoxIcon/> : <UnCheckedBoxIcon/>}
    </div>
  );
};

export default Checkbox;
