import React, { useEffect, useState } from "react";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";
import Head from "./components/views/global/Head";
import { Routes, Route, useSearchParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setData as setDataFromRedux } from "./redusx-state/reducer/data";
import { getActualyUrl } from "./redusx-state/reducer/actualyUrl";

function App() {

  // const [data, setData] = useState([])
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataReducer.data)
  // const getUrl = () => dispatch(getActualyUrl(window.location.href))
  // const url = useSelector(state => state.actualyUrl.url)
  
  const setData = (param) => dispatch(setDataFromRedux(param))

  return (
        <>
        <Head  />
        {/* <div>{url}</div>
        <button onClick={getUrl}>Нажми</button> */}
        <Routes>
          <Route
            path="/main"
            element={<Main action={setData} />} />
            <Route
            path="/stat/:viewType"
            element={<Stat statData={data} />} />
            <Route
            path="/plan"
            element={<Plan />} />
            <Route
            path="*"
            element={<Main action={setData} />} />
        </Routes>
        </>
  );
}

export default App;
