import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Kasur Nyaman untuk Tidur Berkualitas"
    description="Kasur dirancang untuk memberikan kenyamanan maksimal, menopang tubuh dengan sempurna, dan membantu meningkatkan kualitas tidur setiap malam."
  >
    <VerticalFeatureRow
      title="Empuk & Ergonomis"
      description="Kasur dibuat dengan material berkualitas yang menyesuaikan bentuk tubuh, mengurangi tekanan pada punggung, dan membuat tidur lebih nyenyak."
      image="/assets/images/kasur3.jpg"
      imageAlt="Kasur empuk dan ergonomis"
    />

    <VerticalFeatureRow
      title="Sirkulasi Udara Optimal"
      description="Desain kasur mendukung sirkulasi udara yang baik sehingga tidak panas, tetap sejuk, dan nyaman digunakan sepanjang malam."
      image="/assets/images/kasur2.jpg"
      imageAlt="Sirkulasi udara kasur"
      reverse
    />

    <VerticalFeatureRow
      title="Tahan Lama & Mudah Dirawat"
      description="Menggunakan bahan yang kuat dan awet, kasur tidak mudah kempes serta mudah dibersihkan untuk penggunaan jangka panjang."
      image="/assets/images/kasur1.jpg"
      imageAlt="Kasur tahan lama"
    />
  </Section>
);

export { VerticalFeatures };
