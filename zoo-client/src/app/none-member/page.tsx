import { Footer, NavigationBar, NoneMemberForm } from '@/components';

export default function NoneMember() {
  return (
    <div className="flex w-[100vw] flex-col items-center gap-[6.25rem]">
      <NavigationBar />
      <NoneMemberForm />
      <Footer />
    </div>
  );
}
