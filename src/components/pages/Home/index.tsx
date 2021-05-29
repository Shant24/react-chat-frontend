import React, { FC, memo } from 'react';

// import styles from './styles.module.scss';
import { Message } from '../../';

const avatars = {
  me: 'https://sun9-35.userapi.com/impg/K69YE9VC_S6AFwWCCtRDB9IwAiJz0XzbE5775Q/uj40Jf8s4QQ.jpg?size=811x1080&quality=96&sign=e6080edccb338df031fbe572fc57218c&type=album',
  with: 'https://avatars.githubusercontent.com/u/34574810?s=200&v=4',
};

interface IMessage {
  id: number;
  user: { name: string };
  text?: string;
  avatar: string;
  date?: Date | string;
  attachments?: {
    filename: string;
    url: string;
  }[];
  isMe: boolean;
  isRead: boolean;
  isTyping?: boolean;
}

const chatMessages: IMessage[] = [
  {
    id: 1,
    user: { name: 'Shant' },
    text: 'Barev',
    avatar: avatars.me,
    date: '2021-05-29T10:22:12.358Z',
    attachments: [{ filename: 'image', url: 'https://source.unsplash.com/500x500/?random=10&nature,water' }],
    isMe: true,
    isRead: true,
  },
  {
    id: 2,
    user: { name: 'Ninja' },
    text: 'Barev barev Shant jan',
    avatar: avatars.with,
    date: '2021-05-29T10:25:12.358Z',
    isMe: false,
    isRead: true,
  },
  {
    id: 3,
    user: { name: 'Ninja' },
    text: 'inch ka? inch es anum?',
    avatar: avatars.with,
    date: '2021-05-29T10:32:12.358Z',
    isMe: false,
    isRead: true,
  },
  {
    id: 4,
    user: { name: 'Shant' },
    text: 'Chat em sarqum axpers 😁',
    avatar: avatars.me,
    date: '2021-05-29T10:33:12.358Z',
    isMe: true,
    isRead: true,
  },
  {
    id: 5,
    user: { name: 'Ninja' },
    text: 'Ha shat lav gorci es 👍 misht araj',
    avatar: avatars.with,
    date: '2021-05-29T10:37:12.358Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=11ature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=22&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=33&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=44&nature,water' },
    ],
    isMe: false,
    isRead: true,
  },
  {
    id: 6,
    user: { name: 'Shant' },
    text: 'Abris axpers 😉',
    avatar: avatars.me,
    date: '2021-05-29T10:40:12.358Z',
    isMe: true,
    isRead: false,
  },
  {
    id: 7,
    user: { name: 'Shant' },
    text: 'Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev ',
    avatar: avatars.me,
    date: '2021-05-29T10:43:12.358Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=1&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=2&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=3&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=4&nature,water' },
    ],
    isMe: true,
    isRead: false,
  },
  {
    id: 8,
    user: { name: 'Shant' },
    text: 'Ha ha ha',
    avatar: avatars.me,
    date: '2021-05-29T11:00:43.552Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=5&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=6&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=7&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=8&nature,water' },
    ],
    isMe: true,
    isRead: false,
  },
  {
    id: 9,
    user: { name: 'Ninja' },
    avatar: avatars.with,
    date: '2021-05-29T23:00:00.943Z',
    attachments: [{ filename: 'image', url: 'https://source.unsplash.com/500x500/?random=50&nature,water' }],
    isMe: false,
    isRead: false,
    isTyping: false,
  },
  {
    id: 10,
    user: { name: 'Ninja' },
    avatar: avatars.with,
    date: '2021-05-29T23:10:00.943Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=60&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=70&nature,water' },
    ],
    isMe: false,
    isRead: true,
    isTyping: false,
  },
  {
    id: 11,
    user: { name: 'Ninja' },
    avatar: avatars.with,
    isMe: false,
    isRead: false,
    isTyping: true,
  },
];

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <div>
      {chatMessages.map(({ id, user, isMe, isRead, text, avatar, date, attachments, isTyping }) => (
        <Message
          key={id}
          user={user}
          isMe={isMe}
          isRead={isRead}
          text={text}
          avatar={avatar}
          date={date}
          attachments={attachments}
          isTyping={isTyping}
        />
      ))}
    </div>
  );
};

export default memo(Home);
