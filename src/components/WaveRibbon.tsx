/**
 * Dải sóng đỏ (2 lớp, viền vàng mảnh) dùng để ngăn cách 2 section cùng nền kem.
 * Cùng ngôn ngữ với WaveDivider ở trang chủ nhưng là một dải băng chứ không phải mép section.
 */
export default function WaveRibbon() {
  return (
    <svg
      className="pointer-events-none block h-[64px] w-full sm:h-[80px]"
      viewBox="0 0 1440 84"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* lớp sau: đỏ sáng, lệch pha */}
      <path
        d="M0 24 C160 46 340 48 520 26 C700 4 900 6 1100 30 C1240 46 1350 40 1440 22 L1440 40 C1350 58 1240 64 1100 48 C900 24 700 22 520 44 C340 66 160 64 0 42 Z"
        className="fill-brand-red-light"
        opacity="0.75"
      />
      {/* lớp trước: đỏ đậm + 2 viền vàng */}
      <path
        d="M0 34 C180 12 360 12 540 34 C720 56 900 56 1080 34 C1240 14 1340 14 1440 30 L1440 52 C1340 36 1240 36 1080 56 C900 78 720 78 540 56 C360 34 180 34 0 56 Z"
        className="fill-brand-red"
      />
      <path
        d="M0 34 C180 12 360 12 540 34 C720 56 900 56 1080 34 C1240 14 1340 14 1440 30"
        className="fill-none stroke-brand-gold"
        strokeOpacity="0.85"
        strokeWidth="1.3"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 56 C180 34 360 34 540 56 C720 78 900 78 1080 56 C1240 36 1340 36 1440 52"
        className="fill-none stroke-brand-gold"
        strokeOpacity="0.85"
        strokeWidth="1.3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
