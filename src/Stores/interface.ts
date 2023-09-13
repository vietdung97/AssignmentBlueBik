export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  displayName: string;
  described: string;
  phone: string;
  avatar: string;
  email: string;
  website: string;
  loginMethod: string;
  forgotPasswordCode?: any;
  createdAt: string;
  updatedAt: string;
  isSignup: boolean;
  token: string;
  channelName: number;
  listFollowers: { count: number; rows: IUser[] };
  listFollowing: { count: number; rows: IUser[] };
  blockedBy: IUser[];
  blocks: IUser[];
  isFollow: boolean;
  checked: boolean;
  isAdvancedUser?: boolean;
}
