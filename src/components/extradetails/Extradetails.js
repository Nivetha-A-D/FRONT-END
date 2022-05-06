
import React, { Component } from 'react'

import Experiencedetails from '../experiencedetails/Experiencedetails'

class Extradetails extends Component {
        state={
                next:true
            }
            change1(){
               this.setState({
                   next:false
               })
            }
            change2(){
                this.setState({
                    next:true
                })
             }
             
             
  render() {
          if(this.state.next){
    return ( <div>
        <h3 style={{textAlign:"center",outline:"solid",outlineOffset:'8px', outlineColor:'#f4f0ec'}}>Extra Details</h3>
        <br></br>
        <form style={{backgroundColor:'#FAF9F6',width:'1050px', marginLeft:"190px" ,paddingBlockStart:'5px',height:"450px"}}>
        <header style={{textAlign:'start',marginLeft:'500px'}}><b>Skills/Languages </b></header>
            <br></br>
        <div style={{display:'flex',columnGap:'50px',justifyContent:"center"}}>
                <input type="text" placeholder='Skill 1' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Skill 2' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Skill 3' style={{width:"250px",height:"25px"}} required/>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex',columnGap:'50px',justifyContent:"center"}}>
                <input type="text" placeholder='Skill 4'style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Skill 5' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Skill 6'style={{width:"250px",height:"25px"}} required/>
                
        </div>
        <br></br>
        <header style={{textAlign:'start',marginLeft:'500px'}}><b>Interests </b></header>
            <br></br>
        <div style={{display:'flex',columnGap:'50px',justifyContent:"center"}}>
                <input type="text" placeholder='Interest 1' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Interest 2' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Interest 3' style={{width:"250px",height:"25px"}} required/>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex',columnGap:'50px',justifyContent:"center"}}>
                <input type="text" placeholder='Interest 4'style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Interest 5' style={{width:"250px",height:"25px"}} required/>
                <input type='text' placeholder='Interest 6'style={{width:"250px",height:"25px"}} required/>
                
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex',marginLeft:'400px', columnGap:'60px'}}>
         <button onClick={this.change1.bind(this)} style={{  color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} }>Back</button>
         <button onClick={{}} style={{  color:"grey",width:'100px',height:'25px'} }>Next</button>
         <br></br>
          
         </div>
         <br></br>
        <div>
                <button onClick={{}} style={{ color:"white" ,width:'150px',height:'25px',backgroundColor:"#0F52BA" ,marginLeft:"450px"} } required>Download Resume</button>
        </div>
        </form>
        <br></br>
       <br></br>
       
    </div>
      
    )
  }
  else{
          return <div>
<Experiencedetails/>
          </div>
  }
}
}


export default Extradetails