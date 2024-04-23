import React from 'react';

const CustomButton = ({ otherStyles, action, icon,onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`py-3 px-5 ${otherStyles} rounded-xl`}
      >
        <span>{icon}</span>
        <span>{action}</span>
      </button>
    </div>
  );
};

export default CustomButton;
