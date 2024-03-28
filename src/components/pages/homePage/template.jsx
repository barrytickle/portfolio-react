import GallerySlider from "../../global/gallerySlider/gallerySlider";
import DarkSection from "../../global/layouts/backgrounds/darkSection";
import MediaText from "../../global/mediaText/mediaText";
import SkillBlock from "../../global/skillBlocks/skillBlock";
import SkillBlocks from "../../global/skillBlocks/skillBlocks";
import SplitHeader from "../../header/splitHeader";

const headerContent = {
  title: "Hello, i'm Barry",
  subtitle:
    "I help clients to achieve their business objectives without spending large amounts of money by providing facilities like: Shared Web Hosting, Personal Bespoke Websites, Blogs, Ecommerce, Dashboard designs and SSL Certificates (in association with world's most trusted SSL providers).",
  cta: "/contact-me",
  backgroundImage: "/assets/images/portrait.png",
};

const galleryImages = [
  "/public/assets/images/portfolio-items/slt-for-kids.webp",
  "/public/assets/images/portfolio-items/oakley-and-friends.webp",
  "/public/assets/images/portfolio-items/liverpool-guitar-lessons.png",
];

function HomePage() {
  return (
    <>
      <SplitHeader content={headerContent} />
      <section className="section--large">
        <SkillBlocks>
          <SkillBlock
            icon="/public/assets/images/components/skillBlocks/seo.svg"
            title="SEO Marketer"
            content="I help your website perform well, ensuring you rank high for the right search criteria in Google."
          />
          <SkillBlock
            icon="/public/assets/images/components/skillBlocks/web-design.svg"
            title="Web Design"
            content="I design then develop bespoke websites which your visitors will love becoming purely focused on conversion."
          />
          <SkillBlock
            icon="/public/assets/images/components/skillBlocks/hosting.svg"
            title="Hosting"
            content="I help you every step of the way, giving you the option to have your domain and hosting managed for a small sum each month."
          />
        </SkillBlocks>
      </section>
      <section className="section--large">
        <div className="container">
          <MediaText media={<GallerySlider images={galleryImages} />}>
            <h2>My portfolio</h2>
            <p>
              My projects{" "}
              <span className="faded-text">
                show what I can achieve as an individual, a project should be developed with the user in mind.
              </span>
            </p>
            <hr className="large-spacing" />
            <p>
              As a web designer{" "}
              <span className="faded-text">
                user interaction is one of my main aims when visiting a website, making a website look good should only
                be the first steps of developing a system for users.
              </span>
            </p>
          </MediaText>
          <MediaText
            imagePosition="right"
            media={<img src="/public/assets/images/photography/manchester.webp" />}>
            <h2>My photography</h2>
            <p>
              Photography{" "}
              <span className="faded-text">
                has always been a huge interest of mine, I like to travel quite a lot and capturing memories of amazing
                scenery feels like more than just a hobby to me. I like being able to capture pictures of buildings at
                interesting angles which can capture the most detail. I love being able to find the history in scenery
                and monuments.
              </span>
            </p>
          </MediaText>
        </div>
      </section>
      <DarkSection additionalCSS={"section--large section-split"}>
        <div className="container">
          <h2>About Me</h2>
          <div
            className="section-half--image"
            style={{ backgroundImage: `url('/public/assets/images/profile-picture-two.png')` }}></div>
          <div className="section-half--content">
            <p>
              Hello, I'm Barry I'm a web developer based in Newton-Le-Willows, Merseyside. With courses to back up the
              experience, I am looking to help local businesses by providing them with an online presence. My designs
              and my builds represent my current abilities to provide you with a professional and fantastic looking
              website to reach out to your customers.
            </p>
          </div>
        </div>
      </DarkSection>
    </>
  );
}

export default HomePage;
