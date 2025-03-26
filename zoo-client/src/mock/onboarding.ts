import { IOnboardingInsights } from '@/types/insight/insightCard';

export interface ISpeakerCardContent {
  id: number;
  title: string;
  keywords: string[];
  time: string;
  displayName: string;
}

export const onboardingInsights: IOnboardingInsights[] = [
  {
    id: 1,
    memo: '1. 클라우드 네이티브가 기업의 디지털 전환을 주도한다 이번 강연에서는 클라우드 네이티브가 단순한 기술 트렌드가 아니라 비즈니스 혁신의 필수 요소가 되었다는 점을 강조했다. 기존의 온프레미스 시스템에서 클라우드 네이티브 환경으로 전환하면 비용 절감, 유연한 확장성, 운영 효율성 등의 이점을 얻을 수 있다. "클라우드 네이티브 기술은 단순한 IT 변화가 아니라 기업의 비즈니스 모델 자체를 변화시키는 요소다."',
    likeCount: 657,
    commentCount: 34,
    imageUrl: '',
    displayName: '동물원',
    job: '데이터 및 인공지능/머신러닝 엔지니어',
    interestCategory: [
      '양자 컴퓨팅',
      '로보틱스/자동화',
      '스마트 모빌리티/자율주행',
    ],
  },
  {
    id: 2,
    memo: '클라우드 네이티브라는 용어는 많이 들었지만, 실제로 기업이 어떤 방식으로 도입하고 있는지에 대한 구체적인 설명이 인상 깊었다. 단순히 기술 도입이 아니라, 조직의 문화와 개발 프로세스까지 함께 바뀌어야 한다는 점이 현실적으로 와 닿았다. 특히 DevOps와 CI/CD가 클라우드 네이티브 성공의 핵심이라는 점은 실무에서도 적용해보고 싶다.',
    likeCount: 204,
    commentCount: 13,
    imageUrl: '',
    displayName: '최예지',
    job: 'IT 지원 및 운영/시스템 관리자',
    interestCategory: ['소프트웨어 개발/DevOps'],
  },
  {
    id: 3,
    memo: '이 강연에서 가장 흥미로웠던 부분은 "서버리스 환경이 스타트업에 특히 유리하다"는 설명이었다. 초기 자본이 부족한 기업들이 인프라를 최소화하면서 빠르게 MVP를 만들 수 있다는 점은 클라우드를 기술이 아닌 ‘전략’으로 바라보게 해주었다. 다만, 서버리스의 한계나 오버헤드 이슈에 대한 논의도 좀 더 있었으면 좋았을 것 같다.',
    likeCount: 20,
    commentCount: 23,
    imageUrl: '',
    displayName: '부릉부릉',
    job: '데이터 및 인공지능/빅데이터 전문가',
    interestCategory: ['생명공학/헬스테크', 'IoT(사물인터넷)/엣지 컴퓨팅'],
  },
  {
    id: 4,
    memo: `마이크로서비스와 컨테이너 기술의 관계를 명확하게 정리해준 점이 좋았다. 강연 중 실제 사례로 나온 금융사의 이야기처럼, '단일 모놀리식 구조'에서 '모듈화된 마이크로서비스'로 나아가면서 생기는 장단점이 현실적으로 느껴졌다. 클라우드 네이티브로 전환할 때 팀 구조나 배포 방식까지 함께 바꿔야 한다는 메시지가 강하게 남았다.`,
    likeCount: 333,
    commentCount: 82,
    imageUrl: '',
    displayName: '음',
    job: 'IT 기획 및 프로젝트 관리/기술 프로그램 매니저',
    interestCategory: [
      '클라우드 컴퓨팅',
      '5G/6G 네트워크',
      '인공지능(AI)/머신러닝',
    ],
  },
  {
    id: 5,
    memo: '클라우드 보안을 단순히 ‘방어’가 아닌, ‘능동적인 대응 체계’로 설명해 준 점이 매우 인상적이었다. 특히 AI 기반 이상 탐지 기술이 실제 공격을 사전에 막은 사례는 클라우드 보안의 현재 수준이 어디까지 왔는지를 잘 보여줬다. 제로 트러스트 모델이 보안 기본 원칙이 되어가는 흐름도 공감된다.',
    likeCount: 520,
    commentCount: 44,
    imageUrl: '',
    displayName: '럭키가이',
    job: '클라우드 및 인프라/네트워크 엔지니어',
    interestCategory: ['인공지능(AI)/머신러닝'],
  },
  {
    id: 6,
    memo: '이번 세션을 통해 ‘클라우드 보안은 기술보다도 전략’이라는 점을 명확히 이해했다. 강연자가 강조한 “모든 것이 코드가 되는 시대에는 보안도 코드로 정의되어야 한다”는 말이 기억에 남는다. Infrastructure as Code(IaC)와 함께 보안을 자동화하는 흐름이 앞으로 표준이 될 것이라는 점도 흥미로웠다.',
    likeCount: 999,
    commentCount: 235,
    imageUrl: '',
    displayName: '하이하이',
    job: '정보 보안/보안 감사 전문가',
    interestCategory: ['사이버 보안/개인정보 보호'],
  },
  {
    id: 7,
    memo: 'SOAR 기술이 실제로 어떻게 기업의 보안 대응 시간을 줄여주는지 사례 중심으로 설명해 준 점이 좋았다. 단순한 기술 설명을 넘어서, 보안 운영팀의 업무 효율성 향상까지 연결해준 것이 실무적으로도 와 닿았다. 다만, AI 보안의 정확도와 오탐 문제에 대한 현실적인 한계도 함께 논의되었으면 더 균형 잡힌 세션이 되었을 것 같다.',
    likeCount: 45,
    commentCount: 31,
    imageUrl: '',
    displayName: '와이',
    job: '하드웨어 및 임베디드 시스템/로보틱스 엔지니어',
    interestCategory: ['소프트웨어 개발/DevOps', '메타버스/XR(AR/VR)'],
  },
  {
    id: 8,
    memo: '클라우드 보안이 단순히 방화벽을 강화하는 것이 아니라, AI와 자동화 기술을 적극 활용해야 한다는 점이 인상적이었다. 앞으로 기업들이 클라우드 보안을 어떻게 강화할 것인지에 대한 구체적인 가이드라인이 필요할 것 같다.',
    likeCount: 999,
    commentCount: 41,
    imageUrl: '',
    displayName: '이윤정',
    job: 'UX/UI 및 디자인/서비스 디자이너',
    interestCategory: ['5G/6G 네트워크', '초개인화 서비스/AI 마케팅'],
  },
];

export const onboardingSessionsTop: ISpeakerCardContent[] = [
  {
    id: 1,
    title: 'AI 에이전트: 현재를 넘어서 미래로',
    keywords: ['글로벌', '미래 전망'],
    time: 'DAY1 10:00~11:00',
    displayName: 'Pedro Domingos',
  },
  {
    id: 2,
    title: '강화학습: AI가 스스로 배우는 법',
    keywords: ['핵심 기술', '글로벌', '미래 전망'],
    time: 'DAY1 11:00~12:00',
    displayName: 'David Silver',
  },
  {
    id: 3,
    title: 'AI 에이전트 혁명: 산업을 재편하는 지능형 시스템',
    keywords: ['글로벌', '산업 활용 사례', '비즈니스'],
    time: 'DAY1 13:00~14:30',
    displayName: 'Kai-Fu Lee',
  },
  {
    id: 4,
    title: 'AI 에이전트, 소프트웨어 개발을 혁신하다',
    keywords: ['산업 활용 사례', '미래 전망'],
    time: 'DAY1 15:30~16:30',
    displayName: '이두희',
  },
];

export const onboardingSessionsBottom: ISpeakerCardContent[] = [
  {
    id: 5,
    title: 'Edge AI와 이벤트 기반 아키텍처: 실시간 AI의 미래',
    keywords: ['심화 기술'],
    time: 'DAY2 10:00~11:00',
    displayName: '박성수',
  },
  {
    id: 6,
    title: 'AI 에이전트 시장의 기회와 도전: 스타트업과 투자 전략',
    keywords: ['산업 활용 사례', '글로벌', '비즈니스', '미래 전망'],
    time: 'DAY2 13:00~14:30',
    displayName: '김동신',
  },
  {
    id: 7,
    title: 'AI 에이전트, 금융 시장을 혁신하다',
    keywords: ['산업 활용 사례', '글로벌', '미래 전망'],
    time: 'DAY2 14:30~15:30',
    displayName: 'Markus Brunnermeier',
  },
  {
    id: 8,
    title: 'AI 에이전트와 미래 사회: 윤리, 정책/법, 지속가능성',
    keywords: ['미래 전망'],
    time: 'DAY2 15:30~16:30',
    displayName: '김명주',
  },
];
