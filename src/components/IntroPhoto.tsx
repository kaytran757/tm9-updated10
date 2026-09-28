import { useState, useEffect } from 'react';
import LatticeIcon from '@/components/LatticeIcon';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Góc trang trí kiểu 回 ─── */
function CornerPlate({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-20 flex h-9 w-9 items-center justify-center border border-brand-gold/80 bg-brand-red ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21V3H21V19H7V7H17V13" />
      </svg>
    </span>
  );
}

/* ─── Ảnh giới thiệu: khi cuộn tới, ảnh "cuộn ra" từ trái sang phải như tranh cuộn ─── */
export default function IntroPhoto({
  src = 'https://res.cloudinary.com/qugyphlv/image/upload/v1789005153/hoat-dong_1.jpg',
  alt = 'Hoạt động tại ThanhMaiHSK',
  aspect = 'aspect-[11/12]',
}: {
  src?: string;
  alt?: string;
  aspect?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [done, setDone] = useState(false);

  // sau khi cuộn xong thì bỏ clip-path để các chi tiết tràn viền hiện đủ
  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => setDone(true), 1700);
    return () => window.clearTimeout(t);
  }, [visible]);

  const clipPath = done
    ? 'none'
    : visible
      ? 'inset(-100px 0px -100px -100px)'
      : 'inset(-100px 100% -100px -100px)';

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[590px] lg:ml-auto">
      <div
        className="relative [transition:clip-path_1.5s_cubic-bezier(.22,.61,.36,1)] motion-reduce:transition-none"
        style={{ clipPath }}
      >
        {/* cửa sổ hoa văn lớn, rất mờ, nằm phía sau */}
        <LatticeIcon
          tone="dark"
          className="pointer-events-none absolute -left-16 -top-20 !h-[380px] !w-[380px] opacity-[0.07]"
        />
        {/* khung lệch màu vàng đồng */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-gold-deep/60"
        />

        {/* khung đỏ + viền vàng mảnh */}
        <div className="relative bg-brand-red p-2.5 shadow-2xl shadow-black/20">
          <div className="relative overflow-hidden border border-brand-gold/70">
            <img
              src={src}
              alt={alt}
              className={`${aspect} w-full object-cover transition-transform duration-[1800ms] ease-out motion-reduce:transition-none ${
                visible ? 'scale-100' : 'scale-110'
              }`}
            />
          </div>
        </div>

        {/* hoa văn góc */}
        <CornerPlate className="-left-2.5 -top-2.5" />
        <CornerPlate className="-bottom-2.5 -right-2.5" />

        {/* bảng chữ dọc: 学以致用 = học để áp dụng */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-10 z-20 hidden border border-brand-gold bg-brand-red px-2 py-4 shadow-lg outline outline-1 -outline-offset-[3px] outline-brand-gold/50 sm:block"
        >
          <span
            className="block text-xl tracking-[0.35em] text-brand-gold"
            style={{
              writingMode: 'vertical-rl',
              fontFamily: '"Noto Serif SC","Songti SC","SimSun","Microsoft YaHei",serif',
            }}
          >
            学以致用
          </span>
        </div>

        {/* ấn triện */}
        <img
          src="https://res.cloudinary.com/qugyphlv/image/upload/v1789009070/dau-an-removebg-preview.png"
          alt="Ấn triện ThanhMaiHSK"
          className="absolute -bottom-4 -left-4 z-20 h-[80px] w-[80px] rotate-[-12deg] object-contain drop-shadow-lg"
        />
      </div>

      {/* trục cuộn chạy theo mép ảnh, mờ dần khi cuộn xong */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-3 z-30 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#4a0d0d] via-brand-gold to-[#4a0d0d] shadow-md [transition:left_1.5s_cubic-bezier(.22,.61,.36,1),opacity_.4s_ease_1.3s] motion-reduce:transition-none"
        style={{ left: visible ? '100%' : '0%', opacity: visible ? 0 : 1 }}
      />
    </div>
  );
}
