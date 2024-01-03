import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Data } from './data'
function ContentSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        prevArrow: <button className="slick-prev">Left</button>,
        nextArrow: <button className="slick-next">Right</button>,
    };
    return (
        <Carousel{...settings}> 
            <div>
                <h1>{Data[0].testimonial.text}</h1>
                <b>{Data[0].testimonial.reviewer_name}</b>
                <p>{Data[0].testimonial.reviewer_designation}</p>
            </div>
            <div>
                <h1>{Data[0].testimonial.text}</h1>
                <b>{Data[0].testimonial.reviewer_name}</b>
                <p>{Data[0].testimonial.reviewer_designation}</p>
            </div>
        </Carousel>
    )
}

export default ContentSlider
const Carousel=styled(Slider)`
    margin-top:20px;
    ul li button{
        &:before{
            font-size:10px;
            color:white;
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:hidden;
    }
    button{
        z-index:1;
    }
    .slick-prev,
.slick-next {
  font-size: 18px;
  line-height: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
}

.slick-prev {
  left: 10px;
}

.slick-next {
  right: 10px;
}

`
const Wrap=styled.div`
    cursor:pointer;
    img{
        border:4px solid transparent;
        border-radius:4px;
        width:400px;
        height:100%;
        box-shadow:rgb(0 0 0/69%)0px 20px 30px -10px,
        rgb(0 0 0/73%),0px 16px 10px -10px;    
        &:hover{
            border:2px solid rgba(249,249,249,0.8);
        }
    }
`