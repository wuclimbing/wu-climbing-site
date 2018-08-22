import React from 'react'
import ReactDOM from 'react-dom'
import {data as data} from './siteData'
import './index.sass'

export class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className='home-wrapper'>
        <h5>Wash U Climbing Club</h5>        
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);