import { PropTypes } from "prop-types";

function Button({label = "delete", backgroundColor = "red", size = "md", handleClick}){
    const style = {
        backgroundColor,
        padding: "0.5rem 1rem",
        border:"none",
    }

    return (
        <button onClick={handleClick} style={style}>
          {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: "md",
    handleClick: PropTypes.func,
  }

  export default Button