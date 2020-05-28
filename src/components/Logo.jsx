import React from 'react';
import { CircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to='/'>
        <CircleFill size={30} color='#33A753'/>
        <p>Local Store</p>
      </Link>
    </div>
  )
}

const StyledLogo = styled(Logo)`

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
  }
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    margin-left: 5px;
  }
`;

export default StyledLogo