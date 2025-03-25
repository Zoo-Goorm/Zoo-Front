import {
  SelectedInsightDate,
  SelectedInsightSort,
} from '@/types/insight/enum/insights';

export const selectedInsightDate: { [key: string]: string } = {
  [SelectedInsightDate.ALL]: '',
  [SelectedInsightDate.FIRST_DATE]: '2025-04-03',
  [SelectedInsightDate.SECOND_DATE]: '2025-04-04',
};

export const selectedInsightSort: { [key: string]: string } = {
  [SelectedInsightSort.LATEST]: 'latest',
  [SelectedInsightSort.LIKES]: 'likes',
};
