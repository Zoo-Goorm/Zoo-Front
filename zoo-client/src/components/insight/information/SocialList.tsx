export default function SocialList({ linkUrls }: { linkUrls: string[] }) {
  return (
    <div className="flex w-1/2 flex-col gap-8">
      {linkUrls.map((link, index) => (
        <a href={link} key={index} className="overflow-hidden">
          <p className="h-7 text-text-sub">🔗 {link}</p>
        </a>
      ))}
    </div>
  );
}
