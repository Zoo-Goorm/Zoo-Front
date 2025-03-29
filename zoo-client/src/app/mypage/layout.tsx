import { Footer, NavigationBar } from '@/components';
import { ReactNode } from 'react';

export default function Layout({
  content,
  sidebar,
}: {
  content: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-between gap-60 bg-bg-primary text-text-main">
      <NavigationBar />
      <div className="flex max-w-full gap-5">
        {sidebar}
        <div className="w-[1030px]">{content}</div>
      </div>
      <Footer />
    </div>
  );
}
