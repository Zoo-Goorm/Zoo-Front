import { Radio } from '@/components';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
      <Radio
        status="active"
        video="https://www.youtube.com/watch?v=6JYIGclVQdw"
      />
    </div>
  );
}
