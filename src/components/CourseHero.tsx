import Header from './Header';
import NotchButton from '@/components/NotchButton';
import Medallion from './Medallion';

type CourseHeroProps = {
  imageSrc: string;
  imageAlt: string;
  label: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonHref?: string;
};

export default function CourseHero({
  imageSrc,
  imageAlt,
  label,
  heading,
  paragraph,
  buttonText,
  buttonHref = 'https://zalo.me/0398519485',
}: CourseHeroProps) {
  return (
    <div className="relative">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-red">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C0A0A]/35 via-[#3C0A0A]/55 to-[#3C0A0A]/85" />
        <Header />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-brand-gold sm:text-sm">
            {label}
          </p>
          <h1 className="font-display text-4xl leading-tight text-brand-ivory sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans leading-relaxed text-white/80 sm:text-lg">
            {paragraph}
          </p>
          <NotchButton href={buttonHref} className="mt-9">
            {buttonText}
          </NotchButton>
        </div>
      </section>

      {/* Medallion straddling the bottom boundary */}
      <div className="absolute left-1/2 bottom-0 z-50 -translate-x-1/2 translate-y-1/2">
        <Medallion />
      </div>
    </div>
  );
}
