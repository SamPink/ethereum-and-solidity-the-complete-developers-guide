// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

consoe.log(solc.compile(source, 1));