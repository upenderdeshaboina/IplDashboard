// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isSpinner: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const {teams} = jsonData
    const teamsData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: teamsData, isSpinner: false})
  }

  render() {
    const {teamCardList, isSpinner} = this.state
    return (
      <div className="container">
        <div className="img-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            className="heading-logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isSpinner ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="list-container">
            {teamCardList.map(eachItem => (
              <TeamCard details={eachItem} key={eachItem.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default Home
