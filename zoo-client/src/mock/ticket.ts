import { UserTicket } from '@/types/ticket/ticket';

export const userTicket: UserTicket = {
  tickets: {
    '4월 3일': true,
    '4월 4일': false,
  },
  registeredSessions: {
    '4월 3일': [{ timeRange: '01:00~03:00', sessionId: 3 }],
  },
};
