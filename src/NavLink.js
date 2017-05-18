import React from 'react';
import { BarnListNavViewListButton, ButtonText } from './styledcomponents';
import { Route } from 'react-router-native';

const NavLink = ({ children, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <BarnListNavViewListButton {...match} to={to} underlayColor="white">
            <ButtonText>
              {children}
            </ButtonText>
          </BarnListNavViewListButton>
        );
      }}
    />
  );
};

export default NavLink;
