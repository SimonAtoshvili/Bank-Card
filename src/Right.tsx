import { useEffect, useState } from "react";

interface RightProps {
    holderName: string;
    cardNumber: string;
    cvc: string;
    month: string;
    year: string;
    setHolderName: React.Dispatch<React.SetStateAction<string>>;
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    setCvc: React.Dispatch<React.SetStateAction<string>>;
    setMonth: React.Dispatch<React.SetStateAction<string>>;
    setYear: React.Dispatch<React.SetStateAction<string>>;
    confirm: boolean | undefined;
    setConfirm: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    allValid: boolean | undefined;
    setAllValid: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Right: React.FC<RightProps> = ({ holderName, cardNumber, cvc, month, year, confirm, allValid, setHolderName, setCardNumber, setCvc, setMonth, setYear, setConfirm, setAllValid }) => {
    const [nameValid, setNameValid] = useState<boolean | undefined>()
    const [cardValid, setCardValid] = useState<boolean | undefined>()
    const [monthValid, setMonthValid] = useState<boolean | undefined>()
    const [yearValid, setYearValid] = useState<boolean | undefined>()
    const [cvcValid, setCvcValid] = useState<boolean | undefined>()

    const digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        if (confirm === true) {
            setAllValid(nameValid && cardValid && monthValid && yearValid && cvcValid)
        }
    }, [confirm])

    useEffect(() => {
        if (confirm !== false) {
            setHolderName(holderName.split(' ').filter((item) => item !== '').join(' '))
            setConfirm(undefined)
        }
    }, [confirm])

    return (
        <div className='right'>
            {allValid
                ?
                <Confirmed />
                :
                <div className="form">
                    <div className="first">
                        <label htmlFor='name'>CARDHOLDER NAME</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='e.g. Jane Appleseed'
                            value={holderName}
                            style={confirm === false ? {} : nameValid ? {} : { borderColor: '#FF5050' }}
                            onChange={(e) => {
                                setNameValid(true);
                                setAllValid(undefined);
                                setHolderName(e.target.value);
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#6348FE'
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = (confirm !== false ? (nameValid ? '' : '#FF5050') : '')
                            }}
                        />
                        <div className="error_box">
                            {confirm === false ? null : nameValid ? null : <p id="name_error">Can only contain two separated words with alphabetical symbols only!</p>}
                        </div>
                    </div>
                    <div className="first">
                        <label htmlFor='number'>CARD NUMBER</label>
                        <input
                            type="number"
                            id='number'
                            placeholder='e.g. 1234 5678 9123 000'
                            value={cardNumber}
                            style={confirm === false ? {} : cardValid ? {} : { borderColor: '#FF5050' }}
                            onChange={(e) => {
                                confirm === true ? setConfirm(undefined) : '';
                                setAllValid(undefined);
                                setCardValid(true);
                                setCardNumber(e.target.value.slice(0, 16));
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#6348FE'
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = (confirm !== false ? (cardValid ? '' : '#FF5050') : '')
                            }}
                        />
                        <div className="error_box">
                            {confirm === false ? null : cardValid ? null : <p>Must contain 16 digits!</p>}
                        </div>
                    </div>
                    <div className="second">
                        <label htmlFor="mm">EXP. DATE (MM/YY)</label>
                        <label htmlFor="cvc">CVC</label>
                    </div>
                    <div className="third" style={{ position: 'relative' }}>
                        <div>
                            <input
                                type="number"
                                placeholder='MM'
                                id='mm'
                                value={month}
                                style={confirm === false ? {} : monthValid ? {} : { borderColor: '#FF5050' }}
                                onChange={(e) => {
                                    confirm === true ? setConfirm(undefined) : '';
                                    setAllValid(undefined);
                                    setMonthValid(true);
                                    if (Number(e.target.value.replace(/\D/g, '').slice(0, 2)) < 12 || e.target.value.length < 2) {
                                        setMonth(e.target.value.replace(/\D/g, '').slice(0, 2));
                                    } else {
                                        setMonth('12')
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isValidInput = /^\d$/.test(e.key) || e.key === 'Backspace';
                                    if (!isValidInput) {
                                        e.preventDefault();
                                    }
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#6348FE'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = (confirm !== false ? (monthValid ? '' : '#FF5050') : '')
                                }}
                            />
                            <input
                                type="number"
                                placeholder='YY'
                                id='yy'
                                value={year}
                                style={confirm === false ? {} : yearValid ? {} : { borderColor: '#FF5050' }}
                                onChange={(e) => {
                                    confirm === true ? setConfirm(undefined) : '';
                                    setAllValid(undefined);
                                    setYearValid(true);
                                    if (Number(e.target.value.replace(/\D/g, '').slice(0, 2)) > 23 || e.target.value.length < 2) {
                                        setYear(e.target.value.replace(/\D/g, '').slice(0, 2));
                                    } else {
                                        setYear('23')
                                    }
                                }}
                                onKeyDown={(e) => {
                                    const isValidInput = /^\d$/.test(e.key) || e.key === 'Backspace';
                                    if (!isValidInput) {
                                        e.preventDefault();
                                    }
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#6348FE'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = (confirm !== false ? (yearValid ? '' : '#FF5050') : '')
                                }}
                            />
                        </div>
                        <input
                            type="number"
                            placeholder='e.g. 123'
                            id="cvc"
                            value={cvc}
                            style={confirm === false ? {} : cvcValid ? {} : { borderColor: '#FF5050' }}
                            onChange={(e) => {
                                confirm === true ? setConfirm(undefined) : '';
                                setAllValid(undefined);
                                setCvcValid(true);
                                setCvc(e.target.value.replace(/\D/g, '').slice(0, 3));
                            }}
                            onKeyDown={(e) => {
                                const isValidInput = /^\d$/.test(e.key) || e.key === 'Backspace';

                                if (!isValidInput) {
                                    e.preventDefault();
                                }
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#6348FE'
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = (confirm !== false ? (cvcValid ? '' : '#FF5050') : '')
                            }}
                        />
                        <div className="error_box" style={{ position: 'absolute', top: '45px', left: 0 }}>
                            {confirm === false ? null : monthValid && yearValid ? null : <p>Must contain 2 digits!</p>}
                        </div>
                        <div className="error_box" style={{ position: 'absolute', top: '45px', right: 0 }}>
                            {confirm === false ? null : cvcValid ? null : <p style={{ textAlign: 'right', width: '100%' }}>Must contain 3 digits!</p>}
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setConfirm(true);
                            for (let i = 0; i < digits.length; i++) {
                                if (holderName.includes(String(digits[i])) || holderName.split(' ').filter(item => item != '').length != 2) {
                                    setNameValid(false)
                                    break;
                                } else {
                                    setNameValid(true)
                                }
                            }
                            setCardValid(cardNumber != '' && cardNumber.length == 16);
                            setMonthValid(month != '' && month.length == 2);
                            setYearValid(year != '' && year.length == 2);
                            setCvcValid(cvc != '' && cvc.length == 3);
                        }}
                    >Confirm</button>
                </div>
            }
        </div>
    )
}


export default Right;

function Confirmed() {
    return (
        <div className='confirmed'>
            <img src='../public/images/icon-complete.svg' alt="complete" />
            <h1>Thank You!</h1>
            <p>We've added your card details</p>
        </div>
    )
}