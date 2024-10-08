import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jpg"
import s4 from "./images/s4.jpg"
import s5 from "./images/s5.jpg"
import s6 from "./images/s6.jpg"
import s7 from "./images/s7.jpg"
import imac from "./images/iMac.png"
import tablet from "./images/phoneTablet.png"
import { Helmet } from "react-helmet"

export default function Scope(){

return(
    <>
<div id="scope" className="scope-text-container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Scope-UI/UX Design Services</title>
                <link rel="canonical" href="https://design-agency-lime.vercel.app/#scope" />
                <meta name="description" content="Welcome to Design Agency. Experience high-quality, productized UI/UX design services. Our customized design packages are crafted for businesses of all sizes." />
                <meta name="keywords" content="UI/UX, Design Agency, Web Design, App Design" />
            </Helmet>
<p className="R-heading1">Our partners hire us to design</p>
<p className="S-heading2">We only offer design services in domains where we can guarantee excellent quality.</p>

<div className="scope-links">
    
<a href="">Landing pages </a>
<a href="">Mobile apps </a>
<a href="">Wireframes </a>
<a href="">Animations </a>
<a href="">Web apps </a>
<a href="">Pitch decks </a>
<a href="">Watch apps </a>
<a href="">Brand assets </a>
<a href="">Design Systems </a>
</div>

</div>

<div className="sl-container">
<div className="slider-container">

    <div className="slide-img">
        <img src={s1} alt="image" />
    </div>
    <div className="slide-img">
        <img src={s2} alt="image" />

    </div><div className="slide-img">
        <img src={s3} alt="image" />

    </div><div className="slide-img">
        <img src={s4} alt="image" />

    </div>
    <div className="slide-img">
        <img src={s5} alt="image" />

    </div><div className="slide-img">
        <img src={s6} alt="image" />

    </div><div className="slide-img">
        <img src={s7} alt="image" />

    </div>


    <div className="slide-img">
        <img src={s1} alt="image" />

    </div>
    <div className="slide-img">
        <img src={s2} alt="image" />

    </div><div className="slide-img">
        <img src={s3} alt="image" />

    </div><div className="slide-img">
        <img src={s4} alt="image" />

    </div><div className="slide-img">
        <img src={s5} alt="image" />

    </div><div className="slide-img">
        <img src={s6} alt="image" />

    </div><div className="slide-img">
        <img src={s7} alt="image" />

    </div>


</div>
</div>

<div className="scope-section">

    <p className="scope-heading2">We turn complex ideas into intuitive experiences.</p>

    <div className="scope-cards">
{/* ---------------Card1-------------- */}
   
        <div className="s-card1">
            <div className="sc-header">
             <p>UI/UX DESIGN</p>
            </div>
            <div className="sc-header2">
             <p>WE design clean experiences that your users will love.</p>
            </div>
            <div className="sc-header3">
             <p>See my work <i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <img src={tablet} alt="tab-img" className="scard-img" />
        </div>
   
{/* -------------------Card2---------------- */}

        <div className="s-card2">
            <div className="sc-header">
             <p>WEBFLOW / FRAMER</p>
            </div>
            <div className="sc-header2">
             <p>we build high quality websites at warp speed</p>
            </div>
            <div className="sc-header3">
             <p>How I help <i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <img src={imac} alt="tab-img" className="scard-img" />
        </div>
    
  
</div>
</div>
</>
)

}