import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  // console.log(addList)
  const bot=bots.map((eachBot)=><BotCard key ={eachBot.id} bot={eachBot} />)
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
