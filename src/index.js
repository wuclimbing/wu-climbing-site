import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home_page.js'
import './index.sass'

export class App extends React.Component {
  constructor() {
    super()
  }  

  render() {
    return(
      <div className='site-wrapper'>
        <HomePage/> 
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);