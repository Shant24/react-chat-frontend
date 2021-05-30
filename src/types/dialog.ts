export interface IDialog {
  _id: string;
  fullName: string;
  isOnline: boolean;
  message: {
    _id: string;
    text: string;
    isRead: boolean;
    created_at: Date | string;
    user: {
      _id: string;
      fullName: string;
      avatar: string | null;
    };
  };
  unreadCount: number;
}
