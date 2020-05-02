import React from 'react';
import styled from 'styled-components';

const Button = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: #33A753;
  color: #FFF;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:hover {
      background-color: #289045;
    }
  &:focus {
    outline:none;
  }
`;

export default StyledButton;
