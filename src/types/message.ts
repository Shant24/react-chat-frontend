export interface IMessage {
  _id: string;
  user: { fullName: string };
  text?: string;
  audio?: string;
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
