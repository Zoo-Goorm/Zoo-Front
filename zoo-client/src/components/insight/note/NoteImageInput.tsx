import InsightCarousel from '@/components/common/carousel/InsightCarousel';
import { useInsightFormStore } from '@/store/common/insight/useInsightForm';
import { useEffect, useState } from 'react';

export default function NoteImageInput({
  fileInputRef,
}: {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { images, setImages } = useInsightFormStore();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    console.log(images);
    if (images && images.length > 0) {
      const urls = images.map((file) => URL.createObjectURL(file));
      setImageUrls(urls);

      return () => urls.forEach((url) => URL.revokeObjectURL(url));
    } else {
      setImageUrls([]);
    }
  }, [images]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    }
  };

  return (
    <>
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
      />
      {imageUrls && imageUrls.length > 0 && (
        <InsightCarousel images={imageUrls} />
      )}
    </>
  );
}
