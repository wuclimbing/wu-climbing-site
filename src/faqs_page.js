import React from 'react'
import ReactDOM from 'react-dom'
import {data as data} from './siteData'
import MenuButton from './components'

export default class FaqsPage extends React.Component {
  constructor() {
    super()

  }

  render() {
    this.data = data.faqs_page
    return (
      <div className="faqs-page-wrapper">
        <div className="faqs-page-inner">
            {this.data.faqs.map((faq, index) => { 
              return (
                <div className="faq" key={faq + index}>
                  <h2>{faq[0]}</h2>
                  <h3>{faq[1]}</h3>
                </div>
              )
            })}
            <MenuButton
              onLinkClick={this.props.onLinkClick}
            /> 
        </div>
      </div>
    )
  }
}