import React from 'react';

const FormSection = ({ children }) => {
  return (
    <div className="right flex flex-col justify-evenly px-10">
      <div className="text-center py-10">{children}</div>
    </div>
  );
};

export default FormSection;
