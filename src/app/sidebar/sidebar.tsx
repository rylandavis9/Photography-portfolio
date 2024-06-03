import Link from 'next/link';
import { useMediaQuery } from 'rsuite/esm/useMediaQuery/useMediaQuery';

export const Sidebar = () => {
  return(
    <nav className='w-[15%] min-w-28 h-screen flex items-center justify-center text-center bg-sidebar text-text'>
      <ul>
        <li className='my-16 font-bold hover:font-extra-bold hover:text-[105%] text-[100%]'>
          <Link href='/' className='text-justify'>Home</Link>
        </li>
        <li className='my-16 font-bold hover:font-extra-bold text-[100%] hover:text-[105%]'>
          <Link href='/contact' className='text-justify'>Contact Me!</Link>  
        </li>
      </ul>
    </nav>
  )
  };