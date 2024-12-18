import { FaStar } from 'react-icons/fa6';
import image from '../../assets/mishty.jpeg';

const Product_Details = () => {
  return (
    <div className='grid lg:grid-cols-2 mt-10'>
      <div>
        <img className='w-full lg:w-11/12 md:h-[600px]' src={image} alt="" />
      </div>
      <div className='mt-8 md:mt-16'>
        <h1 className='text-2xl font-bold'>Grilled Zuccini and Barley Salad</h1>
        <p className='mt-2'><small>With Sayed Siam</small></p>
        <div className='mt-2 flex gap-2 text-yellow-400'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className='mt-5 lg:mt-2 text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat asperiores porro. Dolorum vel nemo laborum odio expedita, suscipit numquam iusto maxime minus exercitationem! Perspiciatis facilis minima id. Cupiditate, est!</p>

        <div className='mt-10 flex gap-6 md:gap-20'>
          <p className='text-primary font-semibold'>Price</p>
          <p className='text-xl'><b>290 BDT</b></p>
        </div>

        {/* Order Quantity */}
        <div className='mt-8 flex items-center gap-6 md:gap-20'>
          <p className='text-primary font-semibold'>Serves</p>
          <div className='flex gap-2'>
            <div className="border rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white">
              <p className="">1</p>
            </div>

            <div className="border rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white">
              <p className="">2</p>
            </div>

            <div className="border rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white">
              <p className="">3</p>
            </div>

            <div className="border rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white">
              <p className="">4</p>
            </div>

            <div className="border rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white">
              <p className="">5</p>
            </div>
          </div>
        </div>

        <div className='mt-16 w-full md:w-3/4 mx-auto bg-primary border rounded-lg'>
          <div className='text-center'>
            <button className='p-4 md:p-6 lg:p-4 text-white text-xl font-bold'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_Details