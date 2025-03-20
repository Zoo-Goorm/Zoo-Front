import Image from 'next/image';

export default function InsightCarousel({ images }: { images: string[] }) {
  return (
    <div className="flex gap-2 py-2">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={80}
          height={80}
          alt={`${index}-image`}
          className="rounded-md border-2 border-text-thirary"
        />
      ))}
    </div>
  );
}
