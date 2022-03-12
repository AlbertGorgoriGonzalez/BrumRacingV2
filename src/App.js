import React from "react";
import RouterWeb from "./Router";
import {initAxiosInterceptors} from './assets/utils/helper'

const App = () => {
  initAxiosInterceptors()
  return (
    <div>
      <RouterWeb />
    </div>
  );
}

export default App;
