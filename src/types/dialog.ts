export interface IDialog {
  id: string;
  user: {
    fullName: string;
    avatar: string | null;
    isOnline: boolean;
  };
  message: {
    senderName: string;
    text: string;
    isRead: boolean;
    created_at: Date | string;
  };
  unreadCount: number;
}
