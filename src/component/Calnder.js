import './Calnder.css';

import React, { useState } from 'react';

import Calendar from 'react-calendar';

const Calc=()=>{
    const [value, onChange] = useState(new Date());

    return (
      <div className='clc'>
        <Calendar className="work" onChange={onChange} value={value} />
      </div>
    );


}
export default Calc