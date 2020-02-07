import React from 'react'

export const data = {
  home_page: {
    title: "Home",
    windows: [
      {
        windowHeader: true,
        top: '28vh',
        left: "45vw",
        width: "50vw",
        maxHeight: '65vh',
        header:(
          <React.Fragment>
            <h2 className="section-title">News!</h2><h2 className="date">Updated 8/28</h2>
          </React.Fragment>
        ),
        body: (
          <React.Fragment>
            <h3 className="header">
              Spring Semester Sale!
            </h3>
            <p className="home-news">
              Our spring membership sale has already passed, so if you are interested in becoming involved but did not purchase a membership through us we suggest purchasing a regular membership through the gym and joining our GroupMe <a href="https://groupme.com/join_group/57155868/89fk2bMH" target="_blank">here</a>.
            </p>
            <h3 className="header">
              Spring memberships are active!
            </h3>
            <p className="home-news">
              Spring memberships are active! If you purchased an Upper Limits membership this spring, it is active through May 31st. If you purchased a Climb So iLL membership, it is active through May 6th.
            </p>
            <h3 className="header">
              So iLL Showdown
            </h3>
            <p className="home-news">
              Stay tuned for information about the So iLL Showdown, this semester's subsidized competition.
            </p>
          </React.Fragment>
        )
      },
    ]
  },
  about_page: {
    title: 'About',
    windows: [
      {
        windowHeader: false,
        top: '28vh',
        left: "45vw",
        width: "45vw",
        maxHeight: '31vh',
        sectionHeader: "About the Club",
        copy: "WU Climbing Club is a group organized around a mailing list that gives you access to events, semester membership deals and trip information. Club members may meet up to climb together but there is no formal structure. To join, just sign up for our mailing list or check out this site regularly."
      },
      {
        windowHeader: false,
        top: '62vh',
        left: "45vw",
        width: "45vw",
        maxHeight: '31vh',
        sectionHeader: "About the Team",
        copy: "WU Climbing Team is an informal group of students that carpool to and climb together at the gym several days a week, as well as optionally compete in competitions and climb outdoors on the weekends. Practices happen three days a week, and outdoor trips/competitions occur throughout the semester. There is no team coach; team leadership members will help new climbers get started, teaching new members how to belay and climbing basics, but the majority of teaching and learning is cooperative."
      }
    ]
  },
  faqs_page:{
    title: 'Faqs',
    faqs: [
      ["What do we do?", "We climb!"],
      ["How do I get a membership?", "We sell subsidized memberships at a discounted price twice a year, near the beginning of each semester. Check out the memberships page for more info."],
      ["Where do we climb?", "Members of the club can choose to climb at the Upper Limits or Climb So Ill gyms (or both). Team practices will be at the Maryland Heights and Chesterfield locations of Upper Limits. As for outdoor climbing, weekend trips are led to Jackson Falls, the Holy Boulders, Horseshoe Canyon Ranch, Perf Marquette, and more! Every year the team leads a Fall Break trip to the Bread River Gorge, and last year’s Spring Break took us to Shelf Road in Colorado!"],
      ["What kind of time commitment is the team?", "Team members are strongly encouraged to attend at least two practices a week and to participate in the competitions and outdoor trips that happen every couple weeks. Although there is no requirement for attending practices and events, it is expected that team members do so in order to participate in the community."],
      ["Is there a skill requirement to join the club or team?", "No way! We welcome climbers of all experience and skill levels. Team members help with teaching hard skills and technique."]
    ],
    windows: [
      {
        windowHeader: false,
        top: '28vh',
        left: "45vw",
        width: "50vw",
        maxHeight: '65vh',
      },
    ]
  },
  trips_page: {
    windows: [
      {
        windowHeader: false,
        top: '28vh',
        left: "45vw",
        width: "45vw",
        maxHeight: '31vh',
        sectionHeader: "Trips!",
        copy: `Members of the club organize, lead and participate in a number of outdoor climbing trips each school year. Larger trips include a Labor Day trip to Horseshoe Canyon Ranch, a Fall Break trip to the Red River Gorge, and a Spring Break trip to a to be determined destination. All trips are optional, and for larger trips with limited space priority is given to members who particpate in weekly practices.

        Smaller trips, on the fly trips happen most weekends and go to local spots like Jackson Falls, the Holy Boulders and the renowned Pere Marquette SP.`
      },
      {
        windowHeader: false,
        top: '62vh',
        left: "45vw",
        width: "45vw",
        maxHeight: '31vh',
        sectionHeader: "Comps!",
        copy: "Club members are encouraged - but not required - to compete in local climbing competitions happening throughout the school year. At the comps, we work together, cheer each other on, and party. Climbing competitions are oriented towards varying skill levels, so they are a good time for all. The two comps that we frequently attend are the Holy Boulders Testament, and the So Ill Showdown. Keep an eye out for news on those comps, as we are often able to reimburse tickets!"
      }
    ]
  },
  memberships_page:{
    title: 'Memberships',
    windows: [
      {
        windowHeader: false,
        top: '28vh',
        left: "45vw",
        width: "45vw",
        maxHeight: '65vh',
        sectionHeader: "Membership Sale January 21st",
        copy: `Our spring membership sale has already passed, so if you are interested in becoming involved but did not purchase a membership through us we suggest purchasing a regular membership through the gym and joining our GroupMe <a href="https://groupme.com/join_group/57155868/89fk2bMH" target="_blank">here</a>.

        The Climbing Team will be practicing at Upper Limits this semester.`,
        body: (
          <React.Fragment>
          <p>
            The Climbing Team will be practicing at Upper Limits this semester.
            Memberships will last until May 31st.
          </p>
          <span style={{color: "darkorange"}}>
            <h3>Upper Limits Membership Deal</h3>
            <h4 style={{fontWeight: "300"}}>Student Price: $120, Graduate Student / Faculty / Staff Price: $160</h4>
          </span>
            <ul>
              <li>Unlimited Climbing Access to all 4 Upper Limits Gyms</li>
              <li>20% Pro Shop Discount</li>
              <li>1 free Rock Gym 101 class OR Lead 101 Class</li>
              <li>$20 discounted access to the Maryland Heights Boardroom</li>
            </ul>
          <br></br>
          <span style={{color: "green"}}>
            <h3>Climb So Ill Membership Deal</h3>
            <h4 style={{fontWeight: "300"}}>Student Price: $140, Graduate Student / Faculty / Staff Price: $180</h4>
          </span>
            <ul>
              <li>Premium Membership</li>
              <li>Free Belay class and free Bouldering class. </li>
              <li>Gear package deal for up to 25% off for harness, shoes and chalk bags.</li>
              <li>Unlimited access to Climb So Ill gym </li>
            </ul>
          </React.Fragment>)
      },
    ]
  },
  contact_page:{
    title: 'Contact',
    windows: [
      {
        windowHeader: false,
        top: '28vh',
        left: "45vw",
        width: "50vw",
        maxHeight: '300px',
        sectionHeader: "Contact!",
        body: (
          <span className="contact">
            <span>
              <h2>Email : </h2>
              <h3>wuclimbing@gmail.com</h3>
            </span>
            <span>
              <h2>Mailing List Subscribe: </h2>
              <a href="http://eepurl.com/gCMOJ5" target="_blank">subscribe link</a>
            </span>
            <span>
              <h2>Mailing List Unsubscribe: </h2>
              <a href="https://gmail.us4.list-manage.com/unsubscribe?u=b83c6ceec65e1f78b6f143739&id=e749fd9fee" target="_blank">unsubscribe link</a>
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
        )
      },
    ]
  },
}
