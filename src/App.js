import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider} from "@mui/material"
import { indigo, lightBlue } from '@mui/material/colors';
import Nav from './components/nav/Nav';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import FeedHome from './pages/users/FeedHome';
import Chats from './pages/users/Chats';
import BottomBar from './components/nav/BottomBar';
import Profile from './pages/users/Profile';
import Settings from './pages/Settings';
const theme = createTheme({
    palette: {
        primary: lightBlue,
        secondary: indigo,
    },
    typography: {
        fontFamily: 'Nunito'
    }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Nav/>
            <BottomBar/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path='auth'>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<Signup/>}/>
                    </Route>
                    <Route path='feed' element={<FeedHome/>}/>
                    <Route path='chats' element={<Chats/>}/>
                    <Route path='user'>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path=":userId" element={<Profile/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App