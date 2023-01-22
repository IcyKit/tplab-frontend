import { Spinner } from "reactstrap";
import "./AppLoading.scss";
const AppLoading = () => {
  return (
    <div className="app-loading">
      <Spinner color="primary" />
    </div>
  );
};

export default AppLoading;
