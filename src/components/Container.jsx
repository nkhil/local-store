import React from 'react';
import styled from 'styled-components';

const Container = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const StyledContainer = styled(Container)`
  max-width: 1000px;
  margin: 0 auto;
  /* border: 5px solid black; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export default StyledContainer;
