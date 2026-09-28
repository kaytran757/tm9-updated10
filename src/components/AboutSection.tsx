import { useRef, useState, useEffect } from 'react';
import LatticeIcon from '@/components/LatticeIcon';
import { useScrollReveal, revealClass, revealTransition } from '@/hooks/useScrollReveal';
import RoundelDivider from '@/components/RoundelDivider';
import WaveDivider from '@/components/WaveDivider';
import ChineseFrame from '@/components/ChineseFrame';
import IntroPhoto from '@/components/IntroPhoto';
import { BookOpen, BarChart3, ShieldCheck, Users } from 'lucide-react';
import { DividedFeatures, Eyebrow, RedRule } from '@/components/editorial-ui';

/* ─── Decorative divider with seal icon ─── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#BA7517]/50" />
      <LatticeIcon tone="dark" />
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#BA7517]/50" />
    </div>
  );
}

/* ─── Count-up hook (Intersection Observer, fires once) ─── */
function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start || done) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(target);
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, done, target, duration]);

  return { value, done };
}

/* ─── Stat card ─── */
function StatCard({
  target,
  suffix,
  label,
  start,
  duration,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
  duration: number;
  delay: number;
}) {
  const { value, done } = useCountUp(target, duration, start);

  return (
    <ChineseFrame
      tone="red"
      className={`group px-6 py-11 text-center shadow-xl shadow-[#BA7517]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#BA7517]/30 ${revealTransition} ${revealClass(start)}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-sans text-5xl sm:text-6xl font-extrabold text-brand-gold leading-none tracking-tight">
        {value}
        <span
          className={`inline-block transition-all duration-500 ${
            done ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          {suffix}
        </span>
      </div>

      {/* đường kẻ vàng + hình thoi */}
      <div className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold/80" />
        <span className="h-1.5 w-1.5 rotate-45 bg-brand-gold" />
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold/80" />
      </div>

      <p className="font-sans text-sm sm:text-base text-brand-ivory/85 mt-4 leading-snug">
        {label}
      </p>
    </ChineseFrame>
  );
}

/* ─── 4 điểm nổi bật ─── */
const iconCls = 'h-7 w-7 sm:h-8 sm:w-8';
const features = [
  { icon: <BookOpen className={iconCls} strokeWidth={1.4} />, label: <>Chương trình<br className="hidden sm:block" /> đào tạo bài bản</> },
  { icon: <Users className={iconCls} strokeWidth={1.4} />, label: <>Đội ngũ giảng viên tận tâm</> },
  { icon: <BarChart3 className={iconCls} strokeWidth={1.4} />, label: <>Tỷ lệ đỗ HSK cao</> },
  { icon: <ShieldCheck className={iconCls} strokeWidth={1.4} />, label: <>Môi trường học tập hiện đại</> },
];

export default function AboutSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal<HTMLDivElement>();
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gioi-thieu" className="relative overflow-hidden bg-brand-cream px-6 pb-[240px] pt-20 sm:pt-28 md:pb-[200px]">
      {/* ─── BLOCK 1: INTRODUCTION ─── */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text content — phong cách editorial, tối giản */}
          <div
            ref={textRef}
            className={`${revealTransition} ${revealClass(textVisible)}`}
          >
            <Eyebrow className="mb-6">Trung tâm tiếng Trung</Eyebrow>

            <h2 className="mb-8 font-display text-[2.75rem] font-normal leading-[1.05] tracking-tight text-[#1F2B37] sm:text-6xl lg:text-[4.25rem]">
              Giới thiệu về
              <br />
              <span className="text-[#A3161F]">ThanhMaiHSK</span>
            </h2>

            <p className="mb-10 max-w-[540px] font-sans text-base leading-[1.8] text-[#2B3641] sm:text-lg">
              Hệ sinh thái đào tạo tiếng Trung toàn diện với đội ngũ giảng viên
              chất lượng, chương trình học bài bản và môi trường học tập hiện
              đại, giúp học viên tự tin chinh phục HSK và mở rộng cơ hội tương
              lai.
            </p>

            <RedRule className="mb-8" />

            <DividedFeatures items={features} cols={4} className="max-w-[560px]" />
          </div>

          {/* Right: photo "cuộn ra" từ trái sang phải */}
          <IntroPhoto />
        </div>
      </div>

      {/* ─── BLOCK 2: DIFFERENTIATORS & STATS ─── */}
      <div ref={statsRef} className="relative z-20 mx-auto mt-24 max-w-4xl sm:mt-32">
        <GoldDivider />

        <div className="text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-[#BA7517] uppercase mb-4">
            Khác biệt trong đào tạo tiếng Trung
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-red leading-tight mb-5">
            <span className="font-sans font-extrabold tracking-tight">10</span>{' '}
            Lý Do Nên Chọn Tiếng Trung ThanhMaiHSK
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto leading-relaxed mb-14">
            ThanhMaiHSK xây dựng hệ sinh thái học tiếng Trung toàn diện, kết hợp
            giảng viên chất lượng, giáo trình chuẩn và nền tảng học tập hiện đại.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            target={15}
            suffix="+"
            label="năm phát triển"
            start={statsVisible}
            duration={1800}
            delay={0}
          />
          <StatCard
            target={100}
            suffix="K+"
            label="học viên đồng hành"
            start={statsVisible}
            duration={2000}
            delay={100}
          />
          <StatCard
            target={20}
            suffix="+"
            label="cơ sở toàn quốc"
            start={statsVisible}
            duration={1800}
            delay={200}
          />
        </div>
      </div>
      <RoundelDivider />
      <WaveDivider />
    </section>
  );
}
