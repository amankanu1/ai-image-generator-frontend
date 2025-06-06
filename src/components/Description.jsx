import React from 'react'
import { assets } from '../assets/assets'
import {motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div  initial={{opacity:0.2,y:100}}   transition={{ duration : 1}} whileInView={{opacity : 1 , y:0}} viewport={{once : true}} className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1}at= "" className='w-80 xl:w-96 rounded-lg'/> 
      <div>
        <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered text to image generator</h2>
        <p className='text-gray-600 mb-4'>
        Text-to-image AI is a type of artificial intelligence that can generate images from text descriptions. This technology has the potential to transform how we interact with and create visual content.
        </p>
      </div>
      </div>

    </motion.div>
  )
}

export default Description

