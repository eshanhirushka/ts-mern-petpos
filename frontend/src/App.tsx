import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { SiderNav, TopBar } from "./common"
import { Home, Litter } from './pages';


function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='app'>
            <SiderNav />
              <main className='content'>
                <TopBar />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/litter' element={<Litter />} />
                  </Routes>
              </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
