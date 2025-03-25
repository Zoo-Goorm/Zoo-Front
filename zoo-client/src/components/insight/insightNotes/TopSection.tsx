import PopularInsightSection from './PopularInsightSection';
import TitleSection from './TitleSection';

export default function TopSection() {
  return (
    <div className="flex flex-col items-center gap-60">
      <TitleSection />
      <div className="flex flex-col justify-center gap-80">
        <PopularInsightSection />
      </div>
    </div>
  );
}
