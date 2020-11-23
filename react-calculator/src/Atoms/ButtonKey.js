import './ButtonKey.css'

export const ButtonKey = (props) => {

    return (
        <div className="button-key" onClick={(e) => props.handleClick(props.value)}>{props.value}</div>        
    )
  }