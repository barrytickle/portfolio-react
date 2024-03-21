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
                <SkillBlocks/>
            </section>
        </>
    )
}

export default HomePage; 