import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Presentacion from './presentacion';
import Conocimientos from './conocimientos';
import Proyectos from './proyectos';
import Header from './header';

const FullpageWrapper = () => (
  <>
    <div id="header-container">
      <Header />
    </div>
    <ReactFullpage
      licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
      navigation
      sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Presentacion />
            </div>
            <div className="section">
              <Conocimientos />
            </div>
            <div className="section">
              <Proyectos />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default FullpageWrapper;