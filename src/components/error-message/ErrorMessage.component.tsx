import './ErrorMessage.styles.scss';

const ErrorMessage = function (): JSX.Element {
  return (
    <p className="error-message">
      Sorry, can't download data. Please try again
    </p>
  );
};

export default ErrorMessage;
