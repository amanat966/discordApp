let nextMessageId = 900;
const randomMessages = [
  'volutpat blandit aliquam etiam erat',
  'in est ante in nibh mauris cursus mattis molestie a',
  'morbi quis commodo odio aenean',
  'quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem',
  'quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna',
  'lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant',
  'tempor commodo ullamcorper a lacus vestibulum sed arcu non odio',
  'tellus mauris a diam maecenas sed enim ut sem viverra',
  'vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor',
  'felis donec et odio pellentesque diam volutpat commodo sed egestas',
  'posuere ac ut consequat semper viverra nam libero justo laoreet',
  'in egestas erat imperdiet sed euismod nisi porta lorem mollis',
];

const generateRandomMessagesFromRandomUsers = numOfMessages => {
  const messages = [];

  for (var i = 0; i < numOfMessages; i++) {
    const userId = 1 + Math.floor(Math.random() * 20);
    const rows = 1 + Math.floor(Math.random() * 3);
    for (var j = 0; j < rows; j++) {
      messages.push({
        id: nextMessageId++,
        userId,
        content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        time: '05/13/2019'
      });
    }
  }

  return messages;
};

const generateRandomMessagesFromGivenUsers = (numOfMessages, users) => {
  const messages = [];

  for (var i = 0; i < numOfMessages; i++) {
    const userId = users[Math.floor(Math.random() * users.length)];
    const rows = 1 + Math.floor(Math.random() * 3);
    for (var j = 0; j < rows; j++) {
      messages.push({
        id: nextMessageId++,
        userId,
        content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        time: '05/13/2019'
      });
    }
  }

  return messages;
};

export default {
  userId: 1,
  friendsOnlineCount: 2,
  directMessages: [
    {
      id: 333,
      userId: 2,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 2])]
    },
    {
      id: 334,
      userId: 3,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 3])]
    },
    {
      id: 335,
      userId: 4,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 4])]
    },
    {
      id: 336,
      userId: 6,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 6])]
    },
    {
      id: 337,
      userId: 12,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 12])]
    },
    {
      id: 338,
      userId: 15,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 15])]
    },
    {
      id: 339,
      userId: 9,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 9])]
    },
    {
      id: 340,
      userId: 16,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 16])]
    },
    {
      id: 341,
      userId: 14,
      messages: [...generateRandomMessagesFromGivenUsers(20, [1, 14])]
    }
  ],
  guilds: [
    {
      id: 1111,
      name: 'Main channel',
      initials: 'R',
      icon: 'https://i.postimg.cc/ZK1G6Zyg/notification-1.png',
      welcomeChannelId: 111124,
      categories: [
        {
          id: 11112,
          name: 'announcements',
          channels: [
            {
              id: 111123,
              name: 'rules',
              messages: [...generateRandomMessagesFromGivenUsers(5, [4])]
            },
            {
              id: 111124,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111125,
              name: 'showcase',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 11113,
          name: 'general',
          channels: [
            {
              id: 111133,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111134,
              name: 'c-sharp',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111135,
              name: 'libraries',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111136,
              name: 'questions',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 111137,
              name: 'non-programming',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'Maintain members',
          color: 'rgb(46, 204, 113)',
          isSeparated: true
        },
        12: {
          id: 21,
          name: 'Server Admin',
          color: 'rgb(233, 30, 99)',
          isSeparated: true
        },
        13: {
          id: 13,
          name: 'Server Moderator',
          color: 'rgb(52, 152, 219)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [] },
        { userId: 3, roles: [] },
        { userId: 4, roles: [12] },
        { userId: 5, roles: [12] },
        { userId: 6, roles: [13] },
        { userId: 7, roles: [] },
        { userId: 8, roles: [] },
        { userId: 9, roles: [] },
        { userId: 10, roles: [11] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 18, roles: [11] }
      ]
    },
    {
      id: 2222,
      name: 'Game Center',
      initials: 'MD',
      icon: 'https://i.postimg.cc/3wP1cJ35/joystick.png',
      welcomeChannelId: 222234,
      categories: [
        {
          id: 22222,
          name: 'Doorbell',
          channels: [
            {
              id: 222223,
              name: 'welcome',
              messages: [...generateRandomMessagesFromGivenUsers(3, [13])]
            },
            {
              id: 222224,
              name: 'general',
              messages: [...generateRandomMessagesFromRandomUsers(50)]
            },
          ]
        },
        {
          id: 22223,
          name: 'Info',
          channels: [
            {
              id: 222233,
              name: 'rules',
              messages: [...generateRandomMessagesFromRandomUsers(3)]
            },
            {
              id: 222234,
              name: 'hello-goodbye',
              messages: [...generateRandomMessagesFromRandomUsers(1)]
            },
            {
              id: 222235,
              name: 'announcements',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222236,
              name: 'portal',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222237,
              name: 'feedback',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 22224,
          name: 'lounges',
          channels: [
            {
              id: 222241,
              name: 'zone-1',
              messages: [...generateRandomMessagesFromRandomUsers(3)]
            },
            {
              id: 222242,
              name: 'zone-2',
              messages: [...generateRandomMessagesFromRandomUsers(50)]
            },
            {
              id: 222243,
              name: 'gamerz',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222244,
              name: 'school-help',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222245,
              name: 'sports',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222246,
              name: 'self-promo',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222247,
              name: 'squad-app',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        },
        {
          id: 22225,
          name: 'activites',
          channels: [
            {
              id: 222251,
              name: 'room-1',
              messages: [...generateRandomMessagesFromRandomUsers(3)]
            },
            {
              id: 222252,
              name: 'room-2',
              messages: [...generateRandomMessagesFromRandomUsers(50)]
            },
            {
              id: 222253,
              name: 'room-3',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222254,
              name: 'room-4',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222255,
              name: 'room-5',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222256,
              name: 'room-6',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222257,
              name: 'room-7',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            },
            {
              id: 222258,
              name: 'room-8',
              messages: [...generateRandomMessagesFromRandomUsers(30)]
            }
          ]
        }
      ],
      roles: {
        11: {
          id: 11,
          name: 'B.O.T.',
          color: '#1BB58E',
          isSeparated: true
        },
        12: {
          id: 12,
          name: 'The members',
          color: 'rgb(230, 126, 34)',
          isSeparated: true
        },
        13: {
          id: 13,
          name: 'offline',
          color: 'rgb(155, 89, 182)',
          isSeparated: true
        }
      },
      members: [
        { userId: 1, roles: [12] },
        { userId: 2, roles: [11] },
        { userId: 3, roles: [11] },
        { userId: 4, roles: [11] },
        { userId: 5, roles: [11] },
        { userId: 6, roles: [11] },
        { userId: 7, roles: [12] },
        { userId: 8, roles: [12] },
        { userId: 9, roles: [12] },
        { userId: 10, roles: [12] },
        { userId: 11, roles: [] },
        { userId: 12, roles: [] },
        { userId: 13, roles: [] },
        { userId: 14, roles: [] },
        { userId: 15, roles: [] },
        { userId: 16, roles: [] },
        { userId: 17, roles: [] },
        { userId: 18, roles: [] },
        { userId: 19, roles: [] },
        { userId: 20, roles: [] }
      ]
    }
  ],
  users: {
    1: {
      id: 1,
      username: 'LO4D.com',
      tag: 3212,
      avatar: 'https://i.postimg.cc/3NtK6tb0/discord-2.png',
      activity: {
        type: 'game',
        name: 'CS:GO',
        duration: 'for 4 hours'
      }
    },
    2: {
      id: 2,
      username: 'Dank Memer',
      tag: 3948,
      avatar: 'https://i.postimg.cc/1zYzBGz3/discord-7.png',
      activity: {
        type: 'game',
        name: 'pls help',
        duration: 'for 1 hours'
      }
    },
    3: {
      id: 3,
      username: 'GamesROB',
      tag: 5249,
      avatar: 'https://i.postimg.cc/1zYzBGz3/discord-7.png',
      activity: {
        type: 'game',
        name: 'GamesROB#3608 | gaming',
        duration: 'for 3 hours'
      }
    },
    4: {
      id: 4,
      username: 'GiveawayBOT',
      tag: 2183,
      avatar: 'https://i.postimg.cc/1zYzBGz3/discord-7.png',
      activity: {
        type: 'game',
        name: 'https://giveawaybot.pock',
        duration: 'for 43 minutes'
      }
    },
    5: {
      id: 5,
      username: 'MEE6',
      tag: 8613,
      avatar: 'https://i.postimg.cc/1zYzBGz3/discord-7.png',
      activity: {
        type: 'game',
        duration: 'for 5 hours'
      }
    },
    6: {
      id: 6,
      username: 'Welcomer',
      tag: 5485,
      avatar: 'https://i.postimg.cc/1zYzBGz3/discord-7.png',
      activity: {
        type: 'game',
        duration: 'for 17 minutes'
      }
    },
    7: {
      id: 7,
      username: 'assley',
      tag: 8007,
      avatar: 'https://i.postimg.cc/9M6Q5cZ3/discord-6.png',
      activity: {
        type: 'game',
        name: 'CS:GO',
        duration: 'for 6 hours'
      }
    },

    8: {
      id: 8,
      username: 'Austin',
      tag: 4521,
      avatar: 'https://i.postimg.cc/9M6Q5cZ3/discord-6.png',
      activity: {
        type: 'game',
        name: 'Dota 2',
        duration: 'for 49 minutes'
      }
    },
    9: {
      id: 9,
      username: 'LingLingPhoenix',
      tag: 8745,
      avatar: 'https://i.postimg.cc/9M6Q5cZ3/discord-6.png',
      activity: {
        type: 'game',
        name: 'CS:GO',
        duration: 'for 31 minutes'
      }
    },
    10: {
      id: 10,
      username: 'person',
      tag: 6547,
      avatar: 'https://i.postimg.cc/9M6Q5cZ3/discord-6.png',
      activity: {
        type: 'game',
        name: 'Fortnite',
        duration: 'for 2 hours'
      }
    },
    11: {
      id: 11,
      username: 'amanat966',
      tag: 2147,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    12: {
      id: 12,
      username: 'Amonicus',
      tag: 1427,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    13: {
      id: 13,
      username: 'baha',
      tag: 1235,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    14: {
      id: 14,
      username: 'bake',
      tag: 8524,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    15: {
      id: 15,
      username: 'Nina dance',
      tag: 7412,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    16: {
      id: 16,
      username: 'jerk it out',
      tag: 9635,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    17: {
      id: 17,
      username: 'quazar',
      tag: 8542,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    18: {
      id: 18,
      username: 'discord',
      tag: 7856,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    19: {
      id: 19,
      username: 'swetie fox',
      tag: 7894,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    },
    20: {
      id: 20,
      username: 'Danon',
      tag: 6392,
      avatar: 'https://i.postimg.cc/FRdHBYfg/discord-5.png'
    }
  }
};
