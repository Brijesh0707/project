import React from 'react'
import './App.css'
import Ads from './exam-photo/ads.png'
import Book from './exam-photo/book.png'
import Degree from './exam-photo/degree.png'
import Live from './exam-photo/live.png'
import Time from './exam-photo/time.png'
import Watch from './exam-photo/watch01.jpg'
import Payment from './exam-photo/payment.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Logic from './Logic'
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener('click', (e) => {
            checkboxes.forEach((cb) => {
              if (cb !== checkbox) {
                cb.checked = false;
              }
            });
          });
        });
    
        const btnCancel = document.querySelector("#btn02");
    
        btnCancel.addEventListener("click", (e) => {
          checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
          });
        });
    
        // Clean up event listeners when component is unmounted
        return () => {
          checkboxes.forEach((checkbox) => {
            checkbox.removeEventListener('click', (e) => {
              checkboxes.forEach((cb) => {
                if (cb !== checkbox) {
                  cb.checked = false;
                }
              });
            });
          });
    
          btnCancel.removeEventListener("click", (e) => {
            checkboxes.forEach((checkbox) => {
              checkbox.checked = false;
            });
          });
        }
      }, []);
  




  return (
    <>
    <section id="home">
        <div className='container-fluid justify-content-evenly' id="block1">
            <div className='row justify-content-evenly'>
                <div className='col-md-5' id="text1">
                    <h3>Access curated courses worth</h3>
                    
                    <h3>₹ <span id="cross">18,500</span> at just <span id="blue">₹ 99</span> per year!</h3>
                    <br/>
                    <ul>
                        <li><img src={Book} id="img3"></img><span id="blue">100+</span> Job relevant courses</li>
                        <li><img src={Time} id="img3"></img><span id="blue">20,000+</span> Hours of content</li>
                        <li><img src={Live} id="img3"></img><span id="blue">Exclusive</span> webinar acccess</li>
                        <li><img src={Degree} id="img3"></img>Scholarship worth <span id="blue">₹94,500</span></li>
                        <li><img src={Ads} id="img3"></img><span id="blue">Ad Free</span> learning expreience</li>
                    </ul>

                </div>
                <div className='col-md-5'>
                <div className='plan'>
                    <div className='login'>
                        <div className='sign'>
                        <button id="btn4">1</button>
                        <p>Sign Up</p>
                        </div>
                        <div className='login1'>
                        <button id="btn4">2</button>
                        <p>Subscribe</p>
                        </div>
                    </div>
                    <div className='plans'>
                        <h5 className='text-center pt-1 pb-1'>Select your subcription plan</h5>
                        <div className='plan1'>
                            <div className='expire'>
                                <p>offer expire</p>
                            </div>
                            <input type='radio' name="expire" checked></input>

                            <label name="expire">12 Month Subcription</label>
                            <div className='total'>
                                <p><span>Total</span> ₹99 <br/> <span id="small">₹8 /mo</span></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='plans1'>
                        <div className='recomm'>
                            <p>Recommended</p>
                        </div>
                        <input type='checkbox' name='plan'></input>
                        <label name="expire1">12 Month Subcription</label>
                        <div className='total1'>
                                <p><span>Total</span> ₹179 <br/> <span id="small">₹15 /mo</span></p>
                                
                            </div>
                    </div>
                    <div className='plans2'>
                        <input type='checkbox' name='plan'></input>
                        <label name="expire1">6 Month Subcription</label>
                        <div className='total1'>
                                <p><span>Total</span> ₹149 <br/> <span id="small">₹25 /mo</span></p>
                                
                            </div>
                    </div>
                    <div className='plans3'>
                        <input type='checkbox' name='plan'></input>
                        <label name="expire1">6 Month Subcription</label>
                        <div className='total1'>
                                <p><span>Total</span> ₹149 <br/> <span id="small">₹25 /mo</span></p>
                                
                        </div>
                      
                    </div>
                    
                    <hr id="line"/>
                    <div className='fee'>
                        <p>Subcription Fee</p>
                        <p>₹18,500</p>
                    </div>
                    <div className='limited'>
                     <div className='limited1'>
                                <label name="expire"><span id="limited">Limited time offer</span><br/><img src={Watch} id="watch1"/> offer valid till 25th jun 2023
                                </label>
                            <div className='total05'>
                                <p id="total05"><span>Total</span> ₹99 <br/> <span id="small">₹8 /mo</span></p>
                                
                            </div>
                        </div>
                    

                    </div>
                    <div className='rate'>
                     <div className='rating'>
                        <p id="samll1"><span id="dark">Total</span> (incl. of 18% GST)</p>
                        <p id="big">₹149</p>
                        </div>
                        <div className='btn02'>
                            <button type='button' id="btn02">CANCEL</button>
                            <button type='button' id="btn03">PROCEED TO PAY</button>
                        </div>
                        <img src={Payment} id="payment1"/>
                    </div>
                    
                </div>


                </div>                     
            </div>
        </div>



        
    </section>

    </>
  )
}

export default Home