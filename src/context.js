import React, { useState, useEffect, useContext, useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      let response = await fetch(`${url}${query}`);
      // if (url.includes('filter=alcoholic')) {
      //   response = await fetch(
      //     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
      //   );
      // }
      // if (url.includes('filter=non-alcoholic')) {
      //   response = await fetch(
      //     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      //   );
      // }
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map(item => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    fetchDrinks();
  }, [query, fetchDrinks]);

  return (
    <AppContext.Provider value={{ cocktails, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
