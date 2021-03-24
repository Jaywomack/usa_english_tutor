import Link from 'next/link';
import Image from 'next/link';
import college from '../public/images/college.jpeg';
const Navbar = () => {
  return (
    <div
      className='bg-blue-400 w-screen flex justify-around bg-blue-900 text-white h-96'
      style={{
        backgroundImage:
          'url(' + `${require('../public/images/arbor.jpeg')}` + ')',
        width: '100%',
        height: [100],
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <Link href='/'>
        <a className='text-2xl text-black'>Home</a>
      </Link>
      <Link href='/about'>
        <a className='text-2xl text-black'>About</a>
      </Link>
      <Link href='/contact'>
        <a className='text-2xl text-black'>Contact</a>
      </Link>
      <Link href='/blog'>
        <a className='text-2xl text-black'>Blog</a>
      </Link>
      <Link href='/courses'>
        <a className='text-2xl text-black'>Courses</a>
      </Link>
    </div>
  );
};

export default Navbar;
