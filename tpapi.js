const wump = require('wumpfetch');

module.exports = class TP {
  constructor(version) {    
    this.version = version || 'v1';
  }

  getBot(botid) {
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`http://tazhys.solutions/api/${this.version}/bot/${botid}`).send();
         resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }

  postStats(guildcount, membercount, botid) {
    if (typeof guildcount !== 'number') throw new TypeError('Guild count must be a number');
    if (typeof membercount !== 'number') throw new TypeError('Member count must be a number');
    if (typeof botid !== 'string') throw new TypeError('Bot ID must be a string');
    return new Promise(async (resolve, reject) => {
      try {
         const res = await wump(`http://tazhys.solutions/api/${this.version}/bot/${botid}/update/${guildcount}/${membercount}`, 
         {
          method: 'POST'
          
        }).send();
        resolve(res.json());
      } catch (err) { reject(new Error(err)); }
    });
  }
};