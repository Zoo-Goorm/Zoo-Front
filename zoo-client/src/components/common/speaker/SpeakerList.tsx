import Speaker from './Speaker';
import { ISpeakerList } from '@/types/speaker/speaker';

export default function SpeakerList({ speakerList }: ISpeakerList) {
  return (
    <div className="flex flex-col justify-center">
      {speakerList.map((speaker, index) => (
        <Speaker
          key={index}
          speakerName={speaker.name}
          speakerInfo={speaker.info}
        />
      ))}
    </div>
  );
}
