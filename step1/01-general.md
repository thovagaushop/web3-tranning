## Question list

## General Blockchain

1. What is a blockchain?
   - Blockchain is a distributed database that maintains a continuously growing list of ordered records, called blocks
     Blockchain is used to record transactions across many computers so that the record cannot be altered retroactively without the consensus of the network.
2. What is a block in blockchain?
   - Block in blockchain is a place in a blockchain where data is stored.
     Each block contain 2 part, one part is the data of transaction and the other one is the hash code of previos block

## EVM-compatible Blockchain

1. What is Ethereum?
   Ethereum is a blockchain technology platform, and help make blockchain app
   Ethereum works with smart contract
2. What is Ethereum Virtual Machine (EVM)?
   The Ethereum Virtual Machine (EVM) is the computation engine for Ethereum that manages the state of the blockchain and enables smart contract functionality
3. How does EVM work?
   EVM take input that is transactions, and works with smart contract, return data of contract and state which will be store in blockchain
4. Explain the concept of "smart contract".
   Smart contracts are the fundamental building blocks of Ethereum's application layer. They are computer programs stored on the blockchain and are guaranteed to execute according to the rules defined by its code, which cannot be changed once created.
5. What are Externally Owned Accounts (EOAs) and Smart Contract Accounts (SCAs)?
   EOA is a type of account on any blockchain network that is managed by private keys instead of smart contracts. An EAO is used by individuals with private keys to verify or execute transactions
   SCAs are smart contracts (code) immutably linked to the blockchain, along with the address key.
6. What is a transaction? What does it contain?
   Transaction is the act of transferring Ethereum-based assets from one address to another that is initiated from your wallet
   Transaction contain : - Sender (or From Address) - Recipient (or To Address) - Value - Data - Gas Limit - Gas Price - Nonce - Signature
7. Explain the concepts of "nonce".
   Nonce is a unique number associated with the sender's account. It helps ensure transactions are processed in the correct order.
8. Explain the concepts of "gas", "gas price", "transaction fee", "gas limit", and "gas usage" (from [Etherscan's transaction page](https://etherscan.io/tx/0x903a5850d6893ff86026cc64c254f547fef70da398b98749a28d93774f22a1f0)).
   - "gas" refers to a unit of measurement for the computational work required to execute a transaction or perform a specific operation on the network
   - "gas price" is the price in Gwei (a subunit of ETH) that the sender is willing to pay per unit of gas
   - "transaction fee" = "gas price" \* "gas usage"
   - "gas limit" is the maximum amount of computational work the sender is willing to pay for in Gas units
9. Explain the concepts of "native token".
   - Native tokens are the foundational tokens of a cryptocurrency blockchain designed to function directly with the blockchain
10. Explain the concepts of "ERC-20", "ERC-1155" and "ERC-721". There is no need for an answer, but you should get a deep understanding of "ERC-20".
    - ERC-20 is "Ethereum Request for Comment 20", this is a technical standard for creation of other token for other apps, services or products using the Ethereum BlockChain
    - ERC-20 is same like a interface which have a list of functions and events that must be implemented into a token.
    - There are some required functions and some optional functions of ERC-20
      - Required:

        - TotalSupply : The total number of tokens that will ever be issued
        - BalanceOf: The account balance of a token owner's account
        - Transfer: Automatically executes transfers of a specified number of tokens to a specified address for transactions using the token
        - TransferFrom: Automatically executes transfers of a specified number of tokens from a specified address using the token
        - Approve: Allows a spender to withdraw a set number of tokens from a specified account, up to a specific amount
        - Allowance: Returns a set number of tokens from a spender to the owner

      - Optional:
        - Name: Token's name
        - Symbol: Token's symbol
        - Decimals: Decimal points to use
11. What is a RPC endpoint?
    - RPC endpoint access is a way for blockchain applications and wallets to interact with the blockchain
12. What is an ABI?
    - ABI is the interface between two program modules, one of which is often at the level of machine code. The interface is the de facto method for encoding/decoding data into/out of the machine code.
