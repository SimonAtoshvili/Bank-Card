interface LeftProps {
    holderName: string;
    cardNumber: string;
    cvc: string;
    month: string;
    year: string;
    allValid: boolean | undefined;
}

const Left: React.FC<LeftProps> = ({ holderName, cardNumber, cvc, month, year, allValid }) => {
    let updatedCard: string = ''
    for (let i = 0; i < cardNumber.length; i++) {
        if ((i + 1) % 4 == 0 && i != cardNumber.length - 1) {
            updatedCard += (cardNumber[i] + ' ')
        } else {
            updatedCard += cardNumber[i]
        }
    }
    return (
        <div className='left'>
            <div className='cards'>
                <div className='card_front'>
                    <img src='./images/card-logo.svg' />
                    <p className='card_number'>{updatedCard ? updatedCard : '0000 0000 0000 0000'}</p>
                    <div className='front_bottom'>
                        <h1 className='card_holder'>{allValid ? holderName : 'JANE APPLESEED'}</h1>
                        <p className='exp_date'><span>{month && allValid ? month : '00'}/<span>{year && allValid ? year : '00'}</span></span></p>
                    </div>
                </div>
                <div className='card_back'>
                    <p>{cvc && allValid ? cvc : '000'}</p>
                </div>
            </div>
        </div >
    )
}

export default Left;