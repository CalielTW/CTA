import { useContext } from "react";
import twitchContext from "../contexts/twitch/twitchContext";

const useTwitch = () => useContext(twitchContext);

export default useTwitch;
