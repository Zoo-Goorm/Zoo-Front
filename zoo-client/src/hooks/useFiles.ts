// import { getPresignedUrls, uploadFilesToS3 } from '@/actions/file-upload';
// import { useMutation } from '@tanstack/react-query';

// export const useGetPresignedUrls = () => {
//   return useMutation({
//     mutationFn: getPresignedUrls,
//   });
// };

// export const useUploadFilesToS3 = () => {
//   return useMutation({
//     mutationFn: ({
//       files,
//       urls,
//     }: {
//       files: File[];
//       urls: { url: string; fileName: string }[];
//     }) => uploadFilesToS3(files, urls),
//   });
// };
