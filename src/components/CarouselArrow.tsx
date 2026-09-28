import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  direction: 'prev' | 'next';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disabled?: boolean;
  /** light = nền sáng (kem/trắng) · dark = nền tối/lightbox */
  tone?: 'light' | 'dark';
  /** class để định vị (absolute left-0 top-1/2 ...) */
  className?: string;
};

/**
 * Dải hồi văn (回纹) chạy quanh vòng tròn: 20 ô xoắn vuông nối tiếp nhau,
 * nằm giữa vòng ngoài (r=23.2) và vòng trong (r=15.6).
 */
const MEANDER =
  'M24.00 7.10 L24.00 2.40 L29.75 3.18 L28.85 6.44 L25.63 5.86 L25.78 4.17 L27.55 4.41 M29.22 7.93 L30.67 3.46 L35.90 5.97 L34.04 8.80 L31.16 7.25 L31.82 5.69 L33.43 6.47 M33.93 10.33 L36.70 6.53 L40.89 10.53 L38.24 12.64 L35.99 10.28 L37.10 9.01 L38.39 10.24 M37.67 14.07 L41.47 11.30 L44.22 16.41 L41.05 17.60 L39.64 14.66 L41.09 13.79 L41.94 15.36 M40.07 18.78 L44.54 17.33 L45.58 23.03 L42.20 23.18 L41.76 19.95 L43.41 19.57 L43.73 21.33 M40.90 24.00 L45.60 24.00 L44.82 29.75 L41.56 28.85 L42.14 25.63 L43.83 25.78 L43.59 27.55 M40.07 29.22 L44.54 30.67 L42.03 35.90 L39.20 34.04 L40.75 31.16 L42.31 31.82 L41.53 33.43 M37.67 33.93 L41.47 36.70 L37.47 40.89 L35.36 38.24 L37.72 35.99 L38.99 37.10 L37.76 38.39 M33.93 37.67 L36.70 41.47 L31.59 44.22 L30.40 41.05 L33.34 39.64 L34.21 41.09 L32.64 41.94 M29.22 40.07 L30.67 44.54 L24.97 45.58 L24.82 42.20 L28.05 41.76 L28.43 43.41 L26.67 43.73 M24.00 40.90 L24.00 45.60 L18.25 44.82 L19.15 41.56 L22.37 42.14 L22.22 43.83 L20.45 43.59 M18.78 40.07 L17.33 44.54 L12.10 42.03 L13.96 39.20 L16.84 40.75 L16.18 42.31 L14.57 41.53 M14.07 37.67 L11.30 41.47 L7.11 37.47 L9.76 35.36 L12.01 37.72 L10.90 38.99 L9.61 37.76 M10.33 33.93 L6.53 36.70 L3.78 31.59 L6.95 30.40 L8.36 33.34 L6.91 34.21 L6.06 32.64 M7.93 29.22 L3.46 30.67 L2.42 24.97 L5.80 24.82 L6.24 28.05 L4.59 28.43 L4.27 26.67 M7.10 24.00 L2.40 24.00 L3.18 18.25 L6.44 19.15 L5.86 22.37 L4.17 22.22 L4.41 20.45 M7.93 18.78 L3.46 17.33 L5.97 12.10 L8.80 13.96 L7.25 16.84 L5.69 16.18 L6.47 14.57 M10.33 14.07 L6.53 11.30 L10.53 7.11 L12.64 9.76 L10.28 12.01 L9.01 10.90 L10.24 9.61 M14.07 10.33 L11.30 6.53 L16.41 3.78 L17.60 6.95 L14.66 8.36 L13.79 6.91 L15.36 6.06 M18.78 7.93 L17.33 3.46 L23.03 2.42 L23.18 5.80 L19.95 6.24 L19.57 4.59 L21.33 4.27';

/**
 * Nút mũi tên carousel: vòng tròn viền hồi văn kiểu Trung Hoa, mũi tên ở giữa.
 * Hover thì nền chuyển vàng.
 */
export default function CarouselArrow({
  direction,
  onClick,
  label,
  disabled = false,
  tone = 'light',
  className = '',
}: Props) {
  const dark = tone === 'dark';
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;
  const line = dark ? 'stroke-brand-gold' : 'stroke-brand-red';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`group grid h-12 w-12 place-items-center drop-shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-30 sm:h-14 sm:w-14 ${className}`}
    >
      <svg viewBox="0 0 48 48" className="col-start-1 row-start-1 h-full w-full" aria-hidden="true">
        {/* nền tròn */}
        <circle
          cx="24"
          cy="24"
          r="23.2"
          strokeWidth="0.9"
          className={`transition-colors duration-300 group-hover:fill-brand-gold ${
            dark ? 'fill-black/35' : 'fill-brand-cream'
          } ${line}`}
        />
        {/* dải hồi văn */}
        <path d={MEANDER} fill="none" strokeWidth="0.85" strokeLinejoin="miter" className={line} />
        {/* 2 vòng trong */}
        <circle cx="24" cy="24" r="15.6" fill="none" strokeWidth="0.9" className={line} />
        <circle cx="24" cy="24" r="14.6" fill="none" strokeWidth="0.5" className={line} />
      </svg>
      <Icon
        className={`col-start-1 row-start-1 h-[18px] w-[18px] transition-colors duration-300 group-hover:text-brand-brown sm:h-5 sm:w-5 ${
          dark ? 'text-white' : 'text-brand-red'
        }`}
        strokeWidth={2.2}
      />
    </button>
  );
}
