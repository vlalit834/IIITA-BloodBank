import React from "react";
function InputType({ labelText, labelFor, inputType, value, onChange, name }) {
  return (
    <div className="mb-3">
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputType;
