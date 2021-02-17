import React from 'react';
import DataPoints from '../../../assets/images/Data points-pana 1.png';
import Objects from '../../../assets/images/OBJECTS.png';
import Button from '../../../Components/button/button';

export default function YourJournal() {
  return (
    <div>
      <div className=" top-10 relative ">
        <p className="text-center text-4xl font-bold font-sans mb-3">
          your journal begins <br /> with a click
        </p>
      </div>
      <div className=" flex justify-center top-20 relative z-20">
        <Button
          onClick={() => {
            alert('Hello!');
          }}
          text={'Get started'}
        />
      </div>
      <img src={Objects} alt="Objects" className="right-0 top-40 absolute " />
      <img src={DataPoints} alt="Data" className="relative left-0 top-0 " />
    </div>
  );
}
