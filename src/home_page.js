import React from 'react'
import Masonry from 'react-masonry-component'
import {data as data} from './siteData'
import {WindowContainer as WindowContainer} from './components'
import _ from 'lodash'
const images = {}

function importAll(r) {
  r.keys().forEach(key => images[key] = r(key));
}

importAll(require.context('./images', false, /[\w]+\.[jpg]/));

const masonryOptions = {
  transitionDuration: 0
};
 
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'contact'
    }
    this.data = data
    this.onLinkClick = this.onLinkClick.bind(this)

    this.imageGrid = Object.values(images)
    this.imageGrid = _.shuffle(this.imageGrid)

    this.imageGrid.map(src => {
      this.imageGrid.push(<img key={src} src={src} className="image-element-class"></img>)
    })
  }

  onLinkClick(e) {
    this.setState({page : e.target.getAttribute('data-section')})
  }

  render() {
    console.log(this.data)

    switch(this.state.page) {
      case 'about':
        this.page = (
          <WindowContainer
            className="club-name"
            top='28%'
            left='40%'
            width='50%'
          >
          <p className="home-copy">
            Welcome to the official website of the wash u climbing club. Check out here for information on memberships, club practices, cool events, good stories, sick pics and other junk.
          </p>
          </WindowContainer>) 
        break;

      case 'faqs':
        this.page = (
          <WindowContainer
            className="club-name"
            top='28%'
            left='40%'
            width='50%'
          >
          {this.data['faqs_page'].faqs.map((faq, index) => { 
              return (
                <div className="faq" key={faq + index}>
                  <h2>{faq[0]}</h2>
                  <h3>{faq[1]}</h3>
                </div>
              )
            })}
          </WindowContainer>)
        break;

      case 'contact':
        this.page = (
          <WindowContainer
            className="club-name"
            top='28%'
            left='35%'
            width='50%'
          >
          <span className="contact">
            <span>
              <h2>Email : </h2>
              <h3>wuclimbing@gmail.com</h3>
            </span>
            <span>
              <h2>Mailing List Subscribe: </h2>
              <a href="http://climbing.wustl.edu/mailman/listinfo/wuclimbing_climbing.wustl.edu" target="_blank">subscribelink</a>
            </span>
            <span>
              <h2>Mailing List Unsubscribe: </h2>
              <a href="http://climbing.wustl.edu/mailman/options/wuclimbing_climbing.wustl.edu" target="_blank">unsubscribe link</a>
            </span>
            <span>
              <h2>Facebook : </h2>
              <a href="https://www.facebook.com/groups/WUclimbing/" target="_blank">facebook Page</a>
            </span>
            <span>
              <h2>Insta : </h2>
              <a href="https://www.instagram.com/wu_climbing/" target="_blank">insta Page</a>
            </span>
          </span>
          </WindowContainer>)
        break;

      case 'home':
      default:
        this.page = (
          <WindowContainer
            className="club-name"
            top='28%'
            left='40%'
            width='50%'
          >
          <p className="home-copy">
            Welcome to the official website of the wash u climbing club. Check out here for information on memberships, club practices, cool events, good stories, sick pics and other junk.
          </p>
          </WindowContainer>)
        break;
    }

    return (
      <div className="home-wrapper">
        <WindowContainer
          className="club-name"
          top="10%"
          left="10%"
        >
        <h5>Wash U Climbing Club</h5>
        </WindowContainer>
        <WindowContainer
          top="28%"
          left="10%"
        >
         <div className="links">
            <a onClick={this.onLinkClick} data-section="about">About / Memberships</a>
            <a onClick={this.onLinkClick} data-section="faqs">Faqs</a>
            <a onClick={this.onLinkClick} data-section="contact">Contact</a>
          </div>
        </WindowContainer>
        {this.page}
        <span className="grid-container">
          <Masonry 
            options={masonryOptions} 
            className="image-grid"
          >
          {this.imageGrid}
          </Masonry>
        </span>
      </div>
    )
  }
}