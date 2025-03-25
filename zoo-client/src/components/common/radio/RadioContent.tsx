import Radio from './Radio';

export default function RadioContent() {
  const activeStates: ('active' | 'inactive')[] = ['active', 'inactive'];

  return (
    <div className="flex justify-between gap-5">
      {activeStates.map((status, i) => (
        <Radio key={i} status={status} />
      ))}
    </div>
  );
}
