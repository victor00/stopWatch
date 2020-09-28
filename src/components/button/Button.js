import React, {Component} from 'react';



import "./styles.css";



const Button = (props) => {
      
        return (
                
            <div className="button">
                <div className="actions">
                    <button className={props.displayBtnName} onClick={props.action}> 
                        {props.displayBtnName}  
                    </button>
                </div>
            </div>
                    
        );    
}





export default Button;