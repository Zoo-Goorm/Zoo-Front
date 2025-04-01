import { IProfile } from '@/types/insight/insightProfile';
import ModalContainer from './Layout/ModalContainer';
import useModalStore from '@/store/common/useModalStore';
import ModalHeader from './Layout/ModalHeader';
import Profile from '@/components/insight/information/Profile';

const ModalBody = ({ profile }: IProfile) => {
  return <Profile profile={profile} type="profile" />;
};

export default function ProfileModal({ profile }: IProfile) {
  const { closeModal } = useModalStore();
  return (
    <ModalContainer>
      <ModalHeader closeModal={closeModal} />
      <ModalBody profile={profile} />
    </ModalContainer>
  );
}
