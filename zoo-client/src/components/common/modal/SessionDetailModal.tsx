'use client';

import { useModalStore } from '@/store/useModalStore';
import { useSessionStore } from '@/store/useSessionStore';
import ContentBadge from '../badge/ContentBadge';
import Image from 'next/image';
import PurchaseButton from '../button/PurchaseButton';
import { SESSION_SCHEDULE_MESSAGES } from '@/constants/messages';
import { useEffect } from 'react';

export default function SessionDetailModal() {
  const { isOpen, closeModal } = useModalStore();
  const { currentSession } = useSessionStore();
  const { id, title, description, keyword, percentage, location, speaker } =
    currentSession;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-bg-black/40">
      <div className="flex h-[824px] w-[736px] flex-col rounded-sm bg-bg-secondary p-32 text-text-main shadow-md">
        <div className="flex flex-col items-end">
          <Image
            alt="close-modal"
            onClick={closeModal}
            width={32}
            height={32}
            className="cursor-pointer"
            src="/button/close.svg"
          />
        </div>
        <div className="flex flex-col gap-12 py-20">
          <h1 className="headline-sb-28 text-text-main">{title}</h1>
          <p className="body-m-16-150 text-text-sub">{description}</p>
          <ContentBadge
            keyword={keyword}
            percentage={percentage}
            location={location}
          />
        </div>
        <hr className="text-divider-secondary" />
        <div className="my-40 flex gap-16">
          <Image
            src="/mock/speaker-img.svg"
            alt="speaker-img"
            className="rounded-md"
            width={312}
            height={240}
          />
          <div className="flex flex-col">
            <span className="body-sb-20">{speaker.name}</span>
            <span className="body-m-16-150">{speaker.info}</span>
          </div>
        </div>
        <hr className="text-divider-secondary" />
        <div className="flex flex-col gap-12 py-40">
          <span className="body-sb-20">세션 이력</span>
          <span className="body-m-16-150">없으면 표기 안 함</span>
        </div>
        <div>
          <PurchaseButton
            size={48}
            text={SESSION_SCHEDULE_MESSAGES.buttonModalText}
          />
        </div>
      </div>
    </div>
  );
}
