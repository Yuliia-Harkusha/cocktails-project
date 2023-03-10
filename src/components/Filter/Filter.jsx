import React, { useState } from 'react';
import { FilterBox, FilterItem, Input, Label } from './Filter.styled';

export const Filter = ({ getAlcoDrinks, getNonAlcoDrinks }) => {
  const [drinkType, setDrinkType] = useState();

  const handleChange = e => {
    setDrinkType(e.target.value);
  };

  return (
    <FilterBox>
      <FilterItem>
        <Input
          type="radio"
          id="alco"
          value="Alcoholic"
          checked={drinkType === 'Alcoholic'}
          onChange={handleChange}
          onClick={getAlcoDrinks}
        />
        <Label htmlFor="alco">Alcoholic</Label>
      </FilterItem>

      <FilterItem>
        <Input
          type="radio"
          id="nonAlco"
          value="Non-Alcoholic"
          checked={drinkType === 'Non-Alcoholic'}
          onChange={handleChange}
          onClick={getNonAlcoDrinks}
        />
        <Label htmlFor="nonAlco">Non-Alcoholic</Label>
      </FilterItem>
    </FilterBox>
  );
};
