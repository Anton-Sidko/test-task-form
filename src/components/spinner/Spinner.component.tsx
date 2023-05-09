import './Spinner.styles.scss';

const Spinner = function (): JSX.Element {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  );
};

export default Spinner;
