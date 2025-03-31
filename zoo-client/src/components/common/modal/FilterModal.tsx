import { Badge } from '@/components';

import ModalContainer from './Layout/ModalContainer';
import ModalHeader from './Layout/ModalHeader';
import useModalStore from '@/store/common/useModalStore';
import { useGetTicket } from '@/hooks/session/useReservation';
import { UserTicket } from '@/types/ticket/ticket';
import Image from 'next/image';
import { useFilterStore } from '@/store/common/useFilterStore';

interface SessionSNBProps {
  name: string;
  id: number;
}

const SessionListItems = ({ name, id }: SessionSNBProps) => {
  const { selectedInsights, setSelectedInsights } = useFilterStore();

  return (
    <li
      onClick={() => setSelectedInsights(id)}
      className="flex cursor-pointer items-center gap-3 py-3"
    >
      <Image
        src={`${selectedInsights.has(id) ? '/button/check-icon.svg' : '/button/uncheck-icon.svg'}`}
        alt="check-icon"
        height={28}
        width={28}
      />
      <span
        className={`${selectedInsights.has(id) && 'text-text-primary'} h-[20px]`}
      >
        {name}
      </span>
    </li>
  );
};

function ModalBody() {
  const { data: tickets = {} as UserTicket } = useGetTicket();
  const registeredSessions = tickets.registeredSessions;
  const sessions = Object.values(registeredSessions).flatMap(
    (registeredSessions) =>
      registeredSessions.map(({ sessionName, sessionId }) => ({
        name: sessionName,
        id: sessionId,
      })),
  );

  return (
    <div className="flex w-[100%] flex-col items-start justify-center gap-16">
      <div className="flex max-h-[350px] flex-1 flex-col items-start gap-16 overflow-hidden">
        <Badge text="Sessions" type="default" />
        <ul className="body-sb-16 w-full text-text-main scrollbar-hidden">
          {sessions.map((session, index) => (
            <SessionListItems key={index} {...session} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FilterModal() {
  const { closeModal } = useModalStore();

  return (
    <ModalContainer>
      <ModalHeader headerText="Filter" closeModal={closeModal} />
      <ModalBody />
    </ModalContainer>
  );
}
