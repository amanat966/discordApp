import React from 'react';
import styled from 'styled-components';
import data from '../../data';
import colors from '../../utils/colors';

const StyledWelcomeChannelInstructions = styled.div`
  display: flex;
  flex-direction: column;
  margin:100px 0;
  min-height:500px;
  h1{
    text-align:center;
    text-transform: uppercase;
    color: ${colors.primary};
    font-weight: 700;
  }
`
const StyledWelcomeChannelInstructionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  max-width: 800px;
  margin: 0 auto;
`
const StyledWelcomeChannelInstructionSubBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height:30px;
  width:480px;
  
  img{
    max-width: 50px;
  }
  p{
    color: #83868d;
    font-size: 18px;
    margin-left:20px;
  }
  a{
    text-decoration: none;
    color:#088DC4;
}
`
export default () => {
  const user = data.users[data.userId];

  return (
        <StyledWelcomeChannelInstructions>
          <h1>Welcome to the server, {user.username}</h1>
          <StyledWelcomeChannelInstructionBody>
            <StyledWelcomeChannelInstructionSubBody>
              <img src = "https://i.postimg.cc/W1X6wycL/alert.png"></img>
              <p><strong>Learn about Discord</strong> at your own pace by exploring <br/> the floating quest indicators.</p>
            </StyledWelcomeChannelInstructionSubBody>
            <StyledWelcomeChannelInstructionSubBody>
              <img src = "https://i.postimg.cc/3JjZdRLw/add-contact-1.png"></img>
              <p><strong>Invite your friends</strong> to this server by clicking on a <br/> <a href="#"> share button</a> when you're ready.</p>
            </StyledWelcomeChannelInstructionSubBody>
            <StyledWelcomeChannelInstructionSubBody>
              <img src = "https://i.postimg.cc/K8ZDL2VD/smartphone.png"></img>
              <p><strong>Stay connected</strong> to your server from <a href="#"> your smartphone</a> <br/> and even use Discord while console gaming.</p>
            </StyledWelcomeChannelInstructionSubBody>
            <StyledWelcomeChannelInstructionSubBody>
              <img src = "https://i.postimg.cc/SKRLTGmX/twitter.png"></img>
              <p><strong>Reach us</strong><a href ="#"> our help desk</a> or on Twitter <br/> <a href="#"> @discordapp</a> if you have any questions or need help.</p>
            </StyledWelcomeChannelInstructionSubBody>
          </StyledWelcomeChannelInstructionBody>
        </StyledWelcomeChannelInstructions>
  )
}


