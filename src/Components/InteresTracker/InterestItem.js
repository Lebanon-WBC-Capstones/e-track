import React, { useState } from 'react';
// import Components this is the parent

const InterestItem = ({ title, num, date }) => {
  // const [txtColor, setTxtColor] = useState('text-gray-800');
  // const [borderColor, setBorderColor] = useState('border-gray-800');
  // const [backgroundColor, setBackgroundColor] = useState('bg-white');

  const [interest, setInterst] = useState({
    txtColor: 'text-gray-800',
    borderColor: 'border-gray-800',
    backgroundColor: 'bg-white',
  });

  const handleColorChanger = () => {
    if (interest.backgroundColor === 'bg-white') {
      setInterst({
        txtColor: 'text-white',
        borderColor: 'border-white',
        backgroundColor: 'bg-primary',
      });

      // interest.setInterst.backgroundColor('bg-primary');
      // interest.setInterst.txtColor('text-white');
      // interest.setInterst.borderColor('border-white');
    } else {
      setInterst({
        txtColor: 'text-gray-800',
        borderColor: 'border-gray-800',
        backgroundColor: 'bg-white',
      });
      // interest.setInterst.backgroundColor('bg-white');
      // interest.setInterst.txtColor('text-gray-800');
      // interest.setInterst.borderColor('border-gray-800');
    }
  };

  return (
    <div
      onClick={handleColorChanger}
      className={`${interest.backgroundColor} ${interest.txtColor}   text-lg border-b-2 border-gray-200 flex   justify-between content-center max-w-sm mx-auto border-b-1 box-border h-auto w-auto p-4 items-baseline`}
    >
      <p className="w-1/3 break-words">{title}</p>
      <p
        className={`${interest.borderColor} justify-self-auto  p-2  text-sm rounded-full border-2 h-6 w-6 flex items-center justify-center`}
      >
        {num}
      </p>
      <p className="w-1/3">{date}</p>
    </div>
  );
};
export default InterestItem;
