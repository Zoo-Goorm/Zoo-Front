type TBadgeType = 'fullBooking' | 'subject' | 'default';

export interface IBadgeProps {
  text: string;
  type: TBadgeType;
}
