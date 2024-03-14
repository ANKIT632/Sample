import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import image3 from './assets/image3.svg'
import image4 from './assets/image4.svg'
import image5 from './assets/image5.svg'
import image6 from './assets/image6.svg'
import image7 from './assets/image7.svg'
import icon1 from './assets/icons/icon1.svg'
import icon2 from './assets/icons/icon2.svg'
import icon4 from './assets/icons/icon4.svg'
import icon5 from './assets/icons/icon5.svg'
import icon6 from './assets/icons/icon6.svg'
import icon7 from './assets/icons/icon7.svg'
import icon8 from './assets/icons/icon8.svg'
import icon9 from './assets/icons/icon9.svg'
import icon10 from './assets/icons/icon10.svg'
import icon11 from './assets/icons/icon11.svg'
import icon12 from './assets/icons/icon12.svg'
import icon13 from './assets/icons/icon13.svg'
import icon14 from './assets/icons/icon14.svg'
import greenArrow from './assets/icons/greeArrow.svg';
import wArrow from './assets/icons/wArrow.svg';

import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <section className='w-[100vw]'>
      <div className='bg-[#F5F7FA]'>
      <div className=' flex items-center justify-center h-[416.34px] gap-6  max-md:h-[250px]'>
        <div className=' '>
          <p className='font-bold text-[#4d4d4d] text-[44.32px] max-md:text-[25.32px]'>Lessons and insights</p>
          <p className='font-bold text-green-500 text-[44.32px] max-md:text-[25.32px]'>from 8 year</p>
          <p className='CustomDesStyle mb-4'>where to grow your business as a photographer : site or sosical media?</p>
          <button className='text-[12px] bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded'>Register </button>
        </div>
        <img src={image1} alt='img1' className='max-md:w-40' />
        </div>
      </div>


      <div className='flex flex-col items-center justify-center m-5'>
  <div className='w-full'>
    <p className='custom-heading'>
      Our Client
    </p>
    <p className='CustomDesStyle text-center mb-5 '>we have been working with some fortune 500+ clients</p>
  </div>
  <div className=' flex flex-nowrap  justify-center gap-[120px] max-lg:gap-[90px] max-md:gap-[20px] xs:gap-[10px]'>
    <img className='' src={icon1}  alt='icon' />
    <img className='' src={icon2} alt='icon' />
    <img className='' src={icon7} alt='icon' />
    <img className='' src={icon4} alt='icon' />
    <img className='' src={icon5} alt='icon' />
    <img className='' src={icon6} alt='icon' />
    <img className='' src={icon7} alt='icon' />
  </div>
</div>


      <div>
        <div>
          <p className='custom-heading'>Manage your entire community in a single system</p>
          <p className='CustomDesStyle'>Who is Nextcent suitable for?
          </p>
        </div>
        <div className='flex gap-[5.57px]'>

          <div className='w-[210px] h-[182.1px] items-center'>
            <img src={icon8} alt='icon' className='' />
            <p className=''>Membership Organisations</p>
            <p className='CustomDesStyle'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div  className='w-[210px] h-[182.1px] flex-cols items-center justify-center'>
            <img src={icon9} alt='icon' className='' />
            <p>National Associations</p>
            <p className='CustomDesStyle'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div  className='w-[210px] h-[182.1px]'>
            <img src={icon10} alt='icon' />
            <p>Clubs And Groups</p>
            <p className='CustomDesStyle'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>


        </div>
      </div>

      <div className='flex w-full'>
        <img src={image2} alt='img'  className='max-md:w-[200px]'/>

        <div>
          <p className='custom-heading'>The unseen of spending three years at Pixelgrade</p>
          <p className='CustomDesStyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className='text-[12px] bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded-[2px]'>Learn More </button>
        </div>
      </div>

      <div className='flex'>
        <div>
          <p className='custom-heading'>Helping a local </p>
          <p className='custom-heading text-green-500'> business reinvent itself</p>
          <p>We reached here with our hard work and dedication</p>
        </div>

        <div>

        </div>
      </div>

      <div className='flex'>
        <img src={image3} alt='img'  className='max-md:w-[200px]'/>
        <div>
          <p className='custom-heading'>How to design your site footer like we did</p>
          <p className='CustomDesStyle'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button className='text-[12px] bg-green-500 hover:bg-green-700 text-white py-1 px-4 rounded-[2px]'>Learn More </button>
        </div>
      </div>

 <div className='w-full flex  justify-center text bg-[#F5F7FA] h-90'>
      <div className='flex gap-5 h-60 w-[900px]  p-5'>
        <img src={image4} alt='img' />
        <div className=' '>
      
          <p className='CustomDesStyle'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <p className=''>Tim Smith</p>
          <p >British Dragon Boat Racing Association</p>
          <div className='flex gap-5 mt-2 max-md:gap-2 *:h-5'>
          
          <img src={icon1}  alt='icon' className='' />
          <img src={icon2} alt='icon' />
          <img src={icon7} alt='icon' />
          <img src={icon4} alt='icon' />
          <img src={icon5} alt='icon' />
          <img src={icon6} alt='icon' />

          <NavLink  className='text-[10px]'>Meet all customers</NavLink>
        
        </div>
       
        </div>
      </div>
      </div>

<div className='flex-col'>
  <div className=''>
    <p className='custom-heading'>Caring is the new marketing</p>
    <p className='w-[100]'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>

</div>
   <div className='flex space-x-auto'>

    <div className='flex-col w-50  w-full '>
      <img src={image5} className='w-40' alt=''/>
      <div className='w-40'>
        <p>Creating Streamlined Safeguarding Processes with OneRen</p>
        <NavLink className='flex text-green-500'><>Read more <img src={greenArrow} alt='icon' className='mt-1'/></></NavLink>
      </div>
    </div>

    <div className='flex-col w-50 '>
      <img src={image6} className='w-40'  alt=''/>

     
      <div className='w-40'>
      <p>What are your safeguarding responsibilities and how can you manage them?</p>
      <NavLink className='flex text-green-500'><>Read more <img src={greenArrow} alt='icon' className='mt-1'/></></NavLink>
      </div>
      
    </div>

    <div className='flex-col w-50 '>
      <img src={image7} className='w-40'  alt=''/>

     
      <div className='w-40'>
      <p>Revamping the Membership Model with Triathlon Australia</p>
      <NavLink className='flex text-green-500'><>Read more <img src={greenArrow} alt='icon' className='mt-1'/></></NavLink>
      </div>
    </div>

   </div>

  </div>


<div>
  <p>Lorem ipsum dolor sit amet consectetuer</p>

  <button className='text-[12px] bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded-[2px] flex '><>Get a Demo <img src={wArrow} alt='icon' className='mt-2 pl-2'/></> </button>
</div>
    </section>
  )
}
