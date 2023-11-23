import { useState } from 'react'
import Left from './Left'
import Right from './Right';

function App() {
  const [holderName, setHolderName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cvc, setCvc] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [confirm, setConfirm] = useState<boolean | undefined>(false)
  const [allValid, setAllValid] = useState<boolean | undefined>(undefined);


  return (
    <>
      <Left
        holderName={holderName}
        cardNumber={cardNumber}
        cvc={cvc}
        month={month}
        year={year}
        allValid={allValid}
      />
      <Right
        holderName={holderName}
        cardNumber={cardNumber}
        cvc={cvc}
        month={month}
        year={year}
        setHolderName={setHolderName}
        setCardNumber={setCardNumber}
        setCvc={setCvc}
        setMonth={setMonth}
        setYear={setYear}
        confirm={confirm}
        setConfirm={setConfirm}
        allValid={allValid}
        setAllValid={setAllValid}
      />
    </>
  )
}

export default App
