import { useState } from "react";

import Card from "./Component/Card"
import Navbar from "./Component/Navbar"
import {mockCards} from "./Mocks"

function App() {
  const [count , setCount] = useState(0);


  return (
    <>
    <Navbar cartcount={count}/>
    {
   
 <div className="flex flex-wrap justify-center gap-14 m-11 p-5">
  {mockCards.map((item) => (
    <Card 
      key={item.id}
      title={item.title}
      description={item.description}
      image={item.image}
      onaddcart={()=> setCount(count + 1)}
    />
  ))}
</div>

    }
    
    </>
  )
}

export default App
