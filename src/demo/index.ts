import { v4 as uuid } from 'uuid';

// import { generateGradient } from '../helpers/colorGenerator';
import { IDialog } from '../types/dialog';
import { IMessage } from '../types/message';

// https://source.unsplash.com/1600x900/?user
// https://source.unsplash.com/1600x900/?girl
// https://source.unsplash.com/1600x900/?women
// https://source.unsplash.com/500x500/?women
// https://source.unsplash.com/500x500/?men

// const gradients = {
//   blue: 'linear-gradient(135deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)',
// };

// export const gradientArr = {
//   red: generateGradient('#ff0000'),
//   blue: generateGradient('#0059ff'),
//   green: generateGradient('#00ff40'),
//   orange: generateGradient('#ff9100'),
//   yellow: generateGradient('#ffe600'),
// };

const audioLink = {
  intro: 'https://notificationsounds.com/storage/sounds/file-sounds-1208-message-with-intro.mp3',
  funny: 'https://notificationsounds.com/storage/sounds/file-c2_men-laughing.mp3',
  vuvuzela: 'https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3',
  jahKhalib:
    'https://fine.sunproxy.net/file/RExvazNlYXVIMTR0UWQ0MlBtdk81TGkzNElTMHFoUGlDeWY3YVpLQmVYQTFMNUh5RVUyWUVqQVU2YUxZMXJldlFTVEVwdkZGS0R4NkcvWTNCaEcvaElGcFZkREpuQ2orTmp5R2xldU1zdk09/Jah_Khalib_-_Iskal-Nashyol_(Pesni.CC).mp3',
};

const avatars = {
  shant:
    'https://sun9-35.userapi.com/impg/K69YE9VC_S6AFwWCCtRDB9IwAiJz0XzbE5775Q/uj40Jf8s4QQ.jpg?size=811x1080&quality=96&sign=e6080edccb338df031fbe572fc57218c&type=album',
  ninja: 'https://avatars.githubusercontent.com/u/34574810?s=200&v=4',
};

const dialogsArr: IDialog[] = [
  {
    _id: uuid(),
    fullName: 'Anahit Petrosyan',
    isOnline: true,
    message: {
      _id: uuid(),
      text: 'Knik',
      isRead: false,
      created_at: '2021-04-30T00:26:00.381Z',
      user: {
        _id: uuid(),
        fullName: 'Anahit Petrosyan',
        avatar:
          'https://images.unsplash.com/photo-1592621385645-e41659e8aabe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNDgyNDEz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      },
    },
    unreadCount: 100,
  },
  {
    _id: uuid(),
    fullName: 'Gurgen Mahari',
    isOnline: false,
    message: {
      _id: uuid(),
      text: 'Plane tur, plane, plane tur, plane trchir tur, plane tur',
      isRead: false,
      created_at: '2021-05-30T00:26:00.381Z',
      user: {
        _id: uuid(),
        fullName: 'Shant Sargsyan',
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/5/5d/%D4%B3%D5%B8%D6%82%D6%80%D5%A3%D5%A5%D5%B6_%D5%84%D5%A1%D5%B0%D5%A1%D6%80%D5%AB.jpg',
      },
    },
    unreadCount: 400,
  },
  {
    _id: uuid(),
    fullName: 'Hakob Karapetyan',
    isOnline: false,
    message: {
      _id: uuid(),
      text: 'Et gorcere vonc petqa arvi? Et gorcere vonc petqa arvi?',
      isRead: false,
      created_at: '2021-05-30T05:10:06.695Z',
      user: {
        _id: uuid(),
        fullName: 'Hakob Karapetyan',
        avatar: 'https://source.unsplash.com/500x500/?random=212&girl,face',
      },
    },
    unreadCount: 400,
  },
  {
    _id: uuid(),
    fullName: 'Hakob Karapetyan',
    isOnline: false,
    message: {
      _id: uuid(),
      text: 'Et gorcere vonc petqa arvi? Et gorcere vonc petqa arvi?',
      isRead: false,
      created_at: '2010-02-30T00:46:00.381Z',
      user: {
        _id: uuid(),
        fullName: 'Hakob Karapetyan',
        avatar: 'https://source.unsplash.com/500x500/?random=2&men',
      },
    },
    unreadCount: 400,
  },
  {
    _id: uuid(),
    fullName: 'Aksel Bakunc',
    isOnline: true,
    message: {
      _id: uuid(),
      text: 'Es chat em sarqum!!! Es chat em sarqum!!! Es chat em sarqum!!!',
      isRead: true,
      created_at: '2021-05-30T13:40:25.796Z',
      user: {
        _id: uuid(),
        fullName: 'Shant Sargsyan',
        avatar: 'https://i0.wp.com/nashasreda.ru/wp-content/uploads/2015/06/Aksel-Bakunts.jpg?fit=325%2C400&ssl=1',
      },
    },
    unreadCount: 3,
  },
];

// {
//   _id: uuid(),
//   fullName: 'Anahit Petrosyan',
//   isOnline: true,
//   message: {
//     _id: uuid(),
//     text: 'Anul',
//     isRead: false,
//     created_at: '2021-04-30T00:26:00.381Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Anahit Petrosyan',
//       avatar:
//         'https://images.unsplash.com/photo-1592621385645-e41659e8aabe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNDgyNDEz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
//     },
//   },
//   unreadCount: 100,
// },
// {
//   _id: uuid(),
//   fullName: 'Gurgen Mahari',
//   isOnline: false,
//   message: {
//     _id: uuid(),
//     text: 'Plane tur, plane, plane tur, plane trchir tur, plane tur',
//     isRead: false,
//     created_at: '2021-05-30T00:26:00.381Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Shant Sargsyan',
//       avatar:
//         'https://upload.wikimedia.org/wikipedia/commons/5/5d/%D4%B3%D5%B8%D6%82%D6%80%D5%A3%D5%A5%D5%B6_%D5%84%D5%A1%D5%B0%D5%A1%D6%80%D5%AB.jpg',
//     },
//   },
//   unreadCount: 400,
// },
// {
//   _id: uuid(),
//   fullName: 'Ann Sargsyan',
//   isOnline: true,
//   message: {
//     _id: uuid(),
//     text: 'Knik',
//     isRead: true,
//     created_at: '2021-05-31T17:26:00.381Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Shant Sargsyan',
//       avatar:
//         'https://images.unsplash.com/photo-1460904577954-8fadb262612c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=1600&h=1600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyNDgyNTg4&ixlib=rb-1.2.1&q=150&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source',
//     },
//   },
//   unreadCount: 0,
// },
// {
//   _id: uuid(),
//   fullName: 'Hakob Karapetyan',
//   isOnline: false,
//   message: {
//     _id: uuid(),
//     text: 'Et gorcere vonc petqa arvi? Et gorcere vonc petqa arvi?',
//     isRead: false,
//     created_at: '2021-05-30T05:10:06.695Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Hakob Karapetyan',
//       avatar: 'https://source.unsplash.com/500x500/?random=2&men',
//     },
//   },
//   unreadCount: 400,
// },
// {
//   _id: uuid(),
//   fullName: 'Hakob Karapetyan',
//   isOnline: false,
//   message: {
//     _id: uuid(),
//     text: 'Et gorcere vonc petqa arvi? Et gorcere vonc petqa arvi?',
//     isRead: false,
//     created_at: '2010-02-30T00:46:00.381Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Hakob Karapetyan',
//       avatar: 'https://source.unsplash.com/500x500/?random=2&men',
//     },
//   },
//   unreadCount: 400,
// },
// {
//   _id: uuid(),
//   fullName: 'Aksel Bakunc',
//   isOnline: true,
//   message: {
//     _id: uuid(),
//     text: 'Es chat em sarqum!!! Es chat em sarqum!!! Es chat em sarqum!!!',
//     isRead: true,
//     created_at: '2021-05-30T13:40:25.796Z',
//     user: {
//       _id: uuid(),
//       fullName: 'Shant Sargsyan',
//       avatar: 'https://i0.wp.com/nashasreda.ru/wp-content/uploads/2015/06/Aksel-Bakunts.jpg?fit=325%2C400&ssl=1',
//     },
//   },
//   unreadCount: 3,
// },

const chatMessagesArr: IMessage[] = [
  {
    _id: uuid(),
    user: { fullName: 'Shant Sargsyan' },
    // avatar: avatars.shant,
    avatar: '',
    date: '2021-05-31T19:00:12.358Z',
    text: audioLink.vuvuzela,
    isMe: true,
    isRead: true,
  },
  {
    _id: uuid(),
    user: { fullName: 'Shant' },
    avatar: avatars.shant,
    date: '2021-05-31T20:00:12.358Z',
    audio: audioLink.intro,
    isMe: true,
    isRead: true,
  },
  {
    _id: uuid(),
    user: { fullName: 'Ninja' },
    avatar: avatars.ninja,
    date: '2021-05-31T22:00:12.358Z',
    text: audioLink.vuvuzela,
    attachments: [
      {
        filename: 'image',
        url: 'https://source.unsplash.com/500x500/?random=10&nature,water',
      },
      // {
      //   filename: 'image',
      //   url: 'https://source.unsplash.com/500x500/?random=11&nature,water',
      // },
    ],
    isMe: false,
    isRead: false,
  },
  {
    _id: uuid(),
    user: { fullName: 'Shant' },
    avatar: avatars.shant,
    date: '2021-05-31T20:00:12.358Z',
    audio: audioLink.jahKhalib,
    isMe: false,
    isRead: true,
  },
];

// {
//   _id: uuid(),
//   user: { name: 'Shant' },
//   text: 'Barev',
//   avatar: avatars.me,
//   date: '2021-04-29T10:22:12.358Z',
//   attachments: [
//     {
//       filename: 'image',
//       url: 'https://source.unsplash.com/500x500/?random=10&nature,water',
//     },
//   ],
//   isMe: true,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   text: 'Barev barev Shant jan',
//   avatar: avatars.with,
//   date: '2021-05-31T10:25:12.358Z',
//   isMe: false,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   text: 'Barev barev Shant jan',
//   avatar: avatars.with,
//   date: '2021-04-29T10:25:12.358Z',
//   isMe: false,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   text: 'inch ka? inch es anum?',
//   avatar: avatars.with,
//   date: '2021-05-29T10:32:12.358Z',
//   isMe: false,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Shant' },
//   text: 'Chat em sarqum axpers 😁',
//   avatar: avatars.me,
//   date: '2021-05-29T10:33:12.358Z',
//   isMe: true,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   text: 'Ha shat lav gorci es 👍 misht araj',
//   avatar: avatars.with,
//   date: '2021-05-29T10:37:12.358Z',
//   attachments: [
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=11ature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=22&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=33&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=44&nature,water' },
//   ],
//   isMe: false,
//   isRead: true,
// },
// {
//   _id: uuid(),
//   user: { name: 'Shant' },
//   text: 'Abris axpers 😉',
//   avatar: avatars.me,
//   date: '2021-05-29T10:40:12.358Z',
//   isMe: true,
//   isRead: false,
// },
// {
//   _id: uuid(),
//   user: { name: 'Shant' },
//   text: 'Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev ',
//   avatar: avatars.me,
//   date: '2021-05-29T10:43:12.358Z',
//   attachments: [
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=1&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=2&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=3&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=4&nature,water' },
//   ],
//   isMe: true,
//   isRead: false,
// },
// {
//   _id: uuid(),
//   user: { name: 'Shant' },
//   text: 'Ha ha ha',
//   avatar: avatars.me,
//   date: '2021-05-29T11:00:43.552Z',
//   attachments: [
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=5&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=6&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=7&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=8&nature,water' },
//   ],
//   isMe: true,
//   isRead: false,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   avatar: avatars.with,
//   date: '2021-05-29T23:00:00.943Z',
//   attachments: [{ filename: 'image', url: 'https://source.unsplash.com/500x500/?random=50&nature,water' }],
//   isMe: false,
//   isRead: false,
//   isTyping: false,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   avatar: avatars.with,
//   date: '2021-05-29T23:10:00.943Z',
//   attachments: [
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=60&nature,water' },
//     { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=70&nature,water' },
//   ],
//   isMe: false,
//   isRead: true,
//   isTyping: false,
// },
// {
//   _id: uuid(),
//   user: { name: 'Ninja' },
//   avatar: avatars.with,
//   isMe: false,
//   isRead: false,
//   isTyping: true,
// },

const demo = { dialogsArr, chatMessagesArr };

export default demo;
