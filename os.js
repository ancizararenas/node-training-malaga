const os = require('os');

console.log(`Hi ${os.userInfo().username},
    You have started the machine '${os.hostname()}' ${Math.trunc(os.uptime()/60)} minutes ago.`);
