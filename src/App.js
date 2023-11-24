import React, { useState, useEffect } from 'react'

// Components
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import NewBox from './components/NewBox';
import Article from './components/Article';
import ScreenSize from './components/ScreenSize';

//  Images
import web from './assets/images/image-web-3-desktop.jpg'
import retro from './assets/images/image-retro-pcs.jpg'
import laptop from './assets/images/image-top-laptops.jpg'
import gaming from './assets/images/image-gaming-growth.jpg'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const screenSize = ScreenSize()

  useEffect(() => {
    if (screenSize.width < 500){
      setIsMobile(true)
    }
  }, [screenSize.width]);

  return (
    <div>
      <Navbar
        mobile={isMobile}
      />
      <body>
        <main>
          <Featured 
            image={web}
            title={'The Bright Future of Web 3.0?'}
            desc={'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?'}
          />
          <NewBox/>
        </main>
        <div className='articles'>
          <Article 
            number={'01'}
            image={retro}
            title={'Reviving Retro PCs'}
            para={'What happens when old PCs are given modern upgrades?'}
          />
          <Article
            number={'02'}
            image={laptop}
            title={'Top 10 Laptops of 2022'}
            para={'Our best picks for various needs and budgets.'}
          />
          <Article
            number={'03'}
            image={gaming}
            title={'The Growth of Gaming'}
            para={'How the pandemic has sparked fresh opportunities'}
          />
        </div>
      </body>

      
    </div>
  );
}

export default App;
