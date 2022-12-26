import { CircularProgress } from "@mui/material";
import React, {useEffect, useState} from "react";

const Splash = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // whatever you need to do
    setTimeout( setLoading(false), 5000); 
   
  }, [])

  return !loading ? children : <CircularProgress/>
}

export default Splash