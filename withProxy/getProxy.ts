import axios from "axios";

// Define function to get proxy
const getProxy = async (proxyUrl: string, apiKey: string, proxyParams: object) => {
  const response = await axios.get(proxyUrl, { params: { apiKey, ...proxyParams } });
  return response.data.text;
};

export { getProxy };
