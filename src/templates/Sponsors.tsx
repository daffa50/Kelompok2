import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Sponsors"
    description="Beberapa Sponsors yang mendukung PT Kasur Aneka Busa."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
              target="_blank"
            >
              <Image
                src="/assets/images/Shop1.jpg"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
              target="_blank"
            >
              <Image
                src="/assets/images/Shop2.jpg"
                alt="CodeRabbit"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <Image
                src="/assets/images/Shop3.jpg"
                alt="Sentry"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://launch.arcjet.com/Q6eLbRE" target="_blank">
              <Image
                src="/assets/images/Shop4.jpg"
                alt="Arcjet"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://l.crowdin.com/next-js" target="_blank">
              <Image
                src="/assets/images/Shop5.jpg"
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextjs-boilerplate.com/pro-saas-starter-kit">
              <Image
                src="/assets/images/Shop6.jpg"
                alt="Next.js Boilerplate SaaS"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
