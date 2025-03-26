import Image from 'next/image';

export default function FifthSection() {
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
