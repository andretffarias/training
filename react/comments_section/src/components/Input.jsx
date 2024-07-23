import { useState } from "react";

export default function Input({ id, label, typeInput , value, onChange}) {
  if (typeInput !== "textarea") {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input 
          type={typeInput} 
          id={id} value={value} 
          onChange={onChange}
        />
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea 
          id={id} 
          value={value} 
          onChange={onChange}
        ></textarea>
      </>
    );
  }
}
