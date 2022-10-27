import React from 'react'
import styled from 'styled-components';
import colors from '../../constants/colors'

const StyledHome = styled.div`
width: 100%;
background: ${colors.lightGrey};
`;

class Home extends React.Component {
render() {
  return <StyledHome>hi</StyledHome>;
}
}

export default Home;