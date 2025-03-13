import { activeStates } from '@/mock/activeStates';
import Radio from './Radio';

export default function RadioContent() {
  return (
    <div className="flex justify-between gap-5">
      {activeStates.map((status, i) => (
        <Radio key={i} status={status} />
      ))}
    </div>
  );
}
