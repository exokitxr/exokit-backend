let config = require('fs').existsSync('../config.json') ? require('../config.json') : require('../config.default.json');

const MAINNET_MNEMONIC = process.env.MAINNET_MNEMONIC || config.MAINNET_MNEMONIC;
const TESTNET_MNEMONIC = process.env.TESTNET_MNEMONIC || config.TESTNET_MNEMONIC;
const POLYGON_MNEMONIC = process.env.POLYGON_MNEMONIC || config.POLYGON_MNEMONIC;
const TESTNET_POLYGON_MNEMONIC = process.env.TESTNET_POLYGON_MNEMONIC || config.TESTNET_POLYGON_MNEMONIC;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || config.INFURA_PROJECT_ID;
const ENCRYPTION_MNEMONIC = process.env.ENCRYPTION_MNEMONIC || config.ENCRYPTION_MNEMONIC;
const POLYGON_VIGIL_KEY = process.env.POLYGON_VIGIL_KEY || config.POLYGON_VIGIL_KEY;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || config.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || config.GITHUB_CLIENT_SECRET;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || config.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || config.DISCORD_CLIENT_SECRET;

const REDIS_HOST = process.env.REDIS_HOST || config.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT || config.REDIS_PORT;

const HTTP_PORT = parseInt(process.env.HTTP_PORT || config.HTTP_PORT, 10) || 80;
const HTTPS_PORT = parseInt(process.env.HTTPS_PORT || config.HTTPS_PORT, 10) || 443;
const PUBLIC_IP_ADDRESS = process.env.PUBLIC_IP_ADDRESS || config.PUBLIC_IP_ADDRESS;
const PRIVATE_IP_ADDRESS = process.env.PRIVATE_IP_ADDRESS || config.PRIVATE_IP_ADDRESS;
const IPFS_HOST = process.env.IPFS_HOST || config.IPFS_HOST;
const ETHEREUM_HOST = process.env.ETHEREUM_HOST || config.ETHEREUM_HOST;
const DEFAULT_TOKEN_DESCRIPTION = process.env.DEFAULT_TOKEN_DESCRIPTION || config.DEFAULT_TOKEN_DESCRIPTION || "";
const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || config.AUTH_TOKEN_SECRET || "";
const AUTH_SECRET_KEY = process.env.AUTH_SECRET_KEY || config.AUTH_SECRET_KEY || "";
const IPFS_HOST_PORT = process.env.IPFS_HOST_PORT || config.IPFS_HOST_PORT || 8081;

const MINTING_FEE = process.env.MINTING_FEE || config.MINTING_FEE || 10;

module.exports = {
  IPFS_HOST_PORT,
  AUTH_SECRET_KEY,
  AUTH_TOKEN_SECRET,
  PUBLIC_IP_ADDRESS,
  PRIVATE_IP_ADDRESS,
  HTTP_PORT,
  HTTPS_PORT,
  REDIS_HOST,
  REDIS_PORT,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  MAINNET_MNEMONIC,
  TESTNET_MNEMONIC,
  POLYGON_MNEMONIC,
  TESTNET_POLYGON_MNEMONIC,
  INFURA_PROJECT_ID,
  ENCRYPTION_MNEMONIC,
  POLYGON_VIGIL_KEY,
  DEFAULT_TOKEN_DESCRIPTION,
  MINTING_FEE,
  ETHEREUM_HOST,
  IPFS_HOST,
  config
};