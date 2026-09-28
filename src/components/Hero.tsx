import Header from './Header';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a0f0f]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/qugyphlv/video/upload/v1789004461/Hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom transition into cream background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-brand-cream" />

      {/* Header (fixed, transparent over hero) */}
      <Header />
    </section>
  );
}
