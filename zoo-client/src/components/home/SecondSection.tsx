import { useRouter } from 'next/navigation';
import { OblongButton } from '@/components';

export default function SecondSection() {
  const router = useRouter();

  return (
    <section className="flex h-[60rem] w-[100%] items-center justify-center">
      <div className="flex w-[66.5rem] flex-col items-center gap-48">
        <div className="flex flex-col items-center gap-24">
          <span className="body-m-20 text-center text-text-white">
            아이디어와 기술이 모이는 곳, 깊이 있는 인사이트에서 시작됩니다.
          </span>
          <p className="display-b-48 text-center text-text-white">
            {`SYNXCON 2025에서\n인간과 AI가 공존할 미래를 함께 그려보세요.`}
          </p>
        </div>
        <div className="w-[15rem]">
          <OblongButton
            size="xl"
            $buttonStyle="primary"
            text="참가권 구매하기"
            iconVisible={false}
            onClick={() => router.push('/session-schedule')}
          />
        </div>
      </div>
    </section>
  );
}
