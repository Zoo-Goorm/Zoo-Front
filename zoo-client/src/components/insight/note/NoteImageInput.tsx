import InsightCarousel from '@/components/common/carousel/InsightCarousel';
import { useState } from 'react';

export default function NoteImageInput({
  fileInputRef,
}: {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [images, setImages] = useState<string[]>([]);

  interface HandleImageUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleImageUpload = (e: HandleImageUploadEvent) => {
    const files = e.target.files;
    const uploadImages = Array.from(files).map((file: File) => {
      return URL.createObjectURL(file);
    });
    setImages((prevImages) => [...prevImages, ...uploadImages]);
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
      {images.length > 0 && <InsightCarousel images={images} />}
    </>
  );
}
