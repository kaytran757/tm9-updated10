import type { ReactNode } from 'react';

/* ─── Nhãn nhỏ chữ hoa giãn chữ + đường kẻ mảnh phía sau ─── */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-4 font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-brand-brown/60 sm:text-xs ${className}`}
    >
      {children}
      <span className="h-px w-16 bg-brand-brown/25 sm:w-24" aria-hidden="true" />
    </p>
  );
}

/* ─── Đường kẻ đỏ ngắn ─── */
export function RedRule({ className = '' }: { className?: string }) {
  return <div className={`h-px w-16 bg-brand-red ${className}`} aria-hidden="true" />;
}

export type FeatureItem = {
  icon: ReactNode;
  /** Số nổi bật (tuỳ chọn) — hiện phía trên nhãn */
  value?: string;
  label: ReactNode;
};

const COLS = {
  3: 'grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
} as const;

/* ─── Hàng icon line + chữ, ngăn cách bằng vạch dọc mảnh ─── */
export function DividedFeatures({
  items,
  cols,
  className = '',
}: {
  items: FeatureItem[];
  cols: 3 | 4;
  className?: string;
}) {
  return (
    <ul className={`grid gap-y-8 ${COLS[cols]} ${className}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`pr-3 sm:pr-4 ${
            i === 0 ? '' : 'sm:border-l sm:border-brand-gold-deep/30 sm:pl-4 lg:pl-5'
          } ${cols === 4 && i % 2 === 1 ? 'max-sm:pl-4' : ''} ${cols === 3 && i > 0 ? 'max-sm:border-l max-sm:border-brand-gold-deep/30 max-sm:pl-3' : ''}`}
        >
          <span className="block text-brand-red" aria-hidden="true">
            {item.icon}
          </span>
          {item.value && (
            <p className="mt-4 font-display text-3xl leading-none text-[#A3161F] lining-nums sm:text-[2rem]">
              {item.value}
            </p>
          )}
          <p
            className={`font-sans text-[13px] leading-relaxed text-[#2B3641] sm:text-sm ${
              item.value ? 'mt-2' : 'mt-4'
            }`}
          >
            {item.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
