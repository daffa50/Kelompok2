import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Kasur Spek Aneka Busa\n'}
            <span className="text-primary-500">PT Aneka Busa</span>
          </>
        }
        description="Karena hari berat betuh kasur yang niat."
        button={
          <Link href="https://www.indonetwork.co.id/k/kasur">
            <Button xl>Pesan Sekarang</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
