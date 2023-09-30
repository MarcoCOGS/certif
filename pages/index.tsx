/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage, faClock, faLocationDot, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const popupRef2 = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const openGoogleLoginPopup = () => {
    const width = 600;
    const height = 600;
    const left = screenLeft / 2 - width / 2;
    const top = screenY / 2 - height / 2;

    window.open(
      'https://accounts.google.com/o/oauth2/auth',
      'Google Login',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    // Cierra la ventana emergente del botón LOGIN
    setIsPopupOpen(false);
  };

  useEffect(() => {
    // Agregar un controlador de eventos para escuchar los clics en el documento.
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !(popupRef.current as any).contains(event.target) && !(popupRef2.current as any).contains(event.target)) {

        setIsPopupOpen(false);
      }
    };

    // Agregar el controlador de eventos al documento.
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Eliminar el controlador de eventos al desmontar el componente.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <main
      className='bg-black flex min-h-screen flex-col items-center pt-2'
    >
      <div className='hidden px-10 text-white xl:flex flex-row text-xs w-screen justify-end max-w-[1200px]'>
        <div>
          BLOG
        </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
        <div>
          FAQ
        </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
        <div>
          FORMS
        </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
        <div>
          <button
          className='cursor-pointer text-white hover:underline'
          onClick={openGoogleLoginPopup}
        >
          LOGIN
        </button>
        </div>
      </div>
      <div className="hidden z-10 pb-2 px-5 max-w-[1200px] text-white uppercase w-full items-center justify-between text-sm xl:flex">
        <div className='flex flex-row gap-4'>
          <Image
            src="https://marcocogs.github.io/certif/4.PNG"
            alt="Vercel Logo"
            width={50}
            height={24}
            priority
          />
          <Image
            src="https://marcocogs.github.io/certif/1.png"
            alt="Vercel Logo"
            width={220}
            height={24}
            priority
          />
        </div>
        <div className='flex flex-row items-center gap-3'>
          <div>
            How it works
          </div>
          <div>
            Mobile services
          </div>
          <div>
            Corporate billing
          </div>
          <div>
            Live scan system
          </div>
          <button className='uppercase bg-[#EDB622] hover:bg-[#DA9644] hover:cursor-pointer text-white rounded-3xl px-4 py-3'>
            Get Fingerprinted
          </button>
        </div>
      </div>
      <div className="xl:hidden z-10 pb-2 sm:px-8 px-3 max-w-[1200px] text-white uppercase w-full items-center justify-between text-sm flex">
        <div className='flex flex-row justify-center gap-4'>
          <Image
            src="https://marcocogs.github.io/certif/4.PNG"
            alt="Vercel Logo"
            width={50}
            height={24}
            priority
          />
          <Image
            src="https://marcocogs.github.io/certif/1.png"
            alt="Vercel Logo"
            width={220}
            height={24}
            priority
          />
        </div>
        <div>
          <button ref={popupRef2} onClick={togglePopup} className='uppercase text-3xl bg-[#EDB622] hover:bg-[#DA9644] hover:cursor-pointer text-white rounded-lg px-3'>
            ≡
          </button>
          {isPopupOpen && (
          <div ref={popupRef} className="px-12 py-8 bg-black font-semibold flex flex-col absolute top-[55px] gap-y-2 right-0 rounded-2xl shadow-md">
            <div>
              How it works
            </div>
            <div>
              Mobile services
            </div>
            <div>
              Corporate billing
            </div>
            <div>
              Live scan system
              </div>
              <div>
                <button className='uppercase bg-[#EDB622] hover:bg-[#DA9644] hover:cursor-pointer text-white rounded-3xl px-4 py-3'>
                  Get Fingerprinted
                </button>
              </div>
              <div className='flex'>
                <div>
                  BLOG
                </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
                <div>
                  FAQ
                </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
                <div>
                  FORMS
                </div><div className='leading-none pt-0.5'> &nbsp;|&nbsp; </div>
                <div>
                  <button
                    className='cursor-pointer text-white hover:underline'
                    onClick={openGoogleLoginPopup}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
          </div>
        )}
        </div>
      </div>
      <div className="w-screen h-[520px] md:h-[520px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://marcocogs.github.io/certif/fondo3.jpg')" }}></div>
        <div className="absolute inset-0 bg-[rgba(1,30,44,0.25)]">
          <div className='z-50  flex flex-col mx-auto max-w-[1200px] justify-center px-14 pt-12 md:pt-28'>
            <div className='text-white text-[32px] md:text-6xl font-bold'>Fast and Secure <br /> Fingerprinting</div>
            <div className='text-[21px] text-white my-4'>Services offered at nationwide locations</div>
            <div className='flex flex-col lg:flex-row text-white'>
              <div className='flex md:flex-row flex-col'>
                <div className="relative">
                  <input
                    className="px-1 w-full md:rounded-e-none rounded-s-full rounded-e-full focus:outline-none text-black py-[18px] text-xl h-[62px] pl-14"
                    placeholder="City or Zip Code" />
                  <div className="absolute inset-y-0 left-4 flex items-center pl-3">
                    <FontAwesomeIcon icon={faLocationDot} width={16} className="text-gray-400" />
                  </div>
                </div>
                <button className='px-10 bg-[#EDB622] text-base md:rounded-s-none rounded-s-full rounded-e-full py-[18px] h-[62px] font-semibold'>Find a Location</button>
              </div>
              <div className='pl-6 py-[18px] h-[62px] flex flex-col sm:flex-row'>
                <div className='flex'> <FontAwesomeIcon icon={faLocationCrosshairs} width={18} />&nbsp;&nbsp; Use my current location &nbsp;&nbsp;</div>
                <div>Or &nbsp;&nbsp;<span className='text-[#EDB622]'>Browse by state</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen justify-center flex flex-col bg-[#EEF0F4]'>
        <div className='text-center text-3xl mt-12 font-bold underline underline-offset-[16px]'>&nbsp;HOW IT WORKS&nbsp;</div>
        <div className='mt-16 flex md:flex-row flex-col items-center justify-center gap-16'>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/1-min.png" alt="Vercel Logo" width={26} height={54} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Find a Location</div>
            <div className='leading-loose text-base'>
              We offer a nationwide network of 1200+
              fingerprint enrollment centers that you can
              choose from to capture your fingerprints for
              an FD-258 card or Live Scan submission.
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/2-min.png" alt="Vercel Logo" width={40} height={52} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Enroll Online</div>
            <div className='leading-loose text-base'>
              You are required to select your application
              type and to enroll online, this includes providing
              us with all the required information to complete
              the electronic fingerprinting capture.
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/3-min.png" alt="Vercel Logo" width={40} height={52} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Get Fingerprinted</div>
            <div className='leading-loose text-base'>
              Once you've enrolled online and found a location,
              simply walk into the location and provide them with a
              copy of your QR code or Token, they will then proceed
              to capture your fingerprints.
            </div>
          </div>
        </div>
        <div className='text-center mt-16 mb-20'>
          <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>Learn More</button>
        </div>
      </div>
      <div className='w-screen justify-center items-center flex flex-col bg-white'>
        <div className='text-center text-3xl mt-12 font-bold underline underline-offset-[16px]'>&nbsp;WHAT WE OFFER&nbsp;</div>
        <p className='mt-8 text-center mx-4'>Certifix offers a variety of fingerprinting products and services that can be used for Live Scan submission and ink card fingerprinting.</p>
        <div className='mt-16 flex flex-col md:flex-row justify-center gap-16'>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/florida-fingerprint-1.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Florida Fingerprinting</div>
            <div className='leading-loose text-[15px]'>
              Our Florida network is available to scan your fingerprints and transmit them to the
              FDLE or AHCA for a fingerprint-based background check. You can enroll online and
              then walk into any of our locations for quick and fast processing.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/california.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>California Fingerprinting</div>
            <div className='leading-loose text-[15px]'>
              Our California network is available to scan your fingerprints and transmit them to the California
              Department of Justice (DOJ) and the FBI for a fingerprint-based background check.
              You can enroll online or walk into any of our locations.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/fingerprint-card.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Fingerprint Card Service</div>
            <div className='leading-loose text-[15px]'>
              Our nationwide print-to-card network is now available to scan your fingerprints and to print
              onto an FD-258 card that can be used for a variety of State or Federal application types.
              Our printed ink fingerprint cards are mailed via USPS.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className='mt-16 flex flex-col md:flex-row justify-center gap-16 mb-16'>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/offer-image4.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Fingerprinting Supplies</div>
            <div className='leading-loose text-[15px]'>
              Visit our online store to purchase ink fingerprinting cards and supplies that can be used
              for a wide variety of applications for both personal use and law enforcement. We offer
              a quick and easy checkout process with nationwide shipping.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/offer-image5.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Mobile Fingerprinting</div>
            <div className='leading-loose text-[15px]'>
              Our mobile Live Scan fingerprinting service is now available in California, we can send a technician
              directly to you to complete an ink fingerprint card service or Live Scan submission to Cal DOJ or FBI.
              This service is available for individuals and groups.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[350px] text-center'>
            <div className='flex justify-center mb-4'>
              <Image src="https://marcocogs.github.io/certif/images/offer-image6.png" alt="Vercel Logo" width={120} height={120} priority />
            </div>
            <div className='font-bold text-xl text-center mb-4'>Live Scan System</div>
            <div className='leading-loose text-[15px]'>
              Our Live Scan system is currently certified by the California Department of Justice (DOJ) and the
              Florida Department of Law Enforcement (FDLE). Our print-to-card system can be used to scan
              fingerprints and print onto an ink fingerprint card.
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
              <button className='bg-[#dde2e7] hover:bg-[#EDB622] hover:text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-lg'>
                How It Works
              </button>
              <button className='bg-[#EDB622] hover:bg-[#dde2e7] hover:text-[#000] text-[#fff] text-sm font-semibold px-9 pt-2 pb-2 rounded-md'>
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className='w-screen justify-center flex flex-col bg-[#EEF0F4] pt-8 pb-10'>
          <div className='text-center text-3xl mt-10 font-bold'>&nbsp;CERTIFIX IS THE MOST TRUSTED NAME IN LIVE SCAN&nbsp;</div>
          <div className='justify-center flex mt-4'><div className='text-center text-2xl border-t-[3px] border-black w-64'>You can count on us.</div></div>
          <div className='mt-16 flex flex-col items-center md:flex-row justify-center gap-16'>
            <div className='w-[350px] text-center'>
              <div className='flex justify-center mb-4'>
                <Image src="https://marcocogs.github.io/certif/images/YouCanCountOnUs_Locations-min.png" alt="Vercel Logo" width={59} height={75} priority />
              </div>
              <div className='font-bold text-[40px] text-center mb-4'>1200+</div>
              <div className='leading-loose text-xl'>Locations</div>
            </div>
            <div className='w-[350px] text-center'>
              <div className='flex justify-center mb-4'>
                <Image src="https://marcocogs.github.io/certif/images/YouCanCountOnUs_peopleFingerprinted-min.png" alt="Vercel Logo" width={85} height={75} priority />
              </div>
              <div className='font-bold text-[40px] text-center mb-4'>3+ million</div>
              <div className='leading-loose text-xl'>People Fingerprinted</div>
            </div>
            <div className='w-[350px] text-center'>
              <div className='flex justify-center mb-4'>
                <Image src="https://marcocogs.github.io/certif/images/YouCanCountOnUs_experience-min.png" alt="Vercel Logo" width={74} height={75} priority />
              </div>
              <div className='font-bold text-[40px] text-center mb-4'>15 years</div>
              <div className='leading-loose text-xl'>of experience</div>
            </div>
          </div>
        </div>
        <div className='w-screen items-center text-left flex flex-col bg-[#23262D] pt-8 pb-10'>
          <div className='max-w-[1200px] w-4/5 md:w-full flex flex-col md:flex-row justify-around text-white mb-10'>
            <div className='flex flex-col gap-2'>
              <div className='font-bold mb-4'>CONTACT</div>
              <div className='flex gap-3'><FontAwesomeIcon icon={faPhone} width={18} />(800) 710-1934</div>
              <div className='flex gap-3'><FontAwesomeIcon icon={faEnvelope} width={18} /> support@certifixlivescan.com</div>
              <div className='flex gap-3'><FontAwesomeIcon icon={faMessage} width={18} />Chat With Us</div>
              <div className='font-bold flex gap-3'><FontAwesomeIcon icon={faClock} glyphName='regular' width={18} />Supporting Hours</div>
              <div>Mon-Fri: 8am-6pm PST</div>
              <div>Sat: 9am-3pm PST</div>
            </div>
            <div className='flex flex-col gap-2 pt-8 md:pt-0'>
              <div className='font-bold mb-4'>LIVE SCAN FINGERPRINTING</div>
              <div>How It Works</div>
              <div>Mobile Services</div>
              <div>Live Scan Classes</div>
              <div>Fingerprinting Supplies</div>
            </div>
            <div className='flex flex-col gap-2 pt-8 md:pt-0'>
              <div className='font-bold mb-4'>FOR BUSINESS & EMPLOYERS</div>
              <div>Corporate Billing</div>
              <div>Join Our Network</div>
              <div>Live Scan System</div>
            </div>
            <div className='flex flex-col gap-2 pt-8 md:pt-0'>
              <div className='font-bold mb-4'>COMPANY</div>
              <div>Knowledge Base</div>
              <div>About Us</div>
              <div>Reviews</div>
              <div>FAQ</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className='flex flex-row px-4'>
            <div>
              <div className='text-white'>2023 Certifix Inc. All Rights Reserved. Privacy Policy Terms of Use</div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-0">
        <Link target='_blank' href={'https://api.whatsapp.com/send/?phone=%2B51986761935&text=Quiero%20m%C3%A1s%20informacion&type=phone_number&app_absent=0'}>
          <Image
            src="/wsp2.png"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
    </main>
  )
}
