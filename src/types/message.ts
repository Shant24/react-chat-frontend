export interface IMessage {
  _id: string;
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
