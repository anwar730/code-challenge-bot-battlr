import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,onClickBot,handleDelete}) {
  // Your code here
  // console.log(addList)
  const bot=bots.map((eachBot)=><BotCard key ={eachBot.id} bot={eachBot} onClickBot={onClickBot} onDelete={handleDelete}/>)
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bot}
          
       
      </div>
    </div>
  );
}

export default BotCollection;
