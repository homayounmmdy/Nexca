import SiteConfig from "@nexca/config";
import { Container, PageHeader } from "@nexca/ui";
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { Link } from "react-router";
import { SectionHeader } from "./components/SectionHeader";
import { TechCard } from "./components/TechCard";
import { sections, technologies } from "./content";

const partnerLogos = [SiNextdotjs, SiReact, SiVercel, SiTailwindcss, SiMongodb];

const AboutPage = () => (
  <>
    <PageHeader
      title="About Nexca"
      description="Elevating your digital presence with elegant solutions and seamless experiences."
    />

    <Container className="py-16 mt-4">
      {/* Intro */}
      <section className="mb-20">
        <p className="text-xl font-light leading-relaxed max-w-none">
          Welcome to{" "}
          <Link
            to={SiteConfig.siteURL}
            className="font-medium text-indigo-700 transition-colors hover:text-indigo-800"
          >
            {SiteConfig.name}
          </Link>
          , where innovation meets elegance. Our platform empowers you to create
          and manage sophisticated blog websites with unparalleled ease through
          our intuitive admin panel. Experience digital publishing reimagined.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-20">
        <SectionHeader {...sections.mission} />
        <p className="text-lg max-w-none">
          At {SiteConfig.name}, we believe that digital sophistication should be
          accessible to all. Our mission is to democratize web publishing by
          providing powerful tools that require no coding knowledge, while
          delivering results that exude professionalism and refinement.
          We&apos;re committed to empowering creators with technology that works
          as seamlessly as it looks.
        </p>
      </section>

      {/* Technologies */}
      <section className="mb-20">
        <SectionHeader {...sections.tech} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mb-20">
        <SectionHeader {...sections.partners} />
        <p className="text-lg mb-8">
          We&apos;ve forged strategic partnerships with industry innovators to
          deliver a platform that stands at the forefront of web technology.
          These collaborations allow us to offer you tools and services that are
          not just current, but visionary.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 grayscale opacity-70 hover:opacity-90 transition-opacity">
          {partnerLogos.map((Icon, i) => (
            <Icon key={i} className="h-12 w-12" aria-hidden />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl bg-base-200 p-8 lg:p-12 shadow-sm">
        <SectionHeader {...sections.contact} />
        <p className="text-lg mb-6">
          Our dedicated team of specialists is ready to assist you on your
          digital journey. Whether you have inquiries about our platform or need
          personalized support, we&apos;re committed to providing timely and
          thoughtful assistance.
        </p>
      </section>
    </Container>
  </>
);

export default AboutPage;
