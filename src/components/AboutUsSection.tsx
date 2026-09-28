import IntroPhoto from '@/components/IntroPhoto';
import { MapPin, Trophy, Users } from 'lucide-react';
import { DividedFeatures, Eyebrow, RedRule } from '@/components/editorial-ui';

const iconCls = 'h-7 w-7 sm:h-8 sm:w-8';
const stats = [
  { icon: <Trophy className={iconCls} strokeWidth={1.4} />, value: '15+', label: 'năm phát triển' },
  { icon: <Users className={iconCls} strokeWidth={1.4} />, value: '100K+', label: 'học viên đồng hành' },
  { icon: <MapPin className={iconCls} strokeWidth={1.4} />, value: '20+', label: 'cơ sở toàn quốc' },
];

export default function AboutUsSection() {
  return (
    <section
      id="ve-chung-toi"
      className="relative overflow-hidden bg-brand-cream px-6 py-24 sm:py-32"
      style={{ scrollMarginTop: '88px' }}
    >
      {/* Faint calligraphy watermark */}
      <div
        className="pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] leading-none text-brand-red/[0.04] sm:text-[22rem]"
        aria-hidden="true"
      >
        信
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: text content — cùng phong cách editorial với section Giới Thiệu Về ThanhMaiHSK ở trang chủ */}
          <div>
            <Eyebrow className="mb-6">Giới thiệu</Eyebrow>

            <h2 className="mb-8 font-display text-[2.75rem] font-normal leading-[1.05] tracking-tight text-[#1F2B37] lining-nums sm:text-6xl lg:text-[4.25rem]">
              15+ Năm
              <br />
              <span className="text-[#A3161F]">Lái Đò</span>
            </h2>

            <p className="mb-10 max-w-[560px] font-sans text-base leading-[1.8] text-[#2B3641] sm:text-lg">
              ThanhMaiHSK là trung tâm đào tạo tiếng Trung toàn diện tại Việt Nam
              với 15 năm phát triển, đồng hành cùng 100.000+ học viên và mạng lưới
              20+ cơ sở trên toàn quốc. Chúng tôi xây dựng chương trình học được –
              hành ngay, phát triển toàn diện Nghe – Nói – Đọc – Viết – Dịch, phù
              hợp với người mới bắt đầu, người đi du học, đi làm và doanh nghiệp.
              Giáo trình bám sát khung năng lực tiếng Trung 6 bậc và chuẩn HSK 3.0,
              giúp học viên vừa giỏi thực chiến vừa đạt kết quả cao trong các kỳ thi
              chứng chỉ.
            </p>

            <RedRule className="mb-8" />

            <DividedFeatures items={stats} cols={3} className="max-w-[500px]" />
          </div>

          {/* Right: ảnh "cuộn ra" giống trang chủ */}
          <IntroPhoto
            src="https://res.cloudinary.com/qugyphlv/image/upload/v1789264685/team_6.jpg"
            alt="Đội ngũ ThanhMaiHSK"
            aspect="aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}
