import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import ChannelName from '../ChannelName';

const StyledChannel = styled.div`
  margin: 2px 5px 2px 15px;
  padding: 0 8px;
  height: 32px;
  background-color: ${props => (props.isSelected ? colors.channelSelected : 0)};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s ease;

  :before {
    content: ' ';
    display: ${props => (props.isSelected ? 'block' : 'none')};
    width: 4px;
    height: 7px;
    position: absolute;
    left: 0px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    background: #fff;
  }
  :hover {
    background-color: ${props => (props.isSelected ? colors.channelSelected : colors.grayLight)};

    span {
      color: ${props => (props.isSelected ? 0 : colors.channelHoveredText)};
    }
  }
`;

const Channel = ({ name, isSelected, onClick }) => (
  <StyledChannel isSelected={isSelected} onClick={onClick}>
    <ChannelName name={name} textColor={isSelected && '#fff'} />
  </StyledChannel>
);

export default Channel;
