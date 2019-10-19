import React from 'react'

 const ViewRow = ({ left, right }) => (
   <div className="main">
     <div className="main_block">
       <div className="list">{left}</div>
       <div className="single">{right}</div>
     </div>
   </div>
 );

export default ViewRow;