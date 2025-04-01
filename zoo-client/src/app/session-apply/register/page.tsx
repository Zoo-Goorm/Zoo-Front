'use client';

import {
  CardContent,
  Footer,
  NavigationBar,
  OblongButton,
  RegisterForm,
  Tab,
} from '@/components';
import { useRouter } from 'next/navigation';

export default function ConferenceRegister() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center gap-80 bg-bg-primary">
      <NavigationBar />
      <h2 className="display-b-48 text-center text-text-main">
        컨퍼런스를 완성하는 마지막 단계
      </h2>
      <div className="flex w-[100%] max-w-[77.5rem] flex-col justify-center gap-[5rem]">
        <div className="flex flex-col items-start gap-36 self-stretch">
          <div className="flex flex-col items-start gap-[2.25rem] self-stretch">
            <div className="flex flex-col justify-center gap-12 self-stretch">
              <h4 className="headline-sb-28 text-text-main">
                컨퍼런스 예약 확인
              </h4>
              <p className="body-m-16 text-text-sub">
                컨퍼런스에서 영감을 얻고 네트워크를 확장할 준비가 되셨나요?
              </p>
            </div>
            <Tab isToggleVisible={false} />
          </div>
          <div className="flex items-center gap-12 self-stretch overflow-x-auto whitespace-nowrap p-0 scrollbar-hidden">
            <CardContent />
          </div>
          <div>
            <OblongButton
              size="l"
              text="세션 수정"
              $buttonStyle="primary"
              onClick={() => router.push('/session-apply')}
            />
          </div>
        </div>
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}
