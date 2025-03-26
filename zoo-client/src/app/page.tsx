'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRouter } from 'next/navigation';
import { Footer, InsightCard, NavigationBar, OblongButton } from '@/components';
import SpeakerCard from '@/components/common/card/SpeakerCard';
import {
  onboardingInsights,
  onboardingSessionsBottom,
  onboardingSessionsTop,
} from '@/mock/onboarding';

function FirstSection() {
  return (
    <section className="relative flex h-[60rem] w-[100%]">
      <div className="absolute left-0 top-0 z-10 px-[11rem] py-[15rem]">
        <h1 className="logo-title">SYNXCON</h1>
        <h3 className="logo-body">2025</h3>
      </div>
      <video
        className="absolute right-0 top-[8rem] w-[70%] bg-bg-transparent mix-blend-exclusion"
        autoPlay={true}
        muted={true}
        loop={true}
        src={require('../../public/videos/it_web.webm')}
      />
    </section>
  );
}

function SecondSection() {
  const router = useRouter();

  return (
    <section className="flex h-[60rem] w-[100%] items-center justify-center">
      <div className="flex w-[66.5rem] flex-col items-center gap-48">
        <div className="flex flex-col items-center gap-24">
          <span className="body-m-20 text-center text-text-white">
            아이디어와 기술이 모이는 곳, 깊이 있는 인사이트에서 시작됩니다.
          </span>
          <p className="display-b-48 text-center text-text-white">
            {`SYNXCON 2025에서\n인간과 AI가 공존할 미래를 함께 그려보세요.`}
          </p>
        </div>
        <div className="w-[15rem]">
          <OblongButton
            size="xl"
            $buttonStyle="primary"
            text="참가권 구매하기"
            iconVisible={false}
            onClick={() => router.push('/session-schedule')}
          />
        </div>
      </div>
    </section>
  );
}

function ThirdSection() {
  const router = useRouter();

  const settings = {
    dots: false,
    nextArrow: false,
    prevArow: false,
    infinite: true,
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const settings2 = {
    dots: false,
    nextArrow: false,
    prevArow: false,
    infinite: true,
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    pauseOnHover: false,
  };

  return (
    <section className="flex bg-bg-primary">
      <div className="flex w-[100%] flex-col items-center justify-center gap-40 py-[8rem]">
        <div className="flex w-[77.5rem] items-center justify-between">
          <h4 className="display-b-48 text-text-main">SYNXCON 2025 연사</h4>
          <button
            onClick={() => router.push('/session-schedule')}
            className="flex items-center gap-4 border-none"
          >
            전체 세션 보기
            <Image
              src="/button/arrow-forward.svg"
              alt="전체 세션 보러 가기"
              width={28}
              height={28}
            />
          </button>
        </div>
        <div className="w-[97%]">
          <Slider {...settings}>
            {onboardingSessionsTop.map((content) => (
              <div>
                <SpeakerCard key={content.id} content={content} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-[97%]">
          <Slider {...settings2}>
            {onboardingSessionsBottom.map((content) => (
              <div>
                <SpeakerCard key={content.id} content={content} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function FourthSection() {
  const settings = {
    centerMode: true,
    centerPadding: '2.5rem',
    dots: false,
    nextArrow: false,
    prevArow: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="flex w-[100%] flex-col items-center justify-center gap-40 bg-bg-primary px-0 py-[8rem]">
      <div className="flex flex-col items-center justify-center gap-[1.75rem] text-center">
        <p className="display-b-48 text-text-main">{`SYNXCON 2025 참가자들이 전하는\n인사이트 노트를 확인해 보세요!`}</p>
        <p className="body-m-16 text-text-sub">{`인사이트 노트를 작성한 사람들 중 연사와의 소규모 커피챗의 기회를 제공됩니다.\n당신의 인사이트 노트가 연결의 시작이 될 수 있어요.`}</p>
      </div>
      <div className="w-[97%]">
        <Slider {...settings}>
          {onboardingInsights.map((content) => (
            <div>
              <InsightCard $size="l" key={content.id} content={content} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function FifthSection() {
  return (
    <section className="flex h-[45rem] items-center justify-center bg-bg-primary pb-[8rem]">
      <div className="flex h-[25.5rem] w-[77.5rem] gap-24">
        <Image
          src="/mock/Map.png"
          alt="스타필드 코엑스 몰 지도"
          width={588}
          height={407.525}
        />
        <div className="flex flex-col justify-center gap-24 p-20">
          <div className="flex flex-col gap-8">
            <p className="body-m-16 text-text-sub">장소</p>
            <p className="body-sb-18 text-text-main">
              서울 강남구 봉은사로 524 코엑스 (COEX)
            </p>
          </div>
          <div>
            <p className="body-m-16 text-text-sub">출발 안내</p>
            <p className="body-sb-18 text-text-main">{`2F 아셈볼룸: 등록 데스크, 강연 세션\n3F 오디토리움: 강연 세션`}</p>
            <p className="body-sb-16 text-text-primary">
              *2층 등록 데스크에서 출입증을 받아주세요.
            </p>
          </div>
          <div>
            <p className="body-m-16 text-text-sub">대중교통 안내</p>
            <p className="body-sb-18 text-text-main">2호선 삼성역</p>
            <p className="body-m-16 text-text-sub">
              - 삼성역 5, 6번 출구와 직접 연결된 통로로 진입, 밀레니엄 광장을
              통하여 스타필드 코엑스몰로 진입
            </p>
            <p className="body-sb-18 text-text-main">9호선 봉은사역</p>
            <p className="body-m-16 text-text-sub">
              - 봉은사역 7번출구 직접 연결된 통로로 진입, 아셈플라자를 통하여
              스타필드 코엑스몰로 진입
            </p>
            <p className="body-sb-16 text-text-primary">
              *현장 주차 지원이 어려우니, 가급적 대중교통 이용을 권장드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Onboarding() {
  return (
    <div className="w-[100%] bg-custom-gradient">
      <NavigationBar $type="main" />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}
