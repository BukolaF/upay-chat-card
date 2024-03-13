import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import classNames from 'classnames';



const UpaycardFaqs = () => {
  return (
    <>
     <h1 className="flex justify-center items-center md:text-4xl text-gray-500 hover:text-green-400 tracking-tight pt-10 sm:text-4xl font-bold">FAQs</h1> 
        <ul className='items-center'>
         <li><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="m-2 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 md:text-2xl  text-green-300 shadow-xl ">
        What do I need to receive my Upaychat Mastercard® card?
          <MdOutlineArrowDropDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" right-0 z-10 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-green-300' : 'text-green-500',
                    'block px-4 py-2 text-xl'
                  )}
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.                
                </a>
              )}
            </Menu.Item>
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
    </li>
    <li><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="m-2 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 md:text-2xl  text-green-300 shadow-xl ">
        What do I need to receive my Upaychat Mastercard® card?
          <MdOutlineArrowDropDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-green-300' : 'text-green-500',
                    'block px-4 py-2 text-xl'
                  )}
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.                
                </a>
              )}
            </Menu.Item>
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
    </li>
    <li><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="m-2 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 md:text-2xl  text-green-300 shadow-xl ">
        What do I need to receive my Upaychat Mastercard® card?
          <MdOutlineArrowDropDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-green-300 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-green-300' : 'text-green-500',
                    'block px-4 py-2 text-xl'
                  )}
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.                
                </a>
              )}
            </Menu.Item>
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
    </li>
    </ul>
    </>
  )
}

export default UpaycardFaqs