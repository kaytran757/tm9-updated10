import IntroHero from '@/components/IntroHero';
import Medallion from '@/components/Medallion';
import AboutUsSection from '@/components/AboutUsSection';
import IntroTeachersSection from '@/components/IntroTeachersSection';
import WaveRibbon from '@/components/WaveRibbon';
import PlaqueDivider from '@/components/PlaqueDivider';
import FeaturedStudentsSection from '@/components/FeaturedStudentsSection';
import ExtracurricularSection from '@/components/ExtracurricularSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function IntroductionPage() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <IntroHero />
        <div className="absolute left-1/2 bottom-0 z-50 -translate-x-1/2 translate-y-1/2">
          <Medallion />
        </div>
      </div>
      <div className="h-[130px] bg-brand-cream sm:h-[170px] md:h-[200px]" aria-hidden="true" />
      <AboutUsSection />
      {/* line break + biển hiệu giữa Giới Thiệu và Đội Ngũ Giảng Viên */}
      <div className="relative z-30 bg-brand-cream py-16 sm:py-24">
        <WaveRibbon />
        <div className="absolute inset-x-0 top-1/2">
          <PlaqueDivider hanzi="薪火相传" label="Tân hỏa tương truyền" lift={0} />
        </div>
      </div>
      <IntroTeachersSection />
      <FeaturedStudentsSection sectionId="thanh-tich-hoc-vien" enableFadeIn={false} />
      <ExtracurricularSection />
      <CtaSection enableFadeIn={false} />
      <Footer enableFadeIn={false} />
    </div>
  );
}
