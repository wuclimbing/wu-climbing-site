import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

export class MenuButton extends React.Component {
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

export class WindowContainer extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      isVisible : true,
      isMouseDown : false,
      transform : {top: 0, left: 0},
      prevTransform: {top: 0, left: 0},
      mouseStart : {top: 0, left: 0},
    }
    this.containerRef = React.createRef()
    this.onCloseClick = this.onCloseClick.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
  }

  onCloseClick(){
    this.setState({isVisible : false})
  }

  componentDidMount() {
    $(window).mousemove(e => {
      if(this.state.isMouseDown) {
        const diffX = e.pageX - this.state.mouseStart.left
        const diffY = e.pageY - this.state.mouseStart.top

        this.setState((prevState, props) => ({
          transform : {top: prevState.prevTransform.top + diffY, left: prevState.prevTransform.left + diffX}
        }));
      }
    }).mouseup(e => {
      this.setState((prevState, props) => {return {
        isMouseDown : false,
        prevTransform : prevState.transform,
      }})
    })
  }

  onMouseDown(e) {
    if(!this.state.isMouseDown) {
      this.setState({
        isMouseDown : true,
        mouseStart : {top: e.pageY, left: e.pageX},
      })
    }
  }

  componentWillUnmount() {
    $(window).off('mousemove').off('mouseup')
  }

  render() {
    console.log(`translate(${this.state.transform.left}px ${this.state.transform.top}px)`)
    const style = {
      display : (this.state.isVisible) ? 'inline-block' : 'none',
      transform : `translate(${this.state.transform.left}px, ${this.state.transform.top}px)`,
      top: this.props.top,
      left: this.props.left,
      width: this.props.width
    }

    return (
      <div className="window-container" style={style} onMouseDown={this.onMouseDown} ref={this.containerRef} onClick={this.props.onClick}>
        <header className="window-container-header">
          <input type="button" onClick={this.onCloseClick} value="X"/>
        </header>
        {this.props.children}
      </div> 
    )
  }  

}