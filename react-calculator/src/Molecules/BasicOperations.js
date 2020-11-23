import { ButtonKey } from '../Atoms/ButtonKey'
import './BasicOperations.css'

export const BasicOperations = (props) => {
    return(
        <div className="bo-container">
            <ButtonKey value={'+'} handleClick={props.handleClick}/>
            <ButtonKey value={'-'} handleClick={props.handleClick}/>
            <ButtonKey value={'*'} handleClick={props.handleClick}/>
            <ButtonKey value={'/'} handleClick={props.handleClick}/>
        </div>
    )
}