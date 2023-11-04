import React from 'react';

const ProjectSection = () => {
  return (
    <div className="div1 project-section">
      <table className='skills'>
        <tbody>
          <tr>
            <td>Present</td>
            <td colSpan="2">
              <i className="fa fa-star"></i> Learning with Geekster
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2" className='overViewData'>
              It's a learning program where tech and non-tech freshers can learn based on their interested tech stack and become full-stack developers.
            </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>BCA Completed</td>
            <td><i className="fa fa-star"></i> - Bachelors of Computer Application</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2" className='overViewData'>
              Created and socialized best practices for software development.
            </td>
          </tr>
          <tr>
            <td>2022</td>
            <td>MCA</td>
            <td><i className="fa fa-star"></i> Completed Masters of Computer Application</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2" className='overViewData'>Created and socialized best practices for software development.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectSection;