import type { ReactNode } from 'react';

/* ─── Badge nét cọ đỏ đậm (chữ trắng, viền cọ xơ 2 đầu) ─── */
const BRUSH_PATH =
  'M14.0 5.8 L21.0 6.2 L28.0 7.4 L35.0 5.9 L42.0 6.0 L49.0 6.3 L56.0 5.0 L63.0 6.0 L70.0 6.4 L77.0 6.9 L84.0 4.7 L91.0 5.4 L98.0 4.7 L105.0 7.0 L112.0 6.6 L119.0 4.5 L126.0 7.5 L133.0 7.5 L140.0 6.5 L147.0 6.4 L154.0 4.9 L161.0 4.4 L168.0 6.1 L175.0 4.6 L182.0 5.0 L189.0 5.2 L196.0 4.5 L203.0 5.9 L210.0 5.8 L217.0 7.1 L224.0 6.1 L231.0 6.4 L238.0 6.0 L245.0 6.5 L252.0 5.9 L259.0 5.3 L266.0 7.6 L273.0 7.6 L280.0 7.1 L302.5 6.0 L286.9 9.0 L289.6 12.0 L287.6 15.0 L289.7 18.0 L284.9 21.0 L288.7 24.0 L287.2 27.0 L301.6 30.0 L286.6 33.0 L285.3 36.0 L290.0 39.0 L286.0 38.3 L279.0 37.3 L272.0 38.7 L265.0 40.5 L258.0 37.7 L251.0 39.7 L244.0 37.2 L237.0 38.9 L230.0 39.0 L223.0 39.7 L216.0 37.9 L209.0 39.0 L202.0 40.7 L195.0 40.0 L188.0 38.7 L181.0 38.6 L174.0 38.6 L167.0 40.8 L160.0 37.2 L153.0 40.3 L146.0 40.7 L139.0 39.3 L132.0 40.8 L125.0 37.3 L118.0 37.9 L111.0 40.8 L104.0 39.4 L97.0 39.3 L90.0 37.4 L83.0 37.7 L76.0 38.8 L69.0 37.2 L62.0 39.4 L55.0 40.2 L48.0 38.6 L41.0 37.5 L34.0 38.0 L27.0 39.5 L20.0 37.3 L10.2 39.0 L4.8 36.0 L1.9 33.0 L-0.2 30.0 L5.1 27.0 L11.9 24.0 L14.9 21.0 L14.4 18.0 L14.4 15.0 L0.2 12.0 L9.3 9.0 L-0.5 6.0Z';

export function BrushBadge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`relative inline-flex items-center px-9 py-3 ${className}`}>
      <svg
        viewBox="0 0 300 46"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path d={BRUSH_PATH} fill="#7F1D1D" stroke="#7F1D1D" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span className="relative font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-white sm:text-base">
        {children}
      </span>
    </span>
  );
}

/* ─── Nét cọ vàng gạch chân, thon dần về 2 đầu, hơi nghiêng ─── */
export function GoldBrushUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 430 22"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-[106%] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 15 C50 11 150 8 300 6 C360 5.4 400 5 428 3.6 C405 8.5 370 10.4 330 11.6 C220 15 90 19 2 15 Z"
        fill="#F2B93B"
      />
      <path d="M40 16.5 C120 14 220 12.5 330 12.6" stroke="#E0A02B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".7" />
    </svg>
  );
}

/* ─── Vòng tròn hồng nhạt chứa icon đỏ đậm ─── */
export function IconCircle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#F6E1DD] text-[#8B1E1E] ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/* ─── Icon đặc (filled), vẽ theo bộ Material ─── */
type IconProps = { className?: string };

export function UsersIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="7.5" r="3.4" />
      <path d="M5.5 19.5c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2z" />
      <circle cx="4.6" cy="10.2" r="2.3" />
      <path d="M0.6 18.4c0-2.4 1.7-4.3 4-4.3.6 0 1.1.1 1.6.3-1.2 1.1-1.9 2.6-2 4z" />
      <circle cx="19.4" cy="10.2" r="2.3" />
      <path d="M23.4 18.4c0-2.4-1.7-4.3-4-4.3-.6 0-1.1.1-1.6.3 1.2 1.1 1.9 2.6 2 4z" />
    </svg>
  );
}

export function CapIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  );
}

export function ChartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="13" width="4.2" height="8" rx=".6" />
      <rect x="9.9" y="9" width="4.2" height="12" rx=".6" />
      <rect x="16.8" y="4.5" width="4.2" height="16.5" rx=".6" />
    </svg>
  );
}

export function ShieldIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

export function TrophyIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  );
}

export function PinIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
