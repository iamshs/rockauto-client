import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiInstagramLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer>
           <section className='bg-[#EBECEF] p-10 flex justify-between '>
            {/* grid--1 */}
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-[65%]  '>
                 <div>
                    <h4 className='font-extrabold text-sm text-black mb-5'>CONTACT</h4>
                    <p className='' >16516</p>
                    <p className='mb-3'>info@sheba.xyz</p>
                    <p >Corporate Address</p>
                    <p>House # 57, Road # 25, Block - A,
                    Banani, Dhaka 1212</p>
                 </div>
                 <div>
                    <h4 className='font-extrabold text-sm text-black mb-5'>OTHER PAGES</h4>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >Blog</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >Help</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >Terms of use</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >Privacy Policy</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >Sitemap</Link>
                    </p> 
                 </div>
                 <div>
                    <h4 className='font-extrabold text-sm text-black mb-5'>COMPANY</h4>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >sManager</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >sBusiness</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >sDelivery</Link>
                    </p>
                    <p className='hover:font-bold mb-3'>
                        <Link to={'/'}  >sBondhu</Link>
                    </p>
                    
                 </div>
              </div>
              {/* grid--2 */}
              <div className='text-end w-[32%] ' >
               <h3 className='font-bold text-black mb-3'>DOWNLOAD OUR APP</h3>
               <p>Tackle your to-do list wherever you are with our mobile app & make your life easy.</p>
               <div className='grid grid-cols-2  h-[8rem] '>
               <Link to={'/'}>
               <img className=' w-[110%]   '  src={apple} alt='apple store'  />
               </Link>
               <Link to={'/'}>
               <img className='w-[100%] ' src={google} alt='google store'  />
               </Link>
               </div>
               <div className='flex items-center justify-end'>
                 <Link className='text-4xl '>
                  <RiFacebookCircleLine  />
                 </Link>
                 <Link className='text-4xl '>
                  <RiInstagramLine />
                 </Link>
                 <Link className='text-[2.6rem] '>
                  <TiSocialLinkedinCircular />
                 </Link>
               </div>
              </div>
            </section> 
        </footer>
    );
};

export default Footer;