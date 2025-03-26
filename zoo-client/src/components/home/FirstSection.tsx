export default function FirstSection() {
  return (
    <section className="relative flex h-[60rem] w-[100%]">
      <div className="absolute left-0 top-0 z-10 px-[11rem] py-[15rem]">
        <h1 className="logo-title">SYNXCON</h1>
        <h3 className="logo-body">2025</h3>
      </div>
      <video
        className="absolute right-0 top-[8rem] w-[70%] bg-bg-transparent mix-blend-exclusion"
        autoPlay={true}
        muted={true}
        loop={true}
        src={require('../../../public/videos/it_web.webm')}
      />
    </section>
  );
}
