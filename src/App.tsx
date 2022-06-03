import React from 'react';
import {routes} from "src/utils/routes";
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
            <Template auth={route.auth} clearBackground = { isMobile ? route.mobileClearBackground : route.browserClearBackground}>
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
                      { routes.map((route, i) => Page(route, i)) }
                  </Routes>
              </BrowserRouter>
              <GlobalStyles />
          </ThemeProvider>
      </div>
  );
}

export default App;
