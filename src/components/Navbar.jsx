import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import BasketIcon from './BasketIcon';

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
      <div className={'basket-icon'}>
        <Link to='/basket'>
          <p>Your basket:</p> <BasketIcon />
        </Link>
      </div>
    </div>
  )
}

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 20px;

  .basket-icon {
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 1.2rem;

    a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:visited {
      text-decoration: none;
      color: inherit;
    }

  }
  }
`;

export default StyledNavbar;
