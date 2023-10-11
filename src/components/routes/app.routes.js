import { Route, Routes } from 'react-router-dom'
import { Contact } from '../../pages/contact'
import { HomePage } from '../../pages/home'
import { Services } from '../../pages/services'

export const AppRoutes = () => {
  return  <Routes>
      <Route path='home'element={<HomePage />}/>
      <Route path='contact'element={<Contact />}/>
      <Route path='services'element={<Services />}/>
      <Route path='*'element={<HomePage />}/>
  </Routes>
}
