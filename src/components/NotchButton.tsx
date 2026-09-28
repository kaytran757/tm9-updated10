import type { CSSProperties, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  href: string;
  children: ReactNode;
  size?: Size;
  /** true = nút rộng full chiều ngang (menu mobile) */
  block?: boolean;
  /** class cho phần bọc ngoài — dùng để căn lề (mt-6, self-start...) */
  className?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

/** Mặt nạ cắt 4 góc lõm (kiểu vé). r = bán kính lõm, off = độ lệch tâm để đường viền đều nhau. */
function notchMask(r: number, off = 0): CSSProperties {
  const stop = `transparent ${r - 0.5}px, #000 ${r}px`;
  const o = `${off}px`;
  const mask = [
    `radial-gradient(circle at -${o} -${o}, ${stop}) top left / 51% 51% no-repeat`,
    `radial-gradient(circle at calc(100% + ${o}) -${o}, ${stop}) top right / 51% 51% no-repeat`,
    `radial-gradient(circle at -${o} calc(100% + ${o}), ${stop}) bottom left / 51% 51% no-repeat`,
    `radial-gradient(circle at calc(100% + ${o}) calc(100% + ${o}), ${stop}) bottom right / 51% 51% no-repeat`,
  ].join(', ');
  return { WebkitMask: mask, mask };
}

const SIZES: Record<Size, { text: string; r: number }> = {
  sm: { text: 'px-5 py-2.5 text-sm font-semibold', r: 7 },
  md: { text: 'px-6 py-3 text-sm font-bold', r: 8 },
  lg: { text: 'min-h-[48px] px-8 py-4 text-base font-bold', r: 9 },
};

/**
 * Nút CTA hình bảng vé: 4 góc lõm + đường viền vàng đồng mảnh chạy theo hình dạng bên trong.
 * Bóng đổ đặt ở lớp bọc ngoài (drop-shadow) để không bị mặt nạ cắt mất.
 */
export default function NotchButton({
  href,
  children,
  size = 'lg',
  block = false,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
}: Props) {
  const { text, r } = SIZES[size];
  const inset = 4; // khoảng cách từ mép ngoài tới đường viền trong

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`group relative drop-shadow-[0_6px_10px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
        block ? 'flex w-full' : 'inline-flex'
      } ${className}`}
    >
      {/* lớp ngoài: nền vàng, 4 góc lõm */}
      <span
        className={`relative bg-brand-gold text-brand-brown transition-colors duration-300 group-hover:bg-brand-gold-deep group-hover:text-white ${
          block ? 'flex w-full' : 'inline-flex'
        }`}
        style={notchMask(r)}
      >
        {/* đường viền mảnh: lớp màu viền + lớp nền thụt 1px (cùng cách làm với thẻ OrnamentTag) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bg-brand-gold-deep/70 transition-colors duration-300 group-hover:bg-brand-gold-light/70"
          style={{ inset, ...notchMask(r + inset, inset) }}
        >
          <span
            className="absolute bg-brand-gold transition-colors duration-300 group-hover:bg-brand-gold-deep"
            style={{ inset: 1, ...notchMask(r + inset + 1, inset + 1) }}
          />
        </span>

        <span className={`relative z-10 inline-flex items-center justify-center text-center font-sans ${block ? 'w-full' : ''} ${text}`}>
          {children}
        </span>
      </span>
    </a>
  );
}
