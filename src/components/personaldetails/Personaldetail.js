import React from 'react'
import Educationaldetails from '../educationaldetails/Educationaldetails'

 class Personaldetail extends React.Component {
     state={
         next:true
     }
     change1(){
        this.setState({
            next:false
        })
     }
     
  render() {
      if(this.state.next){
   return (
      <div >
          <br></br>
      <h3 style={{textAlign:"center",outline:"solid",outlineOffset:'8px', outlineColor:'#f4f0ec'}}>Personal Details</h3>
      
        <form style={{backgroundColor:'#FAF9F6',width:'1000px', marginLeft:"200px" ,paddingBlockStart:'100px'} }required>
        <br></br>
                  <div  className="div1"  style={{display:'flex' ,columnGap:'50px',justifyContent:'center'}}>
                    <input type="text" placeholder='First Name'style={{height:'20px',width:'350px'}} required />
                    <input type="text"placeholder='Last Name'  style={{height:'20px',width:'350px'}} required/>
                    </div>
                
                  <br></br>
                  <div  className="div2" style={{display:'flex',columnGap:'50px',justifyContent:'center'}}>
                    <input type="email" placeholder='Email'   style={{height:'20px',width:'350px'}} required/>
                    <input type="text"placeholder='Phone Number '  style={{height:'20px',width:'350px'}} required/>
                    </div>
                
                  <br></br>
                  <div  className="div3" style={{display:'flex',columnGap:'50px',justifyContent:'center'}}>
                  <input type="text" placeholder='Your Website' style={{height:'20px',width:'350px'}} required />
                    <input type="text"placeholder='GitHub' style={{height:'20px',width:'350px'}} required/>
                    </div>
                    
                  <br></br>
                  <div  className="div4" style={{display:'flex',columnGap:'50px',justifyContent:'center'}}>
                    <input type="text" placeholder='Linked In' style={{height:'20px',width:'350px'}} required / >
                    <input type="text"placeholder='Twitter 'style={{height:'20px',width:'350px'}} required/>
                    </div>
                
                  <br></br>
                  <div  className="div5" style={{display:'flex',columnGap:'50px',justifyContent:'center'}}>
                  <input type="text" placeholder='Facebook'  style={{height:'20px',width:'350px'}} required />
                    <input type="text"placeholder='Instagram' style={{height:'20px',width:'350px'}} required/>
                    </div>
       <br></br>
       <div style={{display:'flex',marginLeft:'380px', columnGap:'60px'}}>
         <button onClick={{}} style={{ color:"grey",width:'100px',height:'25px'} }>Back</button>
         <button  onClick={this.change1.bind(this)} style={{ color:"white",width:'100px',height:'25px' ,backgroundColor:"	#C21E56"} }required >Next</button>
         </div>
         <br></br>
         <footer style={{marginLeft:"480px"}}> Page 1 </footer>
         </form> 
      </div>
    )
   }
   else{
       return(
           <div>
       <Educationaldetails/>
       </div>
       )
   }
  }

}
export default Personaldetail;
