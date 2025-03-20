import { ISocial } from '@/types/insight/insight';
import Image from 'next/image';

export default function SocialList({ social }: ISocial) {
  const { linkedin, github, instagram, notion, threads } = social;
  return (
    <div className="flex gap-8">
      <a href={linkedin}>
        <Image
          alt="linkedin"
          width={40}
          height={40}
          src="/social/linkedin.svg"
        />
      </a>
      <a href={github}>
        <Image alt="github" width={40} height={40} src="/social/github.svg" />
      </a>
      <a href={notion}>
        <Image alt="notion" width={40} height={40} src="/social/notion.svg" />
      </a>
      <a href={instagram}>
        <Image
          alt="instagram"
          width={40}
          height={40}
          src="/social/instagram.svg"
        />
      </a>
      <a href={threads}>
        <Image alt="threads" width={40} height={40} src="/social/threads.svg" />
      </a>
    </div>
  );
}
