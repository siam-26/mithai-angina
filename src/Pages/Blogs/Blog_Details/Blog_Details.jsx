import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import blogImg from '../../../assets/mishty.jpeg';
import demoAdsImg from '../../../assets/demoAds.png';
import { Link } from 'react-router';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaPinterest } from 'react-icons/fa';

const Blog_Details = () => {
  const recentPosts = [
    {
      id: 1,
      imgName: demoAdsImg,
      title: 'বিড়ালের সম্পর্কে অজানা কিছু তথ্য',
      date: '24/12/2018',
      comments: '2 comments'
    },
    {
      id: 2,
      imgName: blogImg,
      title: 'বিড়ালের ডায়রিয়া হলে প্রাথমিকভাবে যা করনীয়',
      date: '24/12/2018',
      comments: '2 comments'
    },
    {
      id: 3,
      imgName: demoAdsImg,
      title: 'কুকুর অথবা বিড়াল কামড় দিলে যা করণীয় এবং এর চিকিৎসা সম্পর্কিত তথ্য',
      date: '24/12/2018',
      comments: '2 comments'
    },
    {
      id: 4,
      imgName: demoAdsImg,
      title: 'বিড়ালের সম্পর্কে অজানা কিছু তথ্য',
      date: '24/12/2018',
      comments: '2 comments'
    },
    {
      id: 5,
      imgName: demoAdsImg,
      title: 'কুকুর অথবা বিড়াল কামড় দিলে যা করণীয় এবং এর চিকিৎসা সম্পর্কিত তথ্য',
      date: '24/12/2018',
      comments: '2 comments'
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* blog title */}
          <div>
            <h1 className='font-semibold text-2xl md:text-3xl'>শীতে আপনার আদরের বিড়ালের যত্ন নেবেন যেভাবে</h1>
            <p className='mt-4 text-gray-500'><small>১৮:৫৫, ২০ ডিসেম্বর ২০২৩</small></p>
          </div>
          {/* blog image */}
          <div className='mt-5'>
            <img className='object-cover w-full md:h-[500px]' src={blogImg} alt="" />
          </div>

          {/* blog details */}
          <div className='mt-10'>
            <p className=''>বেশিরভাগ বিড়ালই মানুষের কোলে অথবা মানুষের গা ঘেঁষে ঘুমাতে পছন্দ করে। এর প্রধান কারন হচ্ছে বিড়াল উষ্ণস্থান পছন্দ করে। শীতকালে অনেক সময় অনেক বিড়ালকে উষ্ণতার খোঁজে রৌদ্রস্নান করতে দেখা যায়। বয়স্ক এবং মা বিড়ালকে বাচ্চা নিয়ে ঘরের উষ্ণস্থানটি খুঁজতে থাকে। বিড়ালের শরীরে লোম বেশি থাকলেও তারা শীত বেশি লাগে। এসময় বিড়ালকে বেশি অসুস্থ হতে দেখা যায়। তাই শীতকালে আপনার পোষা বিড়ালটি প্রয়োজন কিছু বাড়তি যত্নের।
              <br /> <br />
              <b>১। নরম এবং উষ্ণ বিছানা:</b>
              স্বভাবতই বিড়াল ঘুমাতে অনেক পছন্দ করে। 猫のベッドআর শীতকালে তাদের ঘুমানোর জন্য চাই একটি নরম ও উষ্ণ বিছানা। আজকাল বিড়ালের জন্য আলাদাভাবে Cat Bed or Cat house কিনতে পাওয়া যায়। ঘরের কোনায় তার জন্য পছন্দের একটি বিছানা তৈরি করে দিন অথবা আপনার সাথে কম্বলের উপর ঘুমাতে দিন। এতে করে সে ঘুমিয়ে আরাম পাবে এবং ঠাণ্ডায় কষ্ট হবে না।
              <br /> <br />
              <b>২। রৌদ্রস্নান (Sunbath):</b>
              বিড়ালকে রৌদ্রস্নান করতে দিন। ঘরের যে পাশে দিনের বেলা রোদ আসে, সেদিকের পর্দা সরিয়ে উন্মুক্ত করে দিন যাতে করে ঘরের ভেতর রোদ আসতে পারে। বিড়াল রোদের আলোর উষ্ণতা খুব পছন্দ করে।
              <br /> <br />
              <b>৩। বিড়ালের খাওয়া:</b>
              খেয়াল রাখতে হবে বিড়াল ঠিক মত খাওয়া দাওয়া করছে কিনা। বিড়ালকে তার বয়স অনুযায়ী খাওয়া অত্থবা Cat Food খাওয়াতে হবে যাতে সে সঠিক ক্যালোরি পায়। প্রয়োজনে খাবার বাড়াতে অথবা কমাতে হবে। রেফ্রিজারেটর এর ঠাণ্ডা খাবার গরম করে দিতে হবে, সরাসরি ঠাণ্ডা খাবার দিলে বিড়ালের ঠাণ্ডা লেগে জ্বর হতে পারে।
              <br /> <br />
              <b>৪। গোসল অথবা Grooming:</b>
              বিড়াল স্বভাবতই পরিষ্কার প্রাণী এবং তারা পানি পছন্দ করে না। শীতকালে বিড়ালকে গোসল না করানই ভালো, এতে জ্বর এসে নিউমনিয়া হয়ে যাওয়ার সম্ভবনা থাকে। খুব যদি প্রয়োজন মনে হয় তাহলে হালকা গরম পানিতে গোসল করিয়ে, ভালো ভাবে তোয়ালে দিয়ে মুছিয়ে দিতে হবে। প্রয়োজনে Hair Dryer দিয়ে শুকিয়ে উষ্ণস্থানে রেখে দিতে হবে।
              <br /> <br />
              <b>৫। Activity ও খেলেধুলা:</b>
              শীতকালে সব প্রাণীর মধ্যেই একটু অলসতা দেখা দেয়। বিড়াল এ সময় তুলনামুলকভাবে বেশি ঘুমায়। তাই তার সাথে প্রতিদিন একটু সময় খেলাধুলা করতে হবে এবং খেয়াল রাখতে হবে তার Activity ঠিক আছে কিনা।
              <br /> <br />
              <b>৬। গ্যারেজ অথবা Basement নিরাপদ নয়:</b>
              আপনার বিড়াল যদি নিয়মিত বাইরে যায় তাহলে এখনি নেট লাগিয়ে দিন যাতে বাইরে যেতে না পারে। শীতকালে বিড়াল উষ্ণ জায়গা খুঁজে আর গ্যারেজ এ গাড়ির ইঞ্জিনের উষ্ণতা পাওয়ার জন্য গাড়ির নিচে অথবা চাকার উপরে ঘুমিয়ে থাকে। এতে করে অসাবধানতাবশত দুর্ঘটনা ঘটতে পারে অথবা বেশি তাপে শরীরের যে কোন অংশ পুড়ে যেতে পারে।
              <br /> <br />
              <b>৭। প্রয়োজনীয় চিকিৎসা ও টিকা দিতে হবে:</b>
              শীতকাল আসার আগেই বিড়ালকে রোগ প্রতিরোধ করার জন্য টিকা দিতে হবে। এছাড়া জ্বর, কাশি হলে যত তাড়াতাড়ি সম্ভব নিকটস্থ vet এর কাছে নিয়ে যেতে হবে।</p>
          </div>

          {/* social media links */}
          <div className='flex gap-4 text-white mt-5'>
            <div className='bg-[#365493] rounded-full'><TiSocialFacebook className='m-2' /></div>
            <div className='bg-black rounded-full'><RiTwitterXLine className='m-2' /></div>
            <div className='bg-[#cb2027] rounded-full'><FaPinterest className='m-2' /></div>
            <div className='bg-[#0274b3] rounded-full'><TiSocialLinkedin className='m-2' /></div>
          </div>
        </div>
        {/* right part for larger device */}
        <div className="">
          <div className='hidden lg:block'>
            <img src={demoAdsImg} alt="" />
          </div>

          {/* recent posts */}
          <div className='mt-10'>
            <div>
              <h2 className='font-semibold text-xl'>RECENT POSTS</h2>
              <div className='flex flex-col gap-4 mt-6 lg:mt-4'>
                {
                  recentPosts?.map((post, index) => (
                    <div key={index}>
                      {console.log(post.title)}
                      <div className='flex gap-3'>
                        <div className=''>
                          <img className='object-cover w-[75px] h-[70px]' src={post.imgName} alt="" />
                        </div>
                        <div className='w-3/4'>
                          <p className='text-sm md:text-base lg:text-sm'>{post.title}</p>
                          <div className='flex gap-3 text-gray-500'>
                            <p><small>{post.date}</small></p>
                            <p className='text-xm'><small> {post.comments}</small></p>
                          </div>
                        </div>
                      </div>
                      {
                        (index != (recentPosts.length - 1)) &&
                        <hr className="mt-3" />
                      }
                    </div>
                  ))
                }

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* more read section */}
      <div className='mt-14 pb-10'>
        <h2 className='font-semibold text-xl'>আরো পড়ুন</h2>
        <div className='grid lg:grid-cols-4 gap-8 mt-6'>
          <div className='lg:col-span-3'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10'>
              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>

              <div>
                <div>
                  <img className='object-contain' src={blogImg} alt="" />
                </div>
                <div>
                  <p className='text-gray-500 mt-2'><small>Cat Basics</small></p>
                  <p className='text-sm font-semibold mt-1'>How To Have a Better Relationship With Your Cat</p>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden lg:block'>
            <div>
              <img className='object-cover h-[300px]' src={demoAdsImg} alt="" />
            </div>
            <div className='mt-4'>
              <img className='' src={blogImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog_Details