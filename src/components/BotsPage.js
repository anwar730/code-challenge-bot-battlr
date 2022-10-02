import React ,{useEffect,useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots,setBots]=useState([])

  const [items,setItems]=useState([])

  function handleDelete(delItem){
 
      setItems(items.filter((item)=> item.id !== delItem.id));

      setBots(bots.filter((bot)=> bot.id !== delItem.id));

    }

  function onClickBot(id)
    {
      
     const found = items.find((item )=> item.id === id);
    
     if (!found){
      
      const i= bots.find((item )=> item.id === id);
        setItems(items => [...items, i]);
     }
     else{

      const allItems=items.filter((item)=> item.id !== found.id)
      setItems(allItems);
     }
      //  console.log(items);

    }
    useEffect (()=>{
    fetch ('http://localhost:8002/bots')
    .then (res=>res.json())
    .then (data=> setBots(data))
  },[])

  

  // console.log(bots)


  return (
    <div>
      <YourBotArmy bots={items} onClickBot={onClickBot} onDelete={handleDelete}/>
      <BotCollection bots={bots} onClickBot={onClickBot} onDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
