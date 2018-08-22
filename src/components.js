import React from 'react'
import ReactDOM from 'react-dom'

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false
    }
    this.onDropdownClick = this.onDropdownClick.bind(this); 
    this.onLinkClick = this.onLinkClick.bind(this);  
  }

  onDropdownClick(e) {
    this.setState((prevState) => {isOpen: !this.state.isOpen})
  }

  onLinkClick(e) {
    this.props.onLinkClick(e)
  }

  render() {
    return (
      <div className={`menu-button-wrapper ${this.state.isOpen ? 'dropdownOpen' : 'dropdownClosed'}`} onClick={this.onDropdownClick}>
        <span>Menu</span>
        <div className="menu-dropdown" onClick={this.onDropdownClick}>
          <span className="menu-dropdown-content">
            <a onClick={this.onLinkClick} data-section="about">About / Memberships</a>
            <a onClick={this.onLinkClick} data-section="faqs">Faqs</a>
            <a onClick={this.onLinkClick} data-section="contact">Contact</a>
          </span> 
        </div>
      </div>
    )
  }
}