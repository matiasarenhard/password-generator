import "./styles.css";

const CopyPasswordButton = ({ password }) => {
    const copyPasswordClipboard = () => {
        navigator.clipboard.writeText(password);
     };
    return (
        <div className="actions">
            <button className="copy-password-clipboard" onClick={copyPasswordClipboard}>
                Copiar
            </button>
        </div>
    );
};

export default CopyPasswordButton;