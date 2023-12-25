import { useEffect, useState } from "react";
import getOptions from "../services/apiOptions";

export function useOptions() {
  const [randomChoices, setRandomChoices] = useState([]);
  useEffect(function () {
    getOptions().then((data) => setRandomChoices(data));
  }, []);
  return { randomChoices };
}
