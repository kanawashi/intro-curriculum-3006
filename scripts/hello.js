'use strict';

module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/, msg =>{
    const lots =['大吉です', '吉でした。まあまあですね', '中吉です。　普通です', '末吉。', '凶。　でも気を落とさずに'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const user_id = msg.message.user.name;
    msg.send(lot + `、　` +user_id);
  });
};