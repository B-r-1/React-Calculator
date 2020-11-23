import './PrincipalDisplay.css'

export const PrincipalDisplay = (props) => {

    const handleFormat = () => {

        let values = props.result;

         return values;
    }


    return (
        <div className="principal-display">
            
            <textarea
             readOnly
             value={handleFormat()}>
            </textarea>
            
        </div>
    )
}