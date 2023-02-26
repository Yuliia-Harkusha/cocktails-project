import React, { useState } from 'react';
import { FilterBox, FilterItem, Input, Label } from './Filter.styled';
import { useGlobalContext } from '../../context';

export const Filter = () => {
  const [drinkType, setDrinkType] = useState();

  const handleChange = e => {
    setDrinkType(e.target.value);
  };

  const { cocktails } = useGlobalContext();
  // console.log(cocktails);

  const getAlcoDrinks = () => {
    const alco = cocktails.filter(item => {
      return Object.values(item).includes('Alcoholic');
    });
    console.log(alco);
  };

  const getNonAlcoDrinks = () => {
    const nalco = cocktails.filter(item => {
      return Object.values(item).includes('Non alcoholic');
    });

    console.log(nalco);
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
