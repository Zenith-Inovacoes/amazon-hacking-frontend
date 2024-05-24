'use client';

import { NumberCardProps } from './types';
import { forwardRef, Ref, useEffect, useRef } from 'react';
import { cn } from '@/services/utils/className.utils';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import useCountingUpNumber from '@/hooks/useCountingUpNumber';
import { useInView } from 'framer-motion';

const NumberCard = forwardRef(
  (
    {
      title,
      image,
      altImage,
      number,
      className,
      interval,
      slowStartAnimation = true,
      isMarginNumber = true,
      ...props
    }: NumberCardProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const numberRef = useRef<HTMLDivElement>(null);
    const inView = useInView(numberRef, {
      amount: 0.5,
      once: true,
    });

    const { number: currentNumber, start } = useCountingUpNumber(number, {
      defaultPaused: true,
      slowStartAnimation,
      slowEndAnimation: true,
      interval,
    });

    useEffect(() => {
      if (inView) start();
      console.log(isMarginNumber);
    }, [inView, start, isMarginNumber]);

    return (
      <div
        ref={numberRef}
        className={cn(
          'group flex flex-col rounded-t-lg overflow-hidden w-full h-auto first:rounded-bl-[64px] last:rounded-br-[64px]',
          className
        )}
        {...props}
      >
        <div className="py-2 px-4 w-full bg-[#263238] flex justify-start items-center gap-2 lg:px-5">
          <span className="rounded-full h-2 w-2 bg-[#F5F5F5] shrink-0" />
          <span className="rounded-full h-2 w-2 bg-[#F5F5F5] shrink-0" />
          <span className="rounded-full h-2 w-2 bg-[#F5F5F5] shrink-0" />
        </div>
        <div className="bg-white h-full px-2 py-7 sm:px-10 flex gap-8 items-center justify-center md:group-first:flex-col">
          <div className="w-24 h-20 relative">
            <Image src={image} alt={altImage} fill />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 items-center justify-center">
              {isMarginNumber ? (
                <span className="text-36 text-primary-100">
                  <FaPlus />
                </span>
              ) : null}
              <span className="text-black text-50 font-bold tabular-nums min-w-24 text-center">
                {currentNumber}
              </span>
            </div>
            <span className="text-black font-normal text-20 leading-6 text-center lg:text-26 lg:leading-7">
              {title}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

NumberCard.displayName = 'NumberCard';

export default NumberCard;
