import React from 'react'
import { Button, TextInput } from 'flowbite-react'
import PrimaryButton from './ButtonPrimary'

function SearchBoxComponent() {
  return (
    <div>
    <form action="#" className='flex flex-col sm:flex-row gap-2 sm:gap-0'>
    <div className='mt-[11px]'>
      <TextInput id="email1" type="email" placeholder="Enter your email" className='sm:w-[500px] w-[300px]'/>
      </div>
      <Button type='submit'>
        <PrimaryButton text="Search"/>
      </Button>
      </form>
    </div>
  )
}

export default SearchBoxComponent
