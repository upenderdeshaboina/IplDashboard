// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    manOfMatch,
    result,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details
  return (
    <div className="latest-match-container">
      <div className="img-team-info-container">
        <div className="first-info-container">
          <p className="heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-img"
        />
      </div>
      <div className="rest-info-container">
        <h3 className="rest-headings">First Innings</h3>
        <p className="paras">{firstInnings}</p>
        <h3 className="rest-headings">Second Innings</h3>
        <p className="paras">{secondInnings}</p>
        <h3 className="rest-headings">Man of The Match</h3>
        <p className="paras">{manOfMatch}</p>
        <h3 className="rest-headings">Umpires</h3>
        <p className="paras">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
