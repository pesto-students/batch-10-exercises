import request from "request";

const bitcoinTicker = async ({ limit }) => {
  const coinMarketApi = `https://api.coinmarketcap.com/v2/ticker/${limit}`;
  let response;
  request.get(coinMarketApi, (error, res, body) => {
    response = res;
  });
  return await response;
};

export { bitcoinTicker };
