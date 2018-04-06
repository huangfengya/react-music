import React, { Component } from 'react'

import Swiper from "react-slick"
import './index.less'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false
    }
    
    let listItem = this.props.SliderData.map((item, idx) => {
      return (
        <div key={idx}>
          <img src={item.picUrl} alt="" />
        </div>
      )
    })
    return (
      <Swiper {...settings}>
        {listItem}
      </Swiper>
    )
  }
}