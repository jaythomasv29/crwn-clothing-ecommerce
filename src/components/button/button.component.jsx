import "./button.styles.scss"


/*
BUTTON TYPES
default

inverted

google-sign-in btn
*/
const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}
const Button = ({ buttonType, children, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}>
      {children}
    </button>
  )
}

export default Button