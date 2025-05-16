import Image from 'next/image';

type FeatureProps = {
  image: { src: string; alt: string };
  title: string;
  description?: string;
};

const Feature = ({ image, title, description }: FeatureProps) => {
  return (
    <div className='text-center'>
      <div className='w-full p-4 flex justify-center items-center mb-4'>
        <div className='relative w-16 aspect-square'>
          <Image src={image.src} alt={image.alt} fill className='object-cover' />
        </div>
      </div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-base'>{description}</p>
    </div>
  );
};

export default Feature;
