import { useState,useEffect } from "react";
import "./ImageFinder.css"
import axios from "axios"
import ImageFinder from "./ImageFinder"


const data = [
  {
    id: "26e1bbe2-61ed-4c3e-88e3-243b69463daa",
    firstName: "Travel",
    lastName: "last1",
    email: "test1.last1@test.com",
    phone: 5475676575
  },
  {
    id: "523423ff-61ed-4c3e-3456-243b69463daa",
    firstName: "Cars",
    lastName: "last2",
    email: "test2.last2@test.com",
    phone: 65464566546
  },
  {
    id: "56greger-6456-4c3e-2342-243b69463daa",
    firstName: "Wildlife",
    lastName: "last3",
    email: "test3.last3@test.com",
    phone: 42342344234
  },
  {
    id: "56greger-6456-4c3e-2342-243b69463daa",
    firstName: "Technology",
    lastName: "last3",
    email: "test3.last3@test.com",
    phone: 42342344234
  },
  {
    id: "56greger-6456-4c3e-2342-243b69463daa",
    firstName: "Other",
    lastName: "last3",
    email: "test3.last3@test.com",
    phone: 42342344234
  }
];

function Topic() {

  const [list, setList] = useState(data[1]);
  const [load,setLoad] = useState(true)
  const[post,setPost] = useState([])


  const handleChange = (e) => {
    const newList = data.filter((item) => {
      return item.firstName === e.target.value;
    });
    setList(newList[0]);
  };

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setLoad(false)
      setPost(response.data)
    })
  },[])

  const apple=() =>{
    if(data.firstName==="Others"){
        console.log("there hi");
    
  } 
}

const ImageValue =<ImageFinder/>
  
  return (
    <div className="App">
       
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Surname"/>

      <select className="dropdown-style" onChange={handleChange}>
        {data.map((posts, index) => {
            if(posts==="Other"){
                return 
            }
            else{
                console.log("No Data");
            }
          return (
            <option key={index} id={index} >
              
              {posts.firstName}
              
            </option>
          );
        })}
      </select>
      <ul>
        
        <li>{list.firstName}</li>
        <li>{list.lastName}</li>
        <li>{list.email}</li>
        <li>{list.phone}</li>
       {ImageValue}
        {Object.entries(list).map((item, index) => {
          return <li key={index}>{item[1]}</li>;
        })}
      </ul>
      
      
    </div>
  );
}

export default Topic