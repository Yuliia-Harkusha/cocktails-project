import React, { useState } from 'react';
import { FilterBox } from './Filter.styled';

export const Filter = () => {
  const [drinkType, setDrinkType] = useState();
  const handleChange = e => {
    setDrinkType(e.target.value);
  };

  return (
    <FilterBox>
      <div>
        <input
          type="radio"
          id="alco"
          value="Alcoholic"
          checked={drinkType === 'Alcoholic'}
          onChange={handleChange}
        />
        <label htmlFor="alco">Alcoholic</label>
      </div>

      <div>
        <input
          type="radio"
          id="nonAlco"
          value="Non-Alcoholic"
          checked={drinkType === 'Non-Alcoholic'}
          onChange={handleChange}
        />
        <label htmlFor="nonAlco">Non-Alcoholic</label>
      </div>
    </FilterBox>
  );
};
