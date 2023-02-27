import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { Cocktail } from '../Cocktail/Cocktail';
import { Filter } from 'components/Filter/Filter';
import { Message, Heading, MainList } from './CocktailList.styled';

export const CocktailList = () => {
  const [drinks, setDrinks] = useState([]);
  const { cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return <Message>No cocktails matched your search criteria</Message>;
  }

  if (drinks.length === 0) {
    return setDrinks(cocktails);
  }

  const getAlcoDrinks = () => {
    const alco = cocktails.filter(item => {
      return Object.values(item).includes('Alcoholic');
    });
    return setDrinks(alco);
    // console.log(alco);
  };

  const getNonAlcoDrinks = () => {
    const nalco = cocktails.filter(item => {
      return Object.values(item).includes('Non alcoholic');
    });
    return setDrinks(nalco);
  };

  // console.log(cocktails);

  return (
    <section>
      <Heading>Cocktails</Heading>
      <Filter
        getAlcoDrinks={getAlcoDrinks}
        getNonAlcoDrinks={getNonAlcoDrinks}
      ></Filter>
      <MainList>
        {drinks.map(item => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </MainList>
    </section>
  );
};
