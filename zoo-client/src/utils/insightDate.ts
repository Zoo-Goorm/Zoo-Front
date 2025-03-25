export function getTime(updatedAt: string) {
  const currentTime = new Date();
  const updatedTime = new Date(updatedAt);

  const differenceTime = currentTime.getTime() - updatedTime.getTime();

  const writedDays = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  const writedHours = Math.floor(differenceTime / (1000 * 60 * 60));
  const writedMinutes = Math.floor(differenceTime / (1000 * 60));

  if (writedDays > 0) return `${writedDays}일 전`;
  else if (writedHours > 0) return `${writedHours}시간 전`;

  return `${writedMinutes}분 전`;
}

export function getHasCreateTime(createdAt: string, updateAt: string) {
  const createdAtDate = new Date(createdAt);
  const updateTimeDate = new Date(updateAt);

  const differenceTime = updateTimeDate.getTime() - createdAtDate.getTime();

  const writedDays = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  const writedHours = Math.floor(differenceTime / (1000 * 60 * 60));
  const writedMinutes = Math.floor(differenceTime / (1000 * 60));

  if (writedDays > 0) return `${writedDays}일 전`;
  else if (writedHours > 0) return `${writedHours}시간 전`;

  return `${writedMinutes}분 전`;
}
