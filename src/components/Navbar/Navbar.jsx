import React, { useState, useEffect } from 'react';

import {
  CocktailIcon,
  Navigation,
  NavigationDiv,
  NavList,
  NavItem,
  HeadLink,
} from './Navbar.styled';

export const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 600px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <Navigation>
      <NavigationDiv>
        <HeadLink to="/">
          <CocktailIcon />
          <h2>TheCocktailDB</h2>
        </HeadLink>
        <NavList>
          <li>{matches && <NavItem to="/">Home</NavItem>}</li>
          <li>
            <NavItem to="/about">About</NavItem>
          </li>
        </NavList>
      </NavigationDiv>
    </Navigation>
  );
};
