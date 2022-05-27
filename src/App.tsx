import React from 'react';
import {authRoutes, freeRoutes} from "src/utils/routes";
import Template from "components/template";
import {route} from "src/utils/types";
import {Main} from "src/themes/main";
import {ThemeProvider} from "styled-components";
import {isMobile} from "react-device-detect";
import GlobalStyles from './style/globalStyles';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Page = (route:route, i:number) => {
    return (
        <Route key={i} path={route.url} element={
            <Template clearBackground = { isMobile ? route.mobileClearBackground : route.browserClearBackground}>
                {<route.page/>}
            </Template>
        }
        />
    );
}

function App() {
  return (
      <div className={ isMobile ? 'mobile' : '' }>
          <ThemeProvider theme={Main}>
              <BrowserRouter>
                  <Routes>
                      { authRoutes.map((route, i) => Page(route, i)) }
                      { freeRoutes.map((route, i) => Page(route, i)) }
                  </Routes>
              </BrowserRouter>
              <GlobalStyles />
          </ThemeProvider>
      </div>
  );
}

export default App;
