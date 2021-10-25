import React,{useState,useEffect} from 'react';
import axios from "axios";

function  Body() {
    const [state, setstate] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
          console.log(data);
           
           
            setstate(data.data)
        })
       
    },[]);


  const  inputdata=(e)=>{
      setName(e.target.value);}
     

 const inputdata1=(e)=>{
    setEmail(e.target.value);

 }

  const HandleOnClick=()=>{

    const postdata={
        name,
        email
    }
    axios.post ("https://jsonplaceholder.typicode.com/posts",postdata).then(Data=>{
        console.log(Data);
    })

  }
    return (
        <div>

<div className="div2">
          <h3>Student Name</h3>
         
          <input type="text" className="Input" placeholder="Please enter the name" value={name} onChange={inputdata} />
          <input type="text" className="Input" placeholder="Please enter the Email" value={email} onChange={inputdata1} />
          
          <button className="btn " type="button" onClick={HandleOnClick} >ADD</button>

   <div className="list">         
        {state.map((ele)=>(
<table border='1' className="table">
     <tr>
        <th >{ele.name}</th>
    </tr>
</table>
    )) }
    </div>
          
    </div>
       </div>
    )
}

export default Body









