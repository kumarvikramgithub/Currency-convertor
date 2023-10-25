import { useState, useEffect } from "react";
import { IoGitCompare } from "react-icons/io5";
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputComponent} from './components';

function App() {
  const [isSwap, setIsSwap] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);

  const handleSwap = () =>{
    setIsSwap(!isSwap);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(Number(toAmount));
  }
  
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);
  
  const handleFromAmount=(e) =>{
    setAmount(Number(e.target.value));
  }

  const handleToAmount = (e)=>{
    setToAmount(Number(e.target.value));
  }
  useEffect(() => {
    console.log("Hi", currencyInfo[toCurrency]);
    if (currencyInfo[toCurrency] !== undefined && amount !== undefined) {
      setToAmount(amount * currencyInfo[toCurrency]);
    }
  }, [amount, toCurrency, currencyInfo]);
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center bgImg">
      <h1 className="text-4xl text-slate-100 my-12 font-semibold">Currency Convertor</h1>
      <div className="w-1/3 bg-slate-500 shadow-2xl rounded p-8 flex flex-col justify-center items-center">
        <InputComponent
          label="From"
          amount={amount}
          currency={fromCurrency}
          handleAmount={handleFromAmount}
          handleCurrency={setFromCurrency}
          options={options}
        />
        <div
          className="bg-blue-700 inline-block p-2 px-5 -mt-2 z-30 rounded-md  cursor-pointer"
          onClick={handleSwap}
        >
          <IoGitCompare className="text-slate-200" />
        </div>
        <InputComponent
          label="To"
          amount={toAmount}
          currency={toCurrency}
          handleAmount={handleToAmount}
          handleCurrency={setToCurrency}
          options={options}
          className="-mt-2"
          isInputDisable={true}
        />
      </div>
    </div>
  );
}

export default App
