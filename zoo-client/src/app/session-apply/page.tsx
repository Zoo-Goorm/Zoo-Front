import { NavigationBar, Radio, Tab } from '@/components';
import { SESSION_APPLY_MESSAGES } from '@/constants/messages';

export default function SessionApply() {
  const Title = () => {
    return (
      <p className="display-b-48 text-center leading-normal text-text-main">
        {SESSION_APPLY_MESSAGES.title}
      </p>
    );
  };

  const RadioContainer = () => {
    return (
      <div className="flex size-full flex-col">
        <span className="caption-r-12 py-8 text-right text-text-sub">
          {SESSION_APPLY_MESSAGES.radioBody}
        </span>
        <div className="flex justify-between">
          <Radio status="active" />
          <Radio status="inactive" />
        </div>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center bg-bg-primary">
      <NavigationBar />
      <div className="m-[100px] flex w-full max-w-[1240px] flex-col gap-80">
        <div className="flex flex-col gap-52">
          <Title />
          <RadioContainer />
        </div>
      </div>
    </main>
  );
}
