import React from 'react'
import Hero from './Hero';
import Partners from './Partners';
import AnyName from './MostSec';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import Rectangle1 from './Rectangle1';
import Rectangle2 from './Rectangle2';
import Footer from './Footer';

function Landing() {

    const para_1_3 =
        <>
            DOML is a digital media agency powered by AI technology providing real time, {<span className="text-[#0075FF] font-bold">data-driven insights</span>} on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and {<span className="text-[#0075FF] font-bold">strategic execution</span>}.
        </>
    const para_2_4 =
        <>
            It's all about getting your message in front of the right audience and creating those valuable {<span className="text-[#0075FF] font-bold">relationships</span>}. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
        </>

    return (
        <>
            <Hero />
            <Partners />
            <AnyName
                paragraph={para_1_3}
                imgUrl={img1}
            />
            <AnyName
                paragraph={para_2_4}
                imgUrl={img2}
                reverse={true}
            />
            <Rectangle1 />
            <AnyName
                paragraph={para_1_3}
                imgUrl={img3}
            />
            <AnyName
                paragraph={para_2_4}
                imgUrl={img4}
                reverse={true}
            />
            <Rectangle2 />
            <Footer />
        </>
    );
}

export default Landing;
