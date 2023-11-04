import React from 'react'
import "./main.css"
import { Leftbar } from './Leftbar';
import Profilesection from './Profilesection';
import SkillsSection from './SkillsSection';
import ProjectSection from './ProjectSection';

const Main = () => {
  return (
    <div className="main-div">
   <Leftbar/>
    {/* rght side desing */}
    <div className="right-part">
      <div className="div1 Profile-section">
       <Profilesection />
      </div>
      <ProjectSection/>
      <SkillsSection/>
      
      <div className="div1 images-section">
        <div className="link1">
          <img src="https://media.istockphoto.com/id/1019786066/vector/shopping-bags-flat-icon-on-blue-background.jpg?s=612x612&w=0&k=20&c=wjB-aoRJ1Ik0qTGB4_Z2x0DVoEW0qm3xxq7FXkIDSgc=" alt='hello'></img>
          
        </div>
        <div className="link1">
          <img src="https://media.istockphoto.com/id/1383881949/vector/megaphone-3d-in-3d-style-cartoon-illustration-with-megaphone-3d-3d-realistic-render-vector.jpg?s=612x612&w=0&k=20&c=butLaKVFmMuX_v8PsuihYVMjKxmm6LluMl5AcpSnL1Q=" alt='hello'></img>
         
        </div>
        <div className="link1">
          <img src="https://media.istockphoto.com/id/1160468321/vector/video-player-widescreen-icon-silhouette.jpg?s=612x612&w=0&k=20&c=frcE9PnrqhAqrVKIa0x0bWPEG_7yTNC6bYXL3Hmy-FU=" alt='hello'></img>
         
        </div>
        <div className="link1">
          <img src="https://media.istockphoto.com/id/1095638352/vector/light-bulb-with-long-shadow-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=CX7HAXCg9iohpGOeAn8TOAsTgdYQH9RawE7MdH1e_0A=" alt='hello'></img>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Main