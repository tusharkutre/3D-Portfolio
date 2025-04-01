import React, { useId } from "react";
// const themesId = useId(false);

const Dark = ({theme, handleThemeChange}) => {
  return (
    <>
      <div className="dark rounded hover:bg-gray-800 px-2 py-2 flex items-center">
        <label htmlFor="theme-selector">Themes :</label>
        <select
          id="theme-selector"
          name="theme-selector"
          value={theme}
          onChange={handleThemeChange}
        >
          <option value="default">Default</option>
          <option value="white">White </option>
          <option value="black">Dark 🌙</option>
        </select>
      </div>
    </>
  );
};

export default Dark;
