import React from "react";

const Hoc=(Component)=>{
    return(
        class extends React.Component{
            state ={
                auth:true
            } 
    
            render(){
                return(
                    <div>
                    <center>{this.state.auth?<Component name="Jagan"/>:<h1>Please Login!</h1>}</center>
                    </div>
                )
            }
        }
    )
}
export default Hoc;