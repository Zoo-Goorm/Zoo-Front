import Image from 'next/image';

export default function SocialList() {
  return (
    <div className="flex gap-8">
      <Image alt="github" width={40} height={40} src="/social/github.svg" />
      <Image
        alt="instagram"
        width={40}
        height={40}
        src="/social/instagram.svg"
      />
      <Image alt="linkedin" width={40} height={40} src="/social/linkedin.svg" />
      <Image alt="notion" width={40} height={40} src="/social/notion.svg" />
      <Image alt="threads" width={40} height={40} src="/social/threads.svg" />
    </div>
  );
}
