import { fetchUpdateProfile, fetchUserProfile } from '@/services/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchUserProfile,
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateProfile,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['updateProfile'] }),
    onError: (error) =>
      console.error(`사용자 프로필을 업데이트하지 못했습니다. ${error}`),
  });
}
