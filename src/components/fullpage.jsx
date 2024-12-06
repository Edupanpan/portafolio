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
      anchors={['firstSection', 'secondSection', 'thirdSection']}
      sectionsColor={['#39594D']}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-menuanchor="firstSection">
              <Presentacion />
            </div>
            <div className="section" data-menuanchor="secondSection">
              <Conocimientos />
            </div>
            <div className="section" data-menuanchor="thirdSection">
              <Proyectos />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </>
);

export default FullpageWrapper;
