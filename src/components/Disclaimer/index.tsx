import "./Disclaimer.scss";

interface DisclaimerProps {
  disclaimer: string;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ disclaimer }) => {
  return (
    <div className="disclaimer">
      <h3>{disclaimer}</h3>
    </div>
  );
};

export default Disclaimer;
