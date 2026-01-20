import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Rasakan tidur yenyak sectiey malam."
      subtitle="Mulai Uji Coba Gratis Anda."
      button={
        <Link href="https://www.indonetwork.co.id/k/kasur">
          <Button>Mulai Sekarang</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
