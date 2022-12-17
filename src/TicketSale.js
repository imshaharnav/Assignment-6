import web3 from './web3';

const address='0xEd6D106C86888f556147D7e05b3D29e2dD5e943F';

const abi= [{"inputs":[{"internalType":"uint256","name":"numTickets","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"partner","type":"address"}],"name":"acceptSwap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketId","type":"uint256"}],"name":"buyTicket","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"person","type":"address"}],"name":"getTicketOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"partner","type":"address"}],"name":"offerSwap","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export default new web3.eth.Contract(abi, address);
