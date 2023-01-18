# Kickstarter like on blockchain

## Requierments

Node v18 or above should be installed: [install Node](https://nodejs.org)

Install Ganache from [Truffle suite](https://trufflesuite.com/ganache/) or Ganache cli `npm install -g ganache`

## Smart contract

Install dependencies

```shell
npm install
```

Compile

```shell
node compile.js
```

Unit Test

1. Start Ganache first
2. copy / paste Ganache *MNEMONIC* into `.env` file

```shell
npm run test
```

Deploy

```shell
node deploy.js
```

Deploy result should print the contract address and the owner address

```shell
Attempting to deploy from account 0x561197f3FC62C97E61620eaF19A0Ebb7FED5E448
Contract deployed to 0xcEEC15Ce1AB172C640A1d0f432FcD2326A6B8c55
```

Now, copy / paste the contract address into the `/client/.env` file

> NEXT_PUBLIC_CAMPAING_FACTORY_ADDRESS="0x..."

## Client

Client interface is built with NextJs 12 and Semantic UI

Install dependencies

```shell
npm install --legacy-peer-deps
```

Launch dev

```shell
npm run dev
```
