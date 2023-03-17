import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { coinList } from '../redux/coins/coinsSlice';
import Coin from './Coin';

const Coins = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const crytoList = useSelector((store) => store.cryto);
  useEffect(() => {
    dispatch(coinList());
  });

  return (
    <section>
      <div>
        <input
          type="text"
          className="search-field"
          placeholder="Search Here"
          value={search.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
      </div>
      <div>
        <ul className="d-grid mx-0 px-0 cardContainer">
          {crytoList
            .filter((coin) => {
              const filter = search.get('filter');
              if (!filter) return true;
              const name = coin.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((cryto) => (
              <Coin
                key={cryto.id}
                id={cryto.id}
                symbol={cryto.symbol}
                price={cryto.priceUsd.substring(0, 8)}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Coins;
