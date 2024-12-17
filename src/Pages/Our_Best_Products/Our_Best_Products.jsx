import ladduImg from '../../assets/laddu.jpeg';
import mishtyImg from '../../assets/mishty.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const Our_Best_Products = () => {
    return (
        <div className="mt-5 w-4/5 mx-auto">
            <div className="md:flex gap-40">
                <p className='text-primary text-center md:text-left md:text-2xl font-bold sm:w-full md:w-1/2'>আমাদের সেরা পণ্যগুলো দেখুন</p>
                <p className="hidden md:block text-primary w-1/2">Lorem ipsum dolor sit amet consectetur. Et congue vel enim viverra. Praesent vel morbi feugiat risus ac feugiat mattis.</p>
            </div>

                <div className='flex flex-col md:flex-row gap-14 md:gap-28 mt-10'>
                    <div>
                        <img className='rounded-xl w-[450px] h-auto' src={ladduImg} alt="" />
                        <p className='mt-4'>বাংলাদেশের সেরা লাড্ডু</p>
                        <div className='flex items-center gap-2 text-sm text-primary mt-5'>
                            <span>এই পণ্যটি দেখুন </span><span><FaArrowRight /></span>
                        </div>
                    </div>

                    <div>
                        <img className='rounded-xl w-[450px] h-[452px] md:h-auto' src={mishtyImg} alt="" />
                        <p className='mt-4'>বাংলাদেশের সেরা গোলাপজামুন</p>
                        <div className='flex items-center gap-2 text-sm text-primary mt-5'>
                            <span>এই পণ্যটি দেখুন </span><span><FaArrowRight /></span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-14 md:gap-28 gap-28 mt-14 md:mt-0'>
                    <div className='md:relative w-full'>
                        <div className='md:absolute bottom-0'>

                            <img className='rounded-xl w-[450px] h-[452px] md:h-auto' src={mishtyImg} alt="" />
                            <p className='mt-4'>বাংলাদেশের সেরা লাড্ডু</p>

                            <div className='flex items-center gap-2 text-sm text-primary mt-5'>
                                <span>এই পণ্যটি দেখুন </span><span><FaArrowRight /></span>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <img className='rounded-xl w-[450px] h-auto ' src={ladduImg} alt="" />
                        <p className='mt-4'>বাংলাদেশের সেরা গোলাপজামুন</p>
                        <div className='flex items-center gap-2 text-sm text-primary mt-5'>
                            <span>এই পণ্যটি দেখুন </span><span><FaArrowRight /></span>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Our_Best_Products