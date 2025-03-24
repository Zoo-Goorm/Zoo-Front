export default function getTimeDifference(
  createdAt: string | Date,
  updateAt: string | Date,
): number {
  const createdAtDate = new Date(createdAt);
  const updateTimeDate = new Date(updateAt);

  const diffInMs = updateTimeDate.getTime() - createdAtDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  return diffInMinutes;
}
