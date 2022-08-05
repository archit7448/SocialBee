import loader from "../../assets/small.svg";

const Loader = () => {
  return (
    <div className="flex-center">
      <img src={loader} className="loader" />
    </div>
  );
};

export { Loader };
