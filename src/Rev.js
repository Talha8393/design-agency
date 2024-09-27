import img2 from './images/img2.png'
import star from './images/star.svg'
import btnimg from "./images/btnimg.jpg"
import b1 from "./images/b1.jpg"
import b2 from "./images/b2.jpg"
import b3 from "./images/b3.jpg"
import b4 from "./images/b4.jpg"
import b5 from "./images/b5.jpg"
import b6 from "./images/b6.jpg"
import b9 from "./images/b9.jpg"


const Calendly = () => {
    window.location.href = 'https://calendly.com/talha0azhar5/30-min-free-meeting-with-me'; 
  };
const Reviews = () => (
   
    <>
             
        <div className="reviews" id='head'>
       
            <img className="clients-image" src={img2} alt="reviews" />
            <div className="star-container">
                <div className='stars'>
                    <img className='star-img' src={star} alt="rating" />
                    <img className='star-img' src={star} alt="rating" />
                    <img className='star-img' src={star} alt="rating" />
                    <img className='star-img' src={star} alt="rating" />
                    <img className='star-img' src={star} alt="rating" />
                </div>

            </div>
        </div>
        <div >
            <p className='cl-para'>trusted by partners worldwide</p>
        </div>

        <div className='text-container'>
            <h1 className='heading1' >
                Your proven on-demand design partner
            </h1>
            <p className="p1">Experience exceptional design <span>without the hassle </span>of hiring an in-house
                designer. We design websites and apps that enable <span>business impact</span></p>
        </div>
        <div className="btn-container">
            <button className="btn-book" onClick={Calendly}>
                <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
                <span>Book a call</span>
            </button>
        </div>

        <div className="bimg-container">
            <img src={b1} alt="b1" />
            <img src={b2} alt="b2" />
            <img src={b3} alt="b3" />
            <img src={b4} alt="b2" />
            <img src={b5} alt="b3" />
            <img src={b6} alt="b1" />
            <img src={b9} alt="b3" />
            <img src={b1} alt="b1" />
            <img src={b2} alt="b2" />
            <img src={b3} alt="b3" />
            <img src={b4} alt="b2" />
            <img src={b5} alt="b3" />
        </div>

    </>
)

export default Reviews;