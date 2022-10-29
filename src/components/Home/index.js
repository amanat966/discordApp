import React from 'react'
import styled from 'styled-components';
import colors from '../../utils/colors'

const StyledHome = styled.div`
  background: ${colors.lightGrey};
`;

class Home extends React.Component {
render() {
  const { className } = this.props;
  return <StyledHome className={className}>hi</StyledHome>;}
}

export default Home;