import axios from 'axios';

const FETCHCOINS = 'FETCHCOINS';

const fetchCoin = (newState) => ({
  type: FETCHCOINS,
  newState,
});

const fetchCoins = async () => {
  const { data: post } = await axios.get('https://api.coincap.io/v2/assets?limit=100');
  return post.data;
};

export const coinList = () => async (dispatch) => {
  const coins = await fetchCoins();
  const newState = coins.slice(0, 51);
  dispatch(fetchCoin(newState));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCHCOINS:
      return action.newState;
    default:
      return state;
  }
};

export default reducer;
