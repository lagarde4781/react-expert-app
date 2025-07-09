import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const inputValueCleared = inputValue.trim();
    if (inputValueCleared.length <= 1) return;

    onNewCategory(inputValueCleared);
    // setCategories((categories) => [...categories, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
