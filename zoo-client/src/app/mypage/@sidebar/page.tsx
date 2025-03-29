import Link from 'next/link';

export default function SideBar() {
  const Menu = [
    {
      router: '/mypage',
      text: '내 정보',
    },
    {
      router: '/mypage/sessions',
      text: '내 세션 리스트',
    },
    {
      router: '/mypage/insights',
      text: '내 인사이트 정보',
    },
  ];
  return (
    <div className="flex h-[600px] w-[150px] flex-col gap-3 bg-bg-secondary">
      <ul className="flex flex-col gap-3">
        {Menu.map(({ router, text }, index) => (
          <li key={index} className="px-20 py-16">
            <Link href={router}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
