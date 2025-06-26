import { Route, Routes } from 'react-router-dom'
import './App.css'
import Chat from './components/chat/Chat'
import Login from './components/common/Login'
import Register from './components/common/Register'
import Header from './components/common/Header'
import NotFound from './components/common/NotFound'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
function App() {

  return (
    <>
      <main id="content">
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Chat />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
