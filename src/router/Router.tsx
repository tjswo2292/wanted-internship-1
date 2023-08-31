import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Main from '../components/main'
import Detail from '../components/detail'
import Layout from '../layout/Layout'
import { ROUTES } from './routes'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.DETAIL} element={<Detail />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
