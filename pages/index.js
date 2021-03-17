import Meta from '../components/Meta';
export default function Home() {
  return (
    <>
      <Meta
        title='USA English Tutor | Home'
        description='Professional English Tutors from the United States of America.'
      />
      <div className='body-container h-screen grid grid-cols-1 grid-rows-8 '>
        <section className='bg-red-400' id='featured'>
          <h2 className='text-6xl'>Featured</h2>
        </section>
        <section className='bg-blue-400' id='subject-areas'>
          <h2 className='text-6xl'>Subject Areas</h2>
        </section>
        <section className='bg-red-400' id='trending-courses'>
          <h2 className='text-6xl'>Trending Courses</h2>
        </section>
        <section className='bg-blue-400' id='featured-topics'>
          <h2 className='text-6xl'>Featured Topics</h2>
        </section>
        <section className='bg-red-400' id='recently-added'>
          <h2 className='text-6xl'>Recently Added</h2>
        </section>
        <section className='bg-blue-400' id='starting-soon'>
          <h2 className='text-6xl'>Starting Soon</h2>
        </section>
        <section className='bg-red-400' id='courses-stats'>
          <h2 className='text-6xl'>Courses Stats</h2>
        </section>
        <section className='bg-blue-400' id='school-carousel'>
          <h2 className='text-6xl'>School Carousel</h2>
        </section>
      </div>
    </>
  );
}
// .parent {
// display: grid;
// grid-template-columns: 1fr;
// grid-template-rows: repeat(8, 1fr);
// grid-column-gap: 0px;
// grid-row-gap: 0px;
// }
