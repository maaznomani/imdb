import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  
    return (
      <Alert
        variant={variant}
        //onClose={() => setShow(false)}
        style={{ padding: '0.1rem', fontSize: '0.6rem' }}
      >
        {children}
      </Alert>
    )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
