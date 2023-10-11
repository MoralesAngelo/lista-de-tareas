import React from 'react'
import { Layout } from '../layout/layout'
import { AppRoutes } from '../routes/app.routes'


export const App = () => {
  return <Layout>
    <main>  <AppRoutes /></main>
  </Layout>
}

