import SkillBlock from "../../global/skillBlocks/skillBlock";
import SkillBlocks from "../../global/skillBlocks/skillBlocks";
import SplitHeader from "../../header/splitHeader";
  
const headerContent = { 
    title:"Hello, i'm Barry",
    subtitle:"I help clients to achieve their business objectives without spending large amounts of money by providing facilities like: Shared Web Hosting, Personal Bespoke Websites, Blogs, Ecommerce, Dashboard designs and SSL Certificates (in association with world's most trusted SSL providers).",
    cta:'/contact-me',
    backgroundImage:"/assets/images/portrait.png",
}

function HomePage(){
    return (
        <>
            <SplitHeader content={headerContent}/>
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
        </>
    )
}

export default HomePage; 