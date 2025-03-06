type TBadgeType = 'fullBooking' | 'subject' | 'default';

export interface IBadgeProps {
  text: string;
  type: TBadgeType;
}

export interface Badge {
  name: string;
  type: TBadgeType;
}

export interface IBadgeListProps {
  badgeList: Badge[];
}
