'use client';

import { Footer, NavigationBar, TopButton } from '@/components';
import PrivatedRouter from '@/components/common/privatedRouter';
import {
  GeneralInsightSection,
  TopSection,
  LoginModal,
} from '@/components/insight/insightNotes';
import useAuthStore from '@/store/common/auth/useAuthStore';

export default function Insights() {
  const { userType } = useAuthStore();

  return (
    <PrivatedRouter>
      <div className="relative m-auto flex flex-col items-center gap-60 bg-bg-primary text-text-main">
        <NavigationBar />
        <div className="flex w-[77.625rem] flex-col items-end gap-80">
          <TopSection />
          <GeneralInsightSection />
          <TopButton />
        </div>
        <Footer />
        {userType === 'noneMember' && <LoginModal />}
      </div>
    </PrivatedRouter>
  );
}
