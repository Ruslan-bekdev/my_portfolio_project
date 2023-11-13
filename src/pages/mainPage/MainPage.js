import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch();
    const {posts,post} = useSelector(state => state)
  return(
      <></>
  )
};

export default MainPage;