interface Speaker {
  name: string;
  info: string;
}

interface Session {
  title: string;
  description: string;
  speaker: Speaker;
}

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
          title: 'AI 에이전트: 현재를 넘어서 미래로 (1부)',
          description:
            'AI 에이전트의 개념과 발전 과정을 정리하고, 최신 연구 동향과 기술 트렌드를 살펴 본다. 향후 5~10년간 AI 에이전트가 산업과 사회에 미칠 영향을 전망한다.',
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
          title: 'AI 에이전트: 현재를 넘어서 미래로 (2부)',
          description:
            'AI 에이전트의 실제 적용 사례와 산업별 활용 방안을 탐구한다.',
          speaker: {
            name: 'Pedro Domingos',
            info: '워싱턴 대학교 컴퓨터과학과 교수',
          },
        },
        {
          title: 'AI와 인간의 협업',
          description:
            'AI가 인간과 협력하는 방식을 탐구하고, 실제 사례를 통해 AI의 역할과 한계를 분석한다.',
          speaker: {
            name: 'Fei-Fei Li',
            info: '스탠퍼드 대학교 교수',
          },
        },
      ],
    },
    {
      timeRange: '12:00~13:00',
      sessions: [
        {
          title: '딥러닝의 최신 발전',
          description:
            '딥러닝의 최근 연구 동향과 이를 활용한 혁신적인 응용 사례를 소개한다.',
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
          title: '자율 AI 시스템과 미래',
          description:
            '자율 AI 시스템의 현재 기술 수준과 미래 발전 방향을 탐색한다.',
          speaker: {
            name: 'Stuart Russell',
            info: 'UC 버클리 컴퓨터과학과 교수',
          },
        },
        {
          title: 'AI와 경제: 일자리의 미래',
          description:
            'AI가 경제와 노동 시장에 미치는 영향을 분석하고, 새로운 직업의 탄생과 자동화에 대한 대비책을 논의한다.',
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
          title: '생성형 AI의 진화',
          description: '생성형 AI의 발전 과정과 앞으로의 가능성을 탐구한다.',
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
