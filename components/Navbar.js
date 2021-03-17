import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-blue-400 w-screen flex justify-around bg-blue-900 text-white h-96'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/courses'>
        <a>Courses</a>
      </Link>
    </div>
  );
};

export default Navbar;
