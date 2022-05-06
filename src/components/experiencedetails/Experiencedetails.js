import React,{Component} from 'react'
import Extradetails from '../extradetails/Extradetails'
import ProjectsDeveloped from '../projectsdetails/ProjectsDeveloped'



 class Experiencedetails extends Component {
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
        <h3 style={{textAlign:"center",outline:"solid",outlineOffset:'8px', outlineColor:'#f4f0ec'}}>Experience Details</h3>
        <br></br>
        <form style={{backgroundColor:'#FAF9F6',width:'1050px', marginLeft:"190px" ,paddingBlockStart:'5px',height:"450px"}}>
        <header style={{ marginLeft:"500px"}}><b>Experience 1</b></header>
            <br></br>
        <div style={{display:'flex',columnGap:'50px',marginLeft:"30px" ,marginRight:"15px"}}>
                <input type="text" placeholder='Institute/Organization' style={{width:"300px",height:"25px"}} required/>
                <input type='text' placeholder='position' style={{width:"300px",height:"25px" }} required/>
                <input type='text' placeholder='duration' style={{width:"300px",height:"25px"}} required/>   
        </div>
            <br></br>
            
            <div >
                <input type="text" placeholder='Description' style={{width:"1000px",height:"25px",marginLeft:"30px"}} required/>
            </div>

            <br></br>
            <br></br>
            <header style={{ marginLeft:"500px"}}><b>Experience 2</b></header>
            <br></br>
        <div style={{display:'flex',columnGap:'50px',marginLeft:"30px" ,marginRight:"15px"}}>
                <input type="text" placeholder='Institute/Organization' style={{width:"300px",height:"25px"}} required/>
                <input type='text' placeholder='position' style={{width:"300px",height:"25px" }} required/>
                <input type='text' placeholder='duration' style={{width:"300px",height:"25px"}} required/>   
        </div>
            <br></br>
            
            <div >
                <input type="text" placeholder='Description' style={{width:"1000px",height:"25px",marginLeft:"30px"}} required/>
            </div>
            <br></br>
            <div style={{display:'flex',marginLeft:'380px', columnGap:'60px'}}>
         <button onClick={this.change2.bind(this)} style={{ color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} } >Back</button>
         <button onClick ={this.change1.bind(this)} style={{ color:"white",width:'100px',height:'25px',backgroundColor:"#E0115F"} }  required>Next</button>
         </div>
         <br></br>
         <footer style={{marginLeft:"490px"}}> Page 4 </footer>
        
        </form>
        <br></br>
       <br></br>
       
    </div>
    )
  }
  else if(this.state.next===0){
    return(
      <Extradetails/>
    )
  }
  else{
    return <div>
      <ProjectsDeveloped/>
    </div>
  }
}

 }
export default Experiencedetails