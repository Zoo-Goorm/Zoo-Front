export default function Video() {
  const video = `https://www.youtube.com/embed/8GTQD1U1upY?si=FAY0SVtoP0kUVJrQ?rel=0`;

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
