import React from 'react';
import axios from 'axios';
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (value) => value.length > 0 && (valid = false)
  );
  return valid;
}
var id= Math.random()*100000000000000000;
var api='http://localhost:8080/api/';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:id,
      
      errors: {
        Name: '',
        me:'',
        ame: '',
        lName: '',
        llName:''
      }
    }
  }
  
  getdata =()=>
  {  axios.get(api)
    .then((res)=>{
      this.setState({
        users:res.data,
        
        name:'',
        date:'',
        room:'',
        division:'',
        gender:'',
        errors: {
          Name: 'Pls Enter Your fullname',
          me:'Pls enter your DOB',
          ame: 'Pls enter your Class',
          lName: 'Pls select your Division',
          llName: 'Pls select your gender',
        }
        
      })
      
    })}
  componentDidMount(){
   this.getdata();
  }




  submit=(evenet,id)=>{
   
    evenet.preventDefault();
    if(validateForm(this.state.errors)) {
      
        axios.post(api,{
          id:id,
          name:this.state.name,
          date:this.state.date,
          room:this.state.room,
          division:this.state.division,
          gender:this.state.gender

        }).then(()=>this.getdata())
        console.log("valid form")
        alert('Student ID='+id+"\r\n"+
        'Student Name='+this.state.name+"\r\n"+
        'Student Date='+this.state.date+"\r\n"+
        'Student Class='+this.state.room+"\r\n"+
        'Student Division='+this.state.division)
     
    }else{
      console.error('Invalid Form')
      alert("Complete the given Form")
    }
    
  }
 
 

handleChange = (event) => {
  event.preventDefault()
  const { name, value } = event.target;
  let errors = this.state.errors;

  switch (name) {
    case 'nam': 
      errors.Name = 
        value.length < 5 
          ? 'Full Name must be 5 characters long!'
          : '';
      break;
      case 'date': 
      errors.me = 
        value===''
          ? 'Pls enter your Date of birth'
          : '';
      break;
      case 'room': 
      errors.ame = 
        value===''
          ? 'Pls enter your classroom'
          : '';
      break;
      case 'div': 
      errors.lName = 
        value===''
          ? 'Pls enter your Division'
          : '';
      break;
      case 'group1': 
      errors.llName = 
        value===''
          ? 'Pls enter your gender'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value});
};


  render(){
    const {errors} = this.state;
    return (
      <div className="container">
          <div className="row">
         <div className="col s6">
                 <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input value={this.state.name} onInput={(e) =>{this.setState({name:e.target.value})}} onChange={this.handleChange} name='nam' type="text" id="autocomplete-input" className="autocomplete"  noValidate/>
                    {errors.Name.length > 0 && 
                <span className='error'>{errors.Name}</span>}
                    <label htmlFor="autocomplete-input">Enter Name</label>

                  </div>
                  

                  <div className="input-field col s12">
                  <i className="material-icons prefix">date_range</i>
                  <input value={this.state.date}  id="autocomplete-input" name='date' onChange={(e)=>this.setState({date:e.target.value})} onInput={this.handleChange} type="date" className="autocomplete"></input>
                  {errors.me.length > 0 && 
                <span className='error'>{errors.me}</span>}
                  </div>
                 
                  <div class="row green-text">                                    
                    <select value={this.state.room} onChange={(e)=>this.setState({room:e.target.value})} onInput={this.handleChange} name='room' className="browser-default"> 
                        <option value="" disabled selected> 
                          Class</option> 
                        <option value="1"> 
                        I</option> 
                        <option value="2"> 
                        II</option> 
                        <option value="3"> 
                        III</option> 
                         <option value="4"> 
                        IV</option> <option value="5"> 
                        V</option> <option value="6"> 
                        VI</option> <option value="7"> 
                        VII</option> <option value="8"> 
                        VIII</option> <option value="9"> 
                        IX</option> <option value="10"> 
                        X</option> <option value="11"> 
                        XI</option> <option value="12"> 
                        XII</option>
                    </select>
                    {errors.ame.length > 0 && 
                <span className='error'>{errors.ame}</span>} 
                  </div> 
                  <div class="row green-text" >                  
                      <select value={this.state.division} onInput={(e)=>this.setState({division:e.target.value})} onChange={this.handleChange} name='div' className="browser-default"> 
                        <option value="" disabled selected> 
                          Division</option> 
                        <option value="A"> 
                          A</option> 
                        <option value="B"> 
                          B</option> 
                        <option value="C"> 
                          C</option> 
                    </select> 
                    {errors.lName.length > 0 && 
                <span className='error'>{errors.lName}</span>}
                  </div> 

                
    <p>

      <label>
        <input value='Male' onChange={(e)=>this.setState({gender:e.target.value})} onInput={this.handleChange} name="group1" type="radio"  />
        <span>Male</span>
      </label>
    </p>
    <p>
      <label>
        <input value='female' onChange={(e)=>this.setState({gender:e.target.value})} onInput={this.handleChange} name="group1" type="radio" />
        <span>Female</span>
      </label>

      
    </p>
    {errors.llName.length > 0 && 
                <span className='error'>{errors.llName}</span>}
    
 
                 
                  <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                 </form>
                 </div> 
          <div className="col s6">
          <table>
        <thead>
          <tr>
          <th>id</th>
              <th>Name</th>
              <th>date</th>
              <th>room</th>
              <th>division</th>
              <th>gender</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.users.sort((a, b) => a.name > b.name ? 1:-1).map((user,i) =>
                  <tr key={user.id}>
                    <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.date}</td>
                      <td>{user.room}</td>
                      <td>{user.division}</td>
                      <td>{user.gender}</td>
                      
                  </tr>
                )
            }
         

        </tbody>
      </table>
      </div>
          </div>                
      </div>
    );
  }
}

export default App;
