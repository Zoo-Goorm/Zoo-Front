import { Footer, NavigationBar } from '@/components';
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from '@/components/home';

export default function Onboarding() {
  return (
    <div className="w-[100%] bg-custom-gradient">
      <NavigationBar $type="main" />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}
