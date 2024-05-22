"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react'

const CustomButton = ({title, containerStyles, handleClick,btnType,textStyles,rightIcon,isDisabled} : CustomButtonProps) => {
  return (
    <button
        disabled = {isDisabled || false}
        type={btnType || 'button'}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
    >
        <span className={textStyles}>
            {title}
        </span>
        {rightIcon ? <Image src={rightIcon} height={20} width={20} alt=''/> : null}
    </button>
    
  )
}

export default CustomButton
