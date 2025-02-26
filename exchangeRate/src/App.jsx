import './App.css';
import { useState } from 'react';

function CurrencyInput({ currency, value, onChangeMoney }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        value={value}
        onChange={(e) => {
          onChangeMoney(currency, e.target.value);
        }}
        type="number"
      />
    </div>
  );
}

function App() {
  const [money, setMoney] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeMoney = (currency, value) => {
    if(currency === "krw") {
      setMoney({
        krw: value,
        usd: value / 1300,
      });
    } else {
      setMoney({
        krw: value * 1300,
        usd: value,
      });
    }
  };

  return (
    <div>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput
        currency={"krw"}
        value={money.krw}
        onChangeMoney={onChangeMoney}
      />
      <CurrencyInput
        currency={"usd"}
        value={money.usd}
        onChangeMoney={onChangeMoney}
      />
    </div>
  )
}

export default App;
