require('dotenv').config();
const WPPConnectServer = require('@wppconnect-team/wppconnect-server');

const port = process.env.PORT || 21465;
const secretKey = process.env.SECRET_KEY || 'je170818';
const sessionName = process.env.SESSION_NAME || 'zapfoto';

const server = new WPPConnectServer({
  port,
  secretKey,
  sessionName,
  headless: true
});

server.listen().then(() => {
  console.log(`Server running on port ${port}`);
});
