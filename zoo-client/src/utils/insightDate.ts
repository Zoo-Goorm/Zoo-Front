export function getTime(updatedAt: string) {
  const currentTime = new Date();
  const updatedTime = new Date(updatedAt);

  const differenceTime = currentTime.getTime() - updatedTime.getTime();

  if (differenceTime < 0) return '방금 전';

  const writedDays = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  if (writedDays > 0) return `${writedDays}일 전`;

  const writedHours = Math.floor(differenceTime / (1000 * 60 * 60));
  if (writedHours > 0) return `${writedHours}시간 전`;

  const writedMinutes = Math.floor(differenceTime / (1000 * 60));
  if (writedMinutes > 0) return `${writedMinutes}분 전`;

  return '방금 전';
}
