import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
  return (
    <div className="div1 Skills-Section">
      <div className="part1">
        <table>
          <tbody>
            <tr>
              <td>HTML</td>
              <td className='star-icons'>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              </td>
            </tr>
            <tr>
              <td>CSS</td>
              <td className='star'>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              </td>
            </tr>
            <tr>
              <td>JS</td>
              <td className='star'>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              </td>
            </tr>
            <tr>
              <td>Java</td>
              <td className='star'>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              </td>
            </tr>
            <tr>
              <td>React</td>
              <td className='star'>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="part2">
        <table>
          <tbody>
            {/* first */}
            <tr>
              <th>Zapier</th>
              <td>Organize your life with software development</td>
            </tr>
            {/* second */}
            <tr>
              <th>Spoke</th>
              <td>Is 40 hours a week too much? Here's what history and science says</td>
            </tr>
            {/* third */}
            <tr>
              <th>nDash</th>
              <td>It’s not a bug. It’s an undocumented feature!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsSection;