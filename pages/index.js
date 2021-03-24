import CardImg from '../components/CardImg';
import Meta from '../components/Meta';

export default function Home() {
  return (
    <>
      <Meta
        title='USA English Tutor | Home'
        description='Professional English Tutors from the United States of America.'
      />
      <div className='body-container h-screen grid grid-cols-1 '>
        <section className='bg-gray-200' id='featured'>
          <div className=''>
            <h2 className='text-6xl'>Featured</h2>
          </div>
          <div>
            <CardImg image={'/images/arbor.jpeg'} className='w-48' />
            <CardImg image={'/images/arbor.jpeg'} className='w-48' />
            <CardImg image={'/images/arbor.jpeg'} className='w-48' />
          </div>
        </section>
        <section className='bg-gray-50' id='subject-areas'>
          <h2 className='text-6xl'>Subject Areas</h2>
        </section>
        <section className='bg-gray-200' id='trending-courses'>
          <h2 className='text-6xl'>Trending Courses</h2>
        </section>
        <section className='bg-gray-50' id='featured-topics'>
          <h2 className='text-6xl'>Featured Topics</h2>
        </section>
        <section className='bg-gray-200' id='recently-added'>
          <h2 className='text-6xl'>Recently Added</h2>
        </section>
        <section className='bg-gray-50' id='starting-soon'>
          <h2 className='text-6xl'>Starting Soon</h2>
        </section>
        <section className='bg-gray-200' id='courses-stats'>
          <h2 className='text-6xl'>Courses Stats</h2>
        </section>
        <section className='bg-gray-50' id='school-carousel'>
          <h2 className='text-6xl'>School Carousel</h2>
        </section>
      </div>
    </>
  );
}
