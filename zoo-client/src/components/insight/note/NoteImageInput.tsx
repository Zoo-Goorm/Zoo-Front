import InsightCarousel from '@/components/common/carousel/InsightCarousel';
import { useInsightFormStore } from '@/store/common/insight/useInsightForm';
import { useEffect } from 'react';

export default function NoteImageInput({
  fileInputRef,
}: {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { images, setImages } = useInsightFormStore();

  useEffect(() => {
    console.log(images);
  }, [images]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    }
  };

  // blob으로 이미지 미리보기용 URL 생성 (화면에 표시 목적)
  const imageUrls = images?.map((file) => URL.createObjectURL(file)) || null;
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
