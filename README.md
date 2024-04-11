1. Develop the "Test" token smart contract using hardhat and deploy it to the testnet.
2. Create a test api endpoint "getbalance" in the above codebase to receive Ethereum wallet address from the request and get the Test token balance of the address and respond it. And then test it using Postman.

# Result
contract:
- sepolia
- 0x210624C5A959A20aD89239Ec3103F254E3E97601

Ethereum wallet address owned token:
- 0xBE4494DaB28095e1465aB151a21e9D529752998A

script:
```
npm run start
```

GET api:

https://localhost:8088/api/getbalance?address=0xBE4494DaB28095e1465aB151a21e9D529752998A