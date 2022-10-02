import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots,onClickBot,onDelete}) {
  // console.log(bots)
  //your bot army code here...

  

 
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {bots.map(bot => <BotCard key={bot.id} bot={bot} onClickBot={onClickBot} onDelete={onDelete}/>)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
