# tpapi.js

## Example Usage (Javascript)

```js
const TPAPI = require('@nightcoredev/tpapi');
module.exports = (client) => {
        const tpapi = new TPAPI("v1");
        tpapi.postStats(client.guilds.size, client.users.size, client.user.id).then(r => {
            if (status === "success") {
                console.log(`Guild Stats Updated\n${r.body.message}`);
            } else {
                console.log(`Guild Stats Error\n${r.body.message}`);
            }
        }).catch((err) => {
            console.log(err);
        });
};
```

