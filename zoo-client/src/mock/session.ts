import { Session } from '@/types/session/session';

interface TimeSlot {
  timeRange: string;
  sessions: Session[];
}

interface ISessionInfo {
  [date: string]: TimeSlot[];
}
const sessionInfo: ISessionInfo = {
  '3월 10일': [
    {
      timeRange: '10:00~11:00',
      sessions: [
        {
          id: 1,
          title: 'AI 에이전트: 현재를 넘어서 미래로 (1부)',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 100,
          description:
            'AI 에이전트의 개념과 발전 과정을 정리하고, 최신 연구 동향과 기술 트렌드를 살펴 본다. ',
          location: '202호',
          speaker: {
            name: 'Pedro Domingos',
            info: '워싱턴 대학교 컴퓨터과학과 교수',
          },
        },
      ],
    },
    {
      timeRange: '11:00~12:00',
      sessions: [
        {
          id: 2,
          title: 'AI 에이전트: 현재를 넘어서 미래로 (2부)',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 95,

          description:
            'AI 에이전트의 실제 적용 사례와 산업별 활용 방안을 탐구한다.',
          location: '203호',
          speaker: {
            name: 'Pedro Domingos',
            info: '워싱턴 대학교 컴퓨터과학과 교수',
          },
        },
        {
          id: 3,
          title: 'AI와 인간의 협업',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 24,

          description:
            'AI가 인간과 협력하는 방식을 탐구하고, 실제 사례를 통해 AI의 역할과 한계를 분석한다.',
          location: '204호',
          speaker: {
            name: 'Fei-Fei Li',
            info: '스탠퍼드 대학교 교수',
          },
        },
        {
          id: 4,
          title: '생성형 AI의 윤리적 딜레마',
          keyword: ['AI 윤리', '책임 있는 개발', '미래 사회'],
          percentage: 45,

          description:
            '생성형 AI가 가져올 윤리적 문제를 짚어보고, 책임 있는 AI 개발 방향을 논의한다.',
          location: '205호',
          speaker: {
            name: 'Timnit Gebru',
            info: 'DAIR 연구소 설립자',
          },
        },
      ],
    },
    {
      timeRange: '12:00~13:00',
      sessions: [
        {
          id: 5,
          title: '딥러닝의 최신 발전',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 39,

          description:
            '딥러닝의 최근 연구 동향과 이를 활용한 혁신적인 응용 사례를 소개한다.',
          location: '206호',
          speaker: {
            name: 'Geoffrey Hinton',
            info: '토론토 대학교 명예 교수',
          },
        },
      ],
    },
  ],
  '3월 11일': [
    {
      timeRange: '11:00~12:00',
      sessions: [
        {
          id: 6,
          title: '자율 AI 시스템과 미래',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 100,

          description:
            '자율 AI 시스템의 현재 기술 수준과 미래 발전 방향을 탐색한다.',
          location: '202호',
          speaker: {
            name: 'Stuart Russell',
            info: 'UC 버클리 컴퓨터과학과 교수',
          },
        },
        {
          id: 7,
          title: 'AI와 경제: 일자리의 미래',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 98,

          description:
            'AI가 경제와 노동 시장에 미치는 영향을 분석하고, 새로운 직업의 탄생과 자동화에 대한 대비책을 논의한다.',
          location: '203호',
          speaker: {
            name: 'Erik Brynjolfsson',
            info: 'MIT 디지털 경제 연구소 소장',
          },
        },
      ],
    },
    {
      timeRange: '12:00~13:00',
      sessions: [
        {
          id: 8,
          title: '생성형 AI의 진화',
          keyword: ['글로벌', '미래 전망', '핵심 기술'],
          percentage: 56,

          description: '생성형 AI의 발전 과정과 앞으로의 가능성을 탐구한다.',
          location: '204호',
          speaker: {
            name: 'Andrej Karpathy',
            info: '테슬라 AI 총괄, 전 OpenAI 연구원',
          },
        },
      ],
    },
  ],
};

export default sessionInfo;
