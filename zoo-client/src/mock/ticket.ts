import { UserTicket } from '@/types/ticket/ticket';

export const userTicket: UserTicket = {
  tickets: {
    '4월 3일': true,
    '4월 4일': false,
  },
  registeredSessions: {
    '4월 3일': [{ timeRange: '10:00-12:00', sessionId: [1] }],
    // '4월 4일': [
    //   { timeRange: '10:00-11:00', sessionId: [4] },
    //   { timeRange: '11:00-12:00', sessionId: [2] },
    // ],
  },
};
