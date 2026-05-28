import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

