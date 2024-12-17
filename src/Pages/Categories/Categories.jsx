import sweetImg from '../../assets/mishty.jpeg';

const Categories = () => {
    return (
        
            <div>
                <p className='text-center lg:text-left text-primary text-2xl font-bold'>আমাদের ক্যাটাগরিসমূহ</p>

                {/* all products */}
                <div className='mt-10'>
                    <h4 className="text-center lg:text-left text-xl font-bold">সকল পণ্যসমূহ</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 :gap-0 mt-6'>
                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>
                    </div>
                </div>

                {/* special products */}
                <div className='mt-24'>
                <h4 className="text-center lg:text-left text-xl font-bold">বিশেষ পণ্য</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 :gap-0 mt-6'>
                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>
                    </div>
                </div>

                {/* জনপ্রিয় পণ্যসমূহ */}
                <div className='mt-24 mb-20'>
                <h4 className="text-center lg:text-left text-xl font-bold">জনপ্রিয় পণ্যসমূহ</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 :gap-0 mt-6'>
                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>

                        <div className='w-9/12 md:w-full lg:w-[290px] mx-auto'>
                            <img className='rounded-2xl' src={sweetImg} alt="" />
                            <p className='text-primary font-bold text-center mt-4'>মিষ্টিসমূহ</p>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Categories