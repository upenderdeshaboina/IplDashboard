import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: {},
    recentMatchList: [],
    isSpinner: true,
    teamBanner: '',
  }

  componentDidMount() {
    this.getDataOfTeam()
  }

  getDataOfTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()
    const data = {
      teamBannerUrl: jsonData.team_banner_url,
      latestMatchDetials: jsonData.latest_match_details,
      recentMatches: jsonData.recent_matches,
    }
    const {latestMatchDetials, recentMatches, teamBannerUrl} = data
    const latestOne = {
      umpires: latestMatchDetials.umpires,
      result: latestMatchDetials.result,
      manOfMatch: latestMatchDetials.man_of_the_match,
      id: latestMatchDetials.id,
      date: latestMatchDetials.date,
      venue: latestMatchDetials.venue,
      competingTeam: latestMatchDetials.competing_team,
      competingTeamLogo: latestMatchDetials.competing_team_logo,
      firstInnings: latestMatchDetials.first_innings,
      secondInnings: latestMatchDetials.second_innings,
      matchStatus: latestMatchDetials.match_status,
    }
    const matchesList = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      latestMatch: latestOne,
      recentMatchList: matchesList,
      isSpinner: false,
      teamBanner: teamBannerUrl,
    })
    console.log(latestOne)
  }

  render() {
    const {latestMatch, recentMatchList, isSpinner, teamBanner} = this.state
    return (
      <div>
        {isSpinner ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-container">
            <img src={teamBanner} alt="team banner" className="banner" />
            <h3 className="latest">Latest Matches</h3>
            <LatestMatch details={latestMatch} key={latestMatch.id} />
            <ul className="match-card-container">
              {recentMatchList.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
