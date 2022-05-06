

import React, { Component } from 'react'
import Educationaldetails from '../educationaldetails/Educationaldetails'
import Experiencedetails from '../experiencedetails/Experiencedetails'

 class ProjectsDeveloped extends Component {
  state={
    next:1
}
change1(){
   this.setState({
       next:0,
      
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
         <h3 style={{textAlign:"center",outline:"solid",outlineOffset:'8px', outlineColor:'#f4f0ec'}}>Projects Developed</h3>
      <br></br>        
      <form style={{backgroundColor:'#FAF9F6',width:'1000px', marginLeft:"190px" ,paddingBlockStart:'5px',height:"480px"}}>
      <header style={{ marginLeft:"500px"}}><b>Project 1</b></header>
      <br></br>
          <div  style={{textAlign:'center'}}>
          <div><input  id="title1"   type="text" placeholder="Title" style={{height:'30px',width:"700px",marginLeft:"10px"}} required /></div><br></br>
       
          <div><input id="Link1" type="text" placeholder='Link' style={{height:'30px',width:"700px",marginLeft:"10px"}} required/></div><br></br>
          <div><input  id="d1"  type="text" placeholder='Description' style={{height:'30px',width:"700px",marginLeft:"10px"}} required/></div>
          </div>
          <br></br>
          <header style={{ marginLeft:"500px"}}><b>Project 2</b></header>
      <br></br>
          <div  style={{textAlign:'center'}}>
          <div><input    type="text" placeholder="Title" style={{height:'30px',width:"700px",marginLeft:"10px"}} required/></div><br></br>
       
          <div><input  type="text" placeholder='Link' style={{height:'30px',width:"700px",marginLeft:"10px"}} required/></div><br></br>
          <div><input    type="text" placeholder='Description' style={{height:'30px',width:"700px",marginLeft:"10px"}} required/></div>
          </div>
          <br></br>
          <div style={{display:'flex',marginLeft:'380px', columnGap:'60px'}}>
         <button onClick={this.change2.bind(this)} style={{ color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} } >Back</button>
         <button  onClick={this.change1.bind(this)} style={{ color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} } required >Next</button>
         </div>
         <footer style={{marginLeft:"490px"}}> Page 3 </footer>
      </form>
    
       <br></br>
    
  </div>
      
    )
    }
    else if(this.state.next===0){
      return<div>
          <Experiencedetails/>
      </div>   
 }
 else{
     return <div>
         <Educationaldetails/>
     </div>
 }
 }
}

export default ProjectsDeveloped;

