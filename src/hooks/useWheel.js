import { useContext } from "react";
import wheelContext from "../contexts/wheel/wheelContext";

const useWheel = () => useContext(wheelContext);

export default useWheel;
