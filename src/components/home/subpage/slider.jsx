import React, {Component} from 'react'
import { getSlider } from '../../../api/slider'

import Slider from '../../../base/slider/'

export default class HomeSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderData: []
    }
  }

  componentWillMount() {
    let sliderData = sessionStorage.getItem('sliderData') &&
      JSON.parse(sessionStorage.getItem('sliderData'))
      
    if (sliderData && sliderData.length) {
      this.setState({
        sliderData: sliderData
      })

      return
    }

    getSlider().then(res => {
      this.setState({
        sliderData: res.data.data.slider
      })

      // 设置 sessionStorage
      sessionStorage.sliderData = JSON.stringify(this.state.sliderData)
    })

    
  }
  render() {
    return (
      <Slider SliderData={this.state.sliderData}/>
    )
  }
}