import {useState, useEffect} from "react"
import PasswordBox from "../PasswordBox";


const PasswordGenerator = () => { 
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [digitsLength, setDigitsLength] = useState(2);
    const [symbolslLength, setSymbolsLength] = useState(2);

    useEffect(() => {
        const draftPassword = [];

        let lettersLength = passwordLength - digitsLength - symbolslLength;
        if (lettersLength < 0 ) lettersLength = 0
        
        draftPassword.push(...Array.from({ length: digitsLength }, randomDigit));
        draftPassword.push(...Array.from({ length: symbolslLength }, randomSymbol));
        draftPassword.push(...Array.from({ length: lettersLength}, randomLetter));

        
        
        setPassword(
            draftPassword
                .slice(0, passwordLength)
                .sort(() => Math.random() - 0.5)
                .join("")
        );
    }, [passwordLength, digitsLength, symbolslLength]);
    
    const randomDigit = () => { 
        const digits = "0123456789";

        return digits[Math.floor(Math.random() * digits.length)];
    }

    const randomSymbol = () => { 
        const symbols = "#$%(+-)?{}|*";

        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const randomLetter = () => { 
        const letters = "abcdefghijklmnopqrstuvwxyz";

        const letter = letters[Math.floor(Math.random() * letters.length)];

        return Math.random() >= 0.5 ? letter : letter.toUpperCase();
    }



    return <>
        <div className="slider">
            <label htmlFor="password-length">Tamanho</label>
            <input id="password-length" type="range" min={4} max={64} value={passwordLength} onChange={({ target }) => setPasswordLength(parseInt(target.value))} />
            <span>{passwordLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="digits-length">Digitos</label>
            <input id="digits-length" type="range" min={0} max={10} value={digitsLength} onChange={({ target }) => setDigitsLength(parseInt(target.value))} />
            <span>{digitsLength}</span>
        </div>

        <div className="slider">
            <label htmlFor="symbols-length">Simbolos</label>
            <input id="symbols-length" type="range" min={0} max={10} value={symbolslLength} onChange={({ target }) => setSymbolsLength(parseInt(target.value))} />
            <span>{symbolslLength}</span>
        </div>

        <PasswordBox password={password} />
    </>;
}

export default PasswordGenerator;