import React from 'react';
import ReactLoading from 'react-loading';
 
const Loaading = ({ type, color,msg='' }) => (
    <div className="loading">
        
    <ReactLoading  type={type} color={color}   height={'50px'} width={'50px'}  />
  
    <div style={{color: "#FFFFFF"}} className="loading-txt">{msg}  </div>
    </div>
);
 
export default Loaading;