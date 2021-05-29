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
  isMe: boolean;
  isRead: boolean;
  text: string;
  avatar: string;
  date: Date | string;
  attachments?: {
    filename: string;
    url: string;
  }[];
}

const chatMessages: IMessage[] = [
  {
    id: 1,
    user: { name: 'Shant' },
    isMe: true,
    isRead: true,
    text: 'Barev',
    avatar: avatars.me,
    date: '2021-05-29T10:22:12.358Z',
    attachments: [{ filename: 'image', url: 'https://source.unsplash.com/500x500/?random=10&nature,water' }],
  },
  {
    id: 2,
    user: { name: 'Ninja' },
    isMe: false,
    isRead: true,
    text: 'Barev barev Shant jan',
    avatar: avatars.with,
    date: '2021-05-29T10:25:12.358Z',
  },
  {
    id: 3,
    user: { name: 'Ninja' },
    isMe: false,
    isRead: true,
    text: 'inch ka? inch es anum?',
    avatar: avatars.with,
    date: '2021-05-29T10:32:12.358Z',
  },
  {
    id: 4,
    user: { name: 'Shant' },
    isMe: true,
    isRead: true,
    text: 'Chat em sarqum axpers 😁',
    avatar: avatars.me,
    date: '2021-05-29T10:33:12.358Z',
  },
  {
    id: 5,
    user: { name: 'Ninja' },
    isMe: false,
    isRead: true,
    text: 'Ha shat lav gorci es 👍 misht araj',
    avatar: avatars.with,
    date: '2021-05-29T10:37:12.358Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=11ature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=22&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=33&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=44&nature,water' },
    ],
  },
  {
    id: 6,
    user: { name: 'Shant' },
    isMe: true,
    isRead: false,
    text: 'Abris axpers 😉',
    avatar: avatars.me,
    date: '2021-05-29T10:40:12.358Z',
  },
  {
    id: 7,
    user: { name: 'Shant' },
    isMe: true,
    isRead: false,
    text: 'Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev Barev ',
    avatar: avatars.me,
    date: '2021-05-29T10:43:12.358Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=1&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=2&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=3&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=4&nature,water' },
    ],
  },
  {
    id: 8,
    user: { name: 'Shant' },
    isMe: true,
    isRead: false,
    text: 'Ha ha ha',
    avatar: avatars.me,
    date: '2021-05-29T11:00:43.552Z',
    attachments: [
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=5&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=6&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=7&nature,water' },
      { filename: 'image', url: 'https://source.unsplash.com/500x500/?random=8&nature,water' },
    ],
  },
];

interface IHomeProps {}

const Home: FC<IHomeProps> = (props) => {
  return (
    <div>
      {chatMessages.map(({ id, user, isMe, isRead, text, avatar, date, attachments }) => (
        <Message
          key={id}
          user={user}
          isMe={isMe}
          isRead={isRead}
          text={text}
          avatar={avatar}
          date={date}
          attachments={attachments}
        />
      ))}
    </div>
  );
};

export default memo(Home);
