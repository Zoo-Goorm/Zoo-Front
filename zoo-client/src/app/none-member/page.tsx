import { Footer, NavigationBar, NoneMemberForm } from '@/components';

export default function NoneMember() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center gap-[6.25rem]">
      <NavigationBar />
      <NoneMemberForm />
      <Footer />
    </div>
  );
}
