import { useMemo } from 'react';

interface SessionDateItem<T extends { keyword: string[] }> {
  timeRange: string;
  sessions: T[];
}

export default function useFilteredSessionData<T extends { keyword: string[] }>(
  sessionDateData: SessionDateItem<T>[] | undefined,
  selectedChips: Set<string>,
) {
  return useMemo(() => {
    if (!sessionDateData) return [];
    if (selectedChips.size === 0) return sessionDateData;

    return sessionDateData.map((item) => {
      const filteredSessions = item.sessions.filter((session) =>
        session.keyword.some((keyword) => selectedChips.has(keyword)),
      );

      return {
        ...item,
        sessions: filteredSessions,
      };
    });
  }, [sessionDateData, selectedChips]);
}
