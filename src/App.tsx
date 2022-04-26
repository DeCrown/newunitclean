import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {authRoutes, freeRoutes} from "src/utils/routes";
import Template from "components/template";
import {Provider} from "react-redux";
import {store} from "./store";
import {route} from "src/utils/types";
import {Main} from "src/themes/main";
import {ThemeProvider} from "styled-components";
import {isMobile} from "react-device-detect";
import GlobalStyles from './style/globalStyles';

const Page = (route:route, i:number) => {
    return (<Route key={i} path={route.url} element={
        <Template clearBackground={isMobile ? route.mobileClearBackground : route.browserClearBackground}>{route.page()}</Template>
    } />);
}

function App() {
  return (
      <div className={ isMobile ? 'mobile' : 'he' }>
          <BrowserRouter>
              <ThemeProvider theme={Main}>
                  <Provider store={store}>
                      <Routes>
                          { authRoutes.map((route, i) => Page(route, i)) }
                          { freeRoutes.map((route, i) => Page(route, i)) }
                      </Routes>
                      <GlobalStyles />
                  </Provider>
              </ThemeProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
