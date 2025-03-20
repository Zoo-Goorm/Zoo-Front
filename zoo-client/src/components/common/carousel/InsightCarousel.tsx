import { useInsightFormStore } from '@/store/common/insight/useInsightForm';
import Image from 'next/image';

export default function InsightCarousel({ images }: { images: string[] }) {
  const { removeImageItem } = useInsightFormStore();

  return (
    <div className="max-w-[880px] overflow-hidden">
      <div className="relative flex flex-nowrap gap-2 overflow-x-auto py-2">
        {images?.map((image, index) => (
          <div key={index} className="relative w-[80px] shrink-0">
            <Image
              src={image}
              width={80}
              height={80}
              alt={`${index}-image`}
              className="size-[80px] rounded-md border-2 border-text-thirary object-cover"
            />
            <button
              onClick={() => removeImageItem(index)}
              type="button"
              className="absolute right-[-7px] top-[-5px] size-6 rounded-full bg-text-error"
            >
              ⅹ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
