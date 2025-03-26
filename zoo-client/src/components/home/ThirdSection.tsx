import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';

import SpeakerCard from '@/components/common/card/SpeakerCard';
import {
  onboardingSessionsBottom,
  onboardingSessionsTop,
} from '@/mock/onboarding';

export default function ThirdSection() {
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
