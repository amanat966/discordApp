import React from 'react'
import styled from 'styled-components';
import colors from '../../constants/colors'

const StyledNavbar = styled.div`
  width: 70px;
  height: 100%;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiscordIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.darkGrey};
  border-radius: 50%;
  margin: 10px 0;
`;

export default () => (
    <StyledNavbar>
      <DiscordIcon />
      <DiscordIcon />
      <DiscordIcon />
    </StyledNavbar>
  );