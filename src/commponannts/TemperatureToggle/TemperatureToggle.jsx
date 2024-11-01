import React from 'react';

function TemperatureToggle({ unit, onToggle }) {
  const handleChange = (e) => {
    onToggle(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="C"
          checked={unit === 'C'}
          onChange={handleChange}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          value="F"
          checked={unit === 'F'}
          onChange={handleChange}
        />
        Fahrenheit
      </label>
    </div>
  );
}

export default TemperatureToggle;
