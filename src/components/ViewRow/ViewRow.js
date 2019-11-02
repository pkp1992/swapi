import React from 'react'
import PropTypes from "prop-types";




 const ViewRow = ({ left, right }) => (
   <div className="main">
     <div className="main_block">
       <div className="list">{left}</div>
       <div className="single">{right}</div>
     </div>
   </div>
 );

ViewRow.propTypes = {
  left : PropTypes.node,
  right : PropTypes.node,
}


export default ViewRow;