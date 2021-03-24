import Image from 'next/image';
const CardImg = ({ image }) => {
  return (
    <div className='card shadow transition duration-75 hover:shadow-md inline-block w-1/4'>
      <Image src={image} alt='' width={423} height={228} />
      <div className='card-container py-1 h-48'>
        <h4 className='text-2xl pl-5 mt-1 mb-3'>
          <b>John Doe</b>
        </h4>
        <p className='text-xl pl-5'>Architect</p>
      </div>
    </div>
  );
};

export default CardImg;
