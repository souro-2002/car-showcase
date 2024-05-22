import { CarProps } from '@/types';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'


interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const capitalize = (text : string) => {
    let words: string[] = text.split('_');
    for(let i = 0;i < words.length ; i++){
      let word = words[i];
      words[i] = word[0].toUpperCase().concat(word.substring(1));
    }
    return words.join(' ')
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className={'relaitve z-10'} onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-in duration-300"
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-out duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-50' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className={'relative max-w-lg w-full max-h-[90vh] flex flex-col overflow-y-auto transform rounded-2xl bg-white shadow-xl text-left transition-all gap-5'}>
                  <button type="button" onClick={closeModal} className='absolute top-2 right-2 z-10 bg-primary-blue-100 w-fit p-2 rounded-full'>
                    <Image
                      src={'/close.svg'}
                      alt='Close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>

                  <div className='flex flex-1 flex-col gap-3'>
                    <div className='relative w-full bg-pattern bg-cover bg-center h-40 rounded-lg'>
                      <Image src="/hero.png" alt="car-model" fill priority className='object-contain' />
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src="/hero.png" alt="car-model" fill priority className='object-contain' />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src="/hero.png" alt="car-model" fill priority className='object-contain' />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src="/hero.png" alt="car-model" fill priority className='object-contain' />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-wrap flex-col flex-1 mt-3 p-2 gap-4'>
                    <h2 className='text-xl font-semibold capitalize'>{car.make} {car.model}</h2>
                    <div className='flex flex-col flex-1 gap-2'>
                      {Object.entries(car).map(([key,value]) => (
                        <div key={key} className='flex justify-between text-lg w-full'>
                          <h4 className='font-medium text-gray-500'>{capitalize(key)}</h4>
                          <p>{typeof value === 'string' ? capitalize(value) : value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
