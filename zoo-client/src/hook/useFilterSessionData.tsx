import { useMemo } from 'react';

interface SessionDateItem<T extends { keywords: string[] }> {
  timeRange: string;
  sessions: T[];
}

export default function useFilteredSessionData<
  T extends { keywords: string[] },
>(
  sessionDateData: SessionDateItem<T>[] | undefined,
  selectedChips: Set<string>,
) {
  return useMemo(() => {
    if (!sessionDateData) return [];
    if (selectedChips.size === 0) return sessionDateData;

    return sessionDateData.map((item) => {
      const filteredSessions = item.sessions.filter((session) =>
        [...selectedChips].every((chip) => session.keywords.includes(chip)),
      );

      return {
        ...item,
        sessions: filteredSessions,
      };
    });
  }, [sessionDateData, selectedChips]);
}
