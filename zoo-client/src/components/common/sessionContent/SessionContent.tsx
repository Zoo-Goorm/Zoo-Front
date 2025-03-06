import { Badge } from '@/types/badge/Badge';
import BadgeList from '../badge/BadgeList';

interface ISessionContent {
  badgeList: Badge[];
  sessionTitle: string;
  sessionBody: string;
}

export default function SessionContent({
  badgeList,
  sessionTitle,
  sessionBody,
}: ISessionContent) {
  return (
    <div className="flex w-[100%] content-between items-start px-0 py-32 website:min-w-[44.6875rem]">
      <div className="flex flex-1 flex-col content-center items-start gap-[0.625rem]">
        <BadgeList badgeList={badgeList} />
        <h3 className="website:title-sb-24 mobile:title-sb-20 self-stretch text-text-main">
          {sessionTitle}
        </h3>
        <span className="website:body-m-16-150 mobile:body-m-14-150 min-w-[19.5625rem] self-stretch text-text-sub">
          {sessionBody}
        </span>
      </div>
    </div>
  );
}
