import PopularInsightSection from './PopularInsightSection';
import TitleSection from './TitleSection';

export default function TopSection() {
  return (
    <div className="flex w-[100%] flex-col gap-60">
      <TitleSection />
      <div className="flex flex-col gap-80">
        <PopularInsightSection />
      </div>
    </div>
  );
}
