import React, {useEffect,useState} from "react";
import Memcard from "../Component/Memcard";
// import abdo from "../Images/abdo.fb.jpg";
// import fares from "../Images/fares.fb.jpg";
// import oussama from "../Images/oussama.fb.jpg";
// import oustimos from "../Images/oustimos.png";
// import img4 from "../Images/img4.jpg";
// import img5 from "../Images/img5.jpg";
// import img6 from "../Images/img6.jpg";
// import img8 from "../Images/img8.jpg";
import axios from "axios"

function Members() {
  const [person, setPerson] = useState([]);
  // const images = [abdo, fares, oussama, oustimos, img4, img5, img6,img8, img8, img8];

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setPerson(res.data))
    .catch(err => console.warn(err))
  });
  
   
  // const person = [
  //   {
  //     name: "Oussama Belkaid",
  //     img: oussama,
  //     job: "Plumber",
  //   },
  //   {
  //     name: "Oustimos Belkaid",
  //     img:  oustimos ,
  //     job: "Plumber's helper",
  //   },
  //   {
  //     name: "Fares Selmane",
  //     img:  fares ,
  //     job: "Plumber",
  //   },
  //   {
  //     name: "AbdelHak Abdo",
  //     img:  abdo ,
  //     job: "Tools Seller",
  //   },
  //   {
  //     name: "Some One",
  //     img:  img4 ,
  //     job: "Tools Seller",
  //   },
  //   {
  //     name: "Some One",
  //     img:  img5 ,
  //     job: "Tools Seller",
  //   },
  //   {
  //     name: "Some One",
  //     img:  img6 ,
  //     job: "Tools Seller",
  //   },
  //   {
  //     name: "Some One",
  //     img:  img8 ,
  //     job: "Tools Seller",
  //   },
  // ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        gap: "20px",
      }}
    >
      {person.map((el, i) => (
        <div key={i} style={{ padding: "10px" }}>
          <Memcard name={el.name} job={el.email} img={el.img} /> 
        </div>
      ))}
    </div>
  );
}

export default Members;
