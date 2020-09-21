import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  .is-active {
    font-weight: bold;
  }
`;

const Header = () => (
  <header>
    <HeaderWrapper>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </HeaderWrapper>
  </header>
);

export default Header;
