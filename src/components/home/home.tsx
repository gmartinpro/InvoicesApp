import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const Home: React.FC = () => {
  return (
    <div className='card-container'>
      {[
        { name: "DEVIS", link: "/devis" },
        { name: "In progress", link: "/" },
        { name: "In progress", link: "/" },
        { name: "In progress", link: "/" },
        { name: "In progress", link: "/" },
        { name: "In progress", link: "/" }
      ].map(x => (
        <a href={x.link} className='card'>
          {x.name}
          <div className='card-arrow'>
            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
          </div>
        </a>
      ))}
    </div>
  );
};
