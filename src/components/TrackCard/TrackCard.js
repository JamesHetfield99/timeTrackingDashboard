import "./trackCard.css"

import elipsisIcon from "../../images/icon-ellipsis.svg"

import workIcon from "../../images/icon-work.svg"
import exerciseIcon from "../../images/icon-exercise.svg"
import playIcon from "../../images/icon-play.svg"
import selfCareIcon from "../../images/icon-self-care.svg"
import socialIcon from "../../images/icon-social.svg"
import studyIcon from "../../images/icon-study.svg"

const TrackCard = ({ data, customClass}) => {
  const { thing, activeTime, lastWeekTime, icon} = data

  const iconObject = {
    work:workIcon,
    play:playIcon,
    exercise:exerciseIcon,
    selfCare:selfCareIcon,
    social:socialIcon,
    study:studyIcon
  }

  return (
    <article className={`grid-item ${customClass || ""}`} data-thing={thing}>
        <img src={iconObject[icon]} alt="thing icon" className="thing-icon" />
      <div className="card-wrapper">
        <div className="card-heading-wrapper">
          <span>{thing}</span>
          <img src={elipsisIcon} alt="icon" />
        </div>
        <div className="card-times-wrapper">
          <span className="active-time">{activeTime}hrs</span>
          <span className="last-time">Last Week - {lastWeekTime}hrs</span>
        </div>
      </div>
    </article>
  )
}

export default TrackCard
