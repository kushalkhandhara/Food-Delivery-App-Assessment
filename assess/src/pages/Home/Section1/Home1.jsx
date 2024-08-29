import Burger from "../../../assets/hero/hero-2.png"
import {Link} from "react-router-dom";
import "./Home1.css"

export default function Home1() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-7 mb-5 mb-lg-0">
            
            <div className="position-relative" >
                <img src={Burger} alt="" className='img-fluid' />
              <div className='price_badge'>
                <div className='badge_text'>
                  <h4 className='h4_xs'>Only</h4>
                  <h4 className='h3_lg'>$6.99</h4>
                </div>
              </div>
            </div>

          </div>

          <div className='col-lg-5'>
            <div className='hero_text text-center'>
              <h1 className='text-white'>New Burger</h1>
              <h2 className='text-white'>With Onion</h2>
              <p className='text-white pt-2'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, nam vero quas nisi autem voluptate distinctio reiciendis magnam eos voluptatibus, cumque ab. Iusto, blanditiis aliquid.
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
