import React, { useState, ChangeEvent } from "react";
import { Container } from "./styles";

interface SelectProps {
  name: string;
  options: string[];
  onChange: (selectedOption: object) => void;
}

const Select: React.FC<SelectProps> = ({ name, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  
  
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    onChange({value: optionValue, name});
  };

  return (
    <Container value={selectedOption} onChange={handleOptionChange}>
      {/* <option value="">Select an option</option> */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Container>
  );
};

export default Select;
