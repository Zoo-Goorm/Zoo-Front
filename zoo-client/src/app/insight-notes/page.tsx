'use client';

import { Footer, NavigationBar, TopButton } from '@/components';
import {
  GeneralInsightSection,
  TopSection,
} from '@/components/insight/insightNotes';

export default function Insights() {
  return (
    <div className="m-auto flex flex-col items-center gap-60 bg-bg-primary text-text-main">
      <NavigationBar />
      <div className="flex w-[77.625rem] flex-col items-end justify-center gap-80">
        <TopSection />
        <GeneralInsightSection />
        <TopButton />
      </div>
      <Footer />
    </div>
  );
}
