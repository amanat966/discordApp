import React from 'react';
import styled from 'styled-components';

import MemberRolesList from './MemberRolesList';
import GameActivity from './GameActivity';
import UserAvatar from '../UserAvatar';

import constants from '../../utils/constants';
import colors from '../../utils/colors';

const StyledMemberCard = styled.div`
  width: ${constants.memberCardWidth}px;
  background-color: ${colors.memberCardBackground};
  color: ${colors.memberCardContent};

  .header {
    background-color: ${props =>
      props.isPlaying
        ? colors.memberCardHeaderPlayingBackground
        : colors.memberCardHeaderBackground};

    .avatar-wrapper {
      cursor: pointer;

      .status {
        border-color: ${props =>
          props.isPlaying
            ? colors.memberCardHeaderPlayingBackground
            : colors.memberCardHeaderBackground};
      }

      :hover .view-profile {
        opacity: 1;
      }
    }

    .view-profile {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      text-transform: uppercase;
      font-size: 0.65em;
      font-weight: 900;

      transition: opacity 0.1s ease;
      box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.75);
      border-radius: 50%;
      opacity: 0;
    }

    .user-data {
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .username {
      margin-top: 10px;
      color: #fff;
      font-weight: 600;
      white-space: normal;
      word-break: break-word;
    }

    .tag {
      font-weight: 400;
      font-size: 1.1em;
      color: ${colors.memberCardUserTag};
    }
  }

  .content {
    padding: 12px 10px 5px;

    .roles {
      margin: 12px 0 2px;
    }

    .field-key {
      margin-bottom: 5px;
      font-weight: 800;
      font-size: 0.75em;
      color: ${colors.memberCardFieldKey};
      text-transform: uppercase;
    }
  }

  .footer {
    padding: 10px;
    border-top: 1px solid ${colors.memberCardFooterBorder};
    text-align: center;
    }
  }
`;

const StyledMessageInput = styled.input`
  background-color: #36393f;
  color: hsla(0, 0%, 100%, 0.7);

  padding: 8px 10px;
  border: 1px solid #23262a;
  border-radius: 3px;
  font-size: 0.9em;
  width: 100%;
  height: 36px;
`;

const MemberCard = ({ member, guildRolesList }) => (
  <StyledMemberCard isPlaying={!!member.activity}>
    <div className="header">
      <div className="user-data">
        <UserAvatar className="avatar-wrapper" avatarUrl={member.avatar} isBig>
          <div className="view-profile">View Profile</div>
        </UserAvatar>

        <div className="username">
          {member.username}
          <span className="tag">#{member.tag}</span>
        </div>
      </div>

      {member.activity && <GameActivity activity={member.activity} />}
    </div>

    <div className="content">
      {member.roles && (
        <React.Fragment>
          <div className="field-key roles-key">
            {member.roles.length > 0 ? 'Roles' : 'No Roles'}
          </div>
          <div className="field-value roles">
            <MemberRolesList rolesList={guildRolesList} memberRoles={member.roles} />
          </div>
        </React.Fragment>
      )}
    </div>

    <div className="footer">
      <StyledMessageInput placeholder={`Message @${member.username}`} />
    </div>
  </StyledMemberCard>
);

export default MemberCard;
