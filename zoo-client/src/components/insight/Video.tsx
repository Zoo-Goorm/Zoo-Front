export default function Video() {
  const VideoId = '';
  const video = `https://www.youtube.com/embed/${VideoId}?autoplay=1&mute=1`;

  return (
    <iframe
      width={924}
      height={520}
      src={video}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
