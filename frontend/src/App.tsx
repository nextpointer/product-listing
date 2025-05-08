import { RouterProvider } from 'react-router-dom'
import { router } from '@/Routes'
import { Toaster } from 'sonner'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}