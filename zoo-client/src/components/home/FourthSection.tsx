import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';

import { InsightCard, OblongButton } from '@/components';
import { onboardingInsights } from '@/mock/onboarding';

export default function FourthSection() {
  const router = useRouter();

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
      <div className="w-[18rem]">
        <OblongButton
          size="l"
          text="인사이트 노트 보러가기"
          $buttonStyle="primary"
          onClick={() => router.push('/insight-notes')}
        />
      </div>
    </section>
  );
}
