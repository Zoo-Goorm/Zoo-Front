export interface UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
  job: string;
  occupation: string;
  interestCategory: string;
  online: boolean;
}

export interface PaymentRequest {
  itemName: string;
  totalAmount: number;
  quantity: number;
  sessionIds: number[];
  userInfo: UserInfo;
}
