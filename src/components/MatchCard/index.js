// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    result,
    id,
    competingTeam,
    competingTeamLogo,
    matchStatus,
    firstInnings,
  } = matchDetails
  console.log(competingTeam)
  console.log(firstInnings)
  return (
    <li className="card-ele" id={id}>
      <div className="card-match-container">
        <img
          src={competingTeamLogo}
          className="logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-head">{competingTeam}</p>
        <p className="card-result">{result}</p>
        <p className={`win-or-lose ${matchStatus === 'Won' ? 'green' : 'red'}`}>
          {matchStatus}
        </p>
      </div>
    </li>
  )
}
export default MatchCard
