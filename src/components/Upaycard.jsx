import card3 from '../assets/card3.jpg';
import UpaycardFaqs from './UpaycardFaqs';


const lists = [
    {
    id: 1,
    title: 'UPaychat Mastercard',
    description:'Features: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    benefit: 'Benefit: Lorem, ipsum dolor.',
    imageUrl: card3,
    link: "GET STARTED"
    },

    {
    id: 2,
    title: 'UPaychat Visacard',
    description: 'Features: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    benefit: 'Benefits: Lorem, ipsum dolor.',
    imageUrl: card3,  
    link: "GET STARTED"
      
    }
]

const Upaycard = () => {
  return (
<div className="w-full bg-gray-100 py-10 px-4 my-[120px]">
        <div className=" text-center mx-auto max-w-7xl px-6 lg:px-8 mt-4">
           <h1 className="md:text-4xl text-gray-800 tracking-tight pt-10 sm:text-4xl font-bold">Apply for your UPaychat secured Mastercard today</h1> 
        <p className='mt-8 font-semibold text-lg leading-8 text-gray-800' >Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex flex-row">
            <div className="mx-auto grid max-w-[1240px] gap-x-8 gap-y-20 px-2 lg:col-span-2 md: pt-12">
               <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 shadow-lg shadow-gray-200">
               {lists.map((list) => (
            <li key={list.id}>
               <div className="flex justify-between text-center gap-x-2 gap-y-20">
                <img className="h-24 w-24 rounded-lg hover:scale-150 ease-in duration-200" src={list.imageUrl} alt="upaychat-card-image" />
                <div className='px-2 pb-20'>
                  <h3 className="font-extrabold text-2xl md:text-4xl sm:text-3xl leading-7 tracking-tight text-green-400">
                  {list.title}</h3>
                  <h2 className="text-xl py-2 font-bold leading-6 text-gray-500">{list.description}</h2>
                  <p className="text-xl py-2 font-bold leading-6 text-gray-500">{list.benefit}</p>
                   <a href='https://upaychat.com/login'> <h2 className='bg-green-400 text-white p-4 m-8 cursor-pointer sm:hover:bg-green-700 mx-20 rounded-lg'>{list.link}</h2> </a>
                </div>
              </div>
              </li>
               ))}
                </div> 
            </div>
        </div>
        <UpaycardFaqs />
    </div>
    )
}

export default Upaycard