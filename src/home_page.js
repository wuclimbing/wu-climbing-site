import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from 'home_page'
import AboutPage from 'about_page'
import FaqsPage from 'faqs_page'
import ContactPage from 'contact_page'

export class HomePage extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 'Home'
    }
  }

  render() {

    switch(this.state.page) {
      case 'About':
        this.page = <AboutPage/> 
        break;

      case 'Faqs':
        this.page = <FaqsPage/> 
        break;

      case 'Contact':
        this.page = <ContactPage/> 
        break;

      case 'Home':
        this.page = <HomePage/> 
        break;
    }


    return (
      <div className="site-wrapper">
        {this.page}
      </div>
    )
  }
}