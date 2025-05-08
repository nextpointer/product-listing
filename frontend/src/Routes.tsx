import { createBrowserRouter } from 'react-router-dom'
import { SearchPage } from '@/Pages/SearchPage'
import { DetailsPage } from '@/Pages/DetailPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
  },
  {
    path: '/products/:id',
    element: <DetailsPage />,
  },
])