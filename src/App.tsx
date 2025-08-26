import React, { Component } from 'react'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/ChangeColor'
import ChangeColor from './components/ChangeColor'
import CheckBox from './components/CheckBox'
import Form from './components/Form'
import Select from './components/Select'
import Toggle from './components/Toggle'
import Bai9 from './components/Bai9'
import CountText from './components/CountText'

export default class App extends Component {
  render() {
    const boxStyle: React.CSSProperties = {
      border: '2px solid red',
      padding: '16px',
      marginBottom: '16px'
    }

    return (
      <div>
        <div style={boxStyle}><Bai1 /></div>
        <div style={boxStyle}><Bai2 /></div>
        <div style={boxStyle}><Bai3 /></div>
        <div style={boxStyle}><Toggle /></div>
        <div style={boxStyle}><Form /></div>
        <div style={boxStyle}><CountText /></div>
        <div style={boxStyle}><Select /></div>
        <div style={boxStyle}><CheckBox /></div>
        <div style={boxStyle}><Bai9 /></div>
      </div>
    )
  }
}
