'use client';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Image from 'next/image';
import { useState } from 'react'

function SearchManufacturer({manufacturer, setManufacturer} : SearchManufacturerProps) {
    // const [selectedPerson, setSelectedPerson] = useState(manufacturers[0])
    const [query, setQuery] = useState('')

    const filtered_manufacturers =
        query === ''
            ? manufacturers
            : manufacturers.filter((manufacturer) => {
                return manufacturer.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={manufacturer} onChange={setManufacturer} onClose={() => setQuery('')}>
            <ComboboxButton className='absolute top-[14px]'>
                <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt="Car Logo" />
            </ComboboxButton>
            <ComboboxInput placeholder='Volkswagon' aria-label="Assignee" onChange={(event) => setQuery(event.target.value)} className={'search-manufacturer__input cursor-text'} />
            <ComboboxOptions anchor="bottom start" className="empty:hidden bg-white w-1/2">
                {filtered_manufacturers.map((manufacturer) => (
                    <ComboboxOption key={manufacturer} value={manufacturer} className="data-[focus]:bg-blue-100">
                        {manufacturer}
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    )
}

export default SearchManufacturer


