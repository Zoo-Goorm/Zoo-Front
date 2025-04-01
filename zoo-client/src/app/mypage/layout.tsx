import { ReactNode } from 'react';
import { Footer, NavigationBar } from '@/components';
import PrivatedRouter from '@/components/common/privatedRouter';

export default function Layout({
  content,
  sidebar,
}: {
  content: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <PrivatedRouter>
      <div className="m-auto flex h-screen flex-col items-center justify-between gap-60 bg-bg-primary text-text-main">
        <NavigationBar />
        <div className="flex max-w-full gap-5">
          {sidebar}
          <div className="w-[1030px]">{content}</div>
        </div>
        <Footer />
      </div>
    </PrivatedRouter>
  );
}
