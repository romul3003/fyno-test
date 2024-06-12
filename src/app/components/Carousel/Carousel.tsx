'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import './styles.css'

import { NextArrow, PreviousArrow } from './components/Arrows'
import { FC, ReactNode } from 'react'

type CarouselProps = {
  children: ReactNode
  className?: string
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.85,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.89,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
}

export const Carousel: FC<CarouselProps> = ({ children, className }) => {
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
