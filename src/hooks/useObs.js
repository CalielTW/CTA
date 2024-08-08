import { useContext } from "react";
import obsContext from "../contexts/obs/obsContext";

const useObs = () => useContext(obsContext);

export default useObs;
