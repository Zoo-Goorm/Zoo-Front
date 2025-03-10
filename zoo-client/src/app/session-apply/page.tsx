import { NavigationBar } from '@/components';
import { SESSION_APPLY_MESSAGES } from '@/constants/messages';

export default function SessionApply() {
  const Title = () => {
    return (
      <p className="display-b-48 text-center leading-normal text-text-main">
        {SESSION_APPLY_MESSAGES.title}
      </p>
    );
  };

  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-80">
        <div className="flex flex-col gap-52">
          <Title />
        </div>
      </div>
    </main>
  );
}
