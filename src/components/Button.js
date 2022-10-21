

function Button(props) {
    const buttonAlertFunction = (buttonNum) => {alert('Button clicked is button number: '+props.number)};
    return ( 
            <button onClick={buttonAlertFunction}>
                Button number {props.number}
            </button>
     );
}

export default Button;