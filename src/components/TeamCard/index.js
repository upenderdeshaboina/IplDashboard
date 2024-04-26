// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list" id={id}>
        <div className="card-container">
          <img src={teamImageUrl} className="card-image" alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
