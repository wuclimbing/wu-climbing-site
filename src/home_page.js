import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import AboutPage from './about_page.js'
import FaqsPage from './faqs_page.js'
import ContactPage from './contact_page.js'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home'
    }
    this.onLinkClick = this.onLinkClick.bind(this)
  }

  onLinkClick(e) {
    this.setState({page : e.target.getAttribute('data-section')})
  }

  render() {

    switch(this.state.page) {
      case 'about':
        this.page = <AboutPage onLinkClick={this.onLinkClick}/> 
        break;

      case 'faqs':
        this.page = <FaqsPage onLinkClick={this.onLinkClick}/> 
        break;

      case 'contact':
        this.page = <ContactPage onLinkClick={this.onLinkClick}/> 
        break;

      case 'home':
      default:
        this.page = '' 
        break;
    }

    return (
      <div className="home-wrapper">
        <h5>Wash U Climbing Club</h5>        
        <div className="links">
          <a onClick={this.onLinkClick} data-section="about">About / Memberships</a>
          <a onClick={this.onLinkClick} data-section="faqs">Faqs</a>
          <a onClick={this.onLinkClick} data-section="contact">Contact</a>
        </div>
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
        {this.page}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}