'use client';

import InsightTab from './InsightTab';
import useInsightNoteTabStore from '@/store/common/insight/useInsightNoteTabStore';

export default function InsightNoteTab() {
  const { selectedTab, toggleTab } = useInsightNoteTabStore();

  return (
    <div className="flex items-center justify-center gap-8 p-0">
      <InsightTab
        labelText="최신순"
        $isSelected={selectedTab === '최신순'}
        onTabClick={() => toggleTab('최신순')}
      />
      <div className="h-[0.875rem] w-[0.0625rem] bg-stroke-thirary" />
      <InsightTab
        labelText="좋아요순"
        $isSelected={selectedTab === '좋아요순'}
        onTabClick={() => toggleTab('좋아요순')}
      />
    </div>
  );
}
