

import ProjectsDeveloped from '../projectsdetails/ProjectsDeveloped';
import Personaldetail from '../personaldetails/Personaldetail';






import React, { Component } from 'react'


 class Educationaldetails extends Component {
   
        state={
            next:1
        }
        change1(){
           this.setState({
               next:0
           })
        }
        change2(){
            this.setState({
                next:2
            })
         }
  render() {
      if(this.state.next===1){
    return (
        <div>
       <h3 style={{textAlign:"center",outline:"solid",outlineOffset:'8px', outlineColor:'#f4f0ec'}}>Educational  Details</h3>
        <form style={{backgroundColor:'#FAF9F6',width:'1000px', marginLeft:"180px" ,paddingBlockStart:'100px'}}>
            <div style={{display:'flex',columnGap:'50px',justifyContent:"flex-start", marginLeft:'100px'}}>
                <input  minLength= "5"  type="text" placeholder='College/University' style={{height:'23px',width:'250px'}}/>
                <input type='date' placeholder='dd-mm-yyyy' size='25' style={{height:'23px' ,width :'150px'}}/>
                <input type='date' placeholder='dd-mm-yyyy' size='25' style={{height:'23px' ,width :'150px'}}/>
            </div>
            <br></br>
            <div style={{display:'flex',columnGap:'50px',justifyContent:"flex-start", marginLeft:'100px'}}>
                <input minLength= "2" type="text" placeholder='Qualification' size='40' style={{height:'23px',width:'250px'}}/>
                <input minLength="5" type="text" placeholder='Description' size='40' style={{height:'23px',width:"355px"}}/>
            </div>
            <br></br>
            <div style={{display:'flex',columnGap:'50px',justifyContent:"flex-start", marginLeft:'100px'}}>
                <input minLength= "5" type="text" placeholder='School' style={{height:'23px',width:'250px'}}/>
                <input type='date' placeholder='dd-mm-yyyy' size='25' style={{height:'23px' ,width :'150px'}}/>
                <input type='date' placeholder='dd-mm-yyyy' size='25' style={{height:'23px' ,width :'150px'}}/>
            </div>
            <br></br>
            <div style={{display:'flex',columnGap:'50px',justifyContent:"flex-start", marginLeft:'100px'}}>
                <input  minLength="2 " type="text" placeholder='Qualification' size='40' style={{height:'23px',width:'250px'}}/>
                <input  minLength="5"  type="text" placeholder='Description' size='40' style={{height:'23px',width:"355px"}}/>
            </div>

        
        <br></br>
       <br></br>
       <div style={{display:'flex',marginLeft:'430px', columnGap:'60px'}}>
         <button onClick={this.change2.bind(this)} style={{ color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} }>Back</button>
         <button onClick={this.change1.bind(this)} style={{ color:"white",width:'100px',height:'25px' ,backgroundColor:"	#C21E56"} } required >Next</button>
         </div>
         <br></br>
         <footer style={{marginLeft:"530px"}}> Page 2 </footer>
         </form>
    </div>
    )
   
  }
  else if(this.state.next===0){
     return<div>
         <ProjectsDeveloped/>
     </div>   
}
else{
    return <div>
        <Personaldetail/>
    </div>
}
}
}
export default Educationaldetails;
