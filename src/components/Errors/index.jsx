import Error from "./Error";

const Errors = ({ errors }) => {
  return (
    <div className="errors-container">
      {errors.map((error, index) => {
        return <Error key={'error' + index} error={error}></Error>;
      })}
    </div>
  );
};

export default Errors;
