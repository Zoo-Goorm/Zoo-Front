import LogoIcon from '../logo/LogoIcon';

export default function Footer() {
  return (
    <div className="flex w-[100%] flex-col gap-[2.5rem] bg-[#01012B] px-[6.25rem] py-[2.5rem]">
      <LogoIcon width="148" height="40" fill="#fff" />
      <div className="flex flex-col gap-16">
        <span className="caption-r-12 text-text-white">{`시냅스엑스(주)  |  대표이사 LEE Lalal`}</span>
        <ul className="flex items-center gap-20">
          <li className="caption-r-12 text-text-white">
            서울시 구름구 카카오로 25
          </li>
          <li className="caption-r-12 text-text-white">{`사업자등록번호  |  960-20-1993`}</li>
          <li className="caption-r-12 text-text-white">{`통신판매업 신고번호  |  제 2020-서울구름-9993호`}</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-20">
          <li className="body-r-14 text-text-white">개인정보처리방침</li>
          <li className="body-r-14 text-text-white">이용약관</li>
          <li className="body-r-14 text-text-white">
            인사이트 노트 가이드라인(법적 및 정책관련 정보)
          </li>
        </ul>
        <span className="caption-r-12 text-text-sub">
          2025 All rights reserved
        </span>
      </div>
    </div>
  );
}
