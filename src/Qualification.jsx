import React from 'react'
import './Qualification.css'
import Qualicard from './Qualicard'
const Qualification = () => {
  return (
    <div>
   <div className="qualiservice">
      <div 
    
          className="left-service">
        <div className="service-name">
        <span>Education</span>
        <span>These are my some past qualifications</span>
      </div>
        </div>
      
        <div>
        <Qualicard
         pixles={"./images/cap.jpg"}
         course={"B-TECH | Computer Science"}
          college={"Shri Ram Group of College (MZN) ,"}
          address={"Muzaffarnagar, India."}
          grades={"A NAAC Reaccredited  'A' Grade College"}
       session={"pursuing"}
         />
       </div>


       <div>
       <Qualicard
         pixles={"./images/books.jpg"}
         course={" PCM | Science"}
          college={"Rakhee public school, SonjniTagan"}
          address={"Sonjhini,Muzn, India."}
          grades={"The Best CBSE Affiliated School in Sonjhini"

}
          session={"Completed 2020"}
         />
       </div>

       <div>
       <Qualicard
         pixles={"./images/laptop.jpg"}
          course={"Secondary certified"}
          college={"Growil Public school ,Shahpur "}
          address={"Muzaffarnagar, India."}
          grades={" The Best CBSE Affiliated School in Shahpur"

}
          session={"completed 2018"}
       
         />
       </div>



     
    



    
      
     </div>
   </div>
  
  )
}

export default Qualification
