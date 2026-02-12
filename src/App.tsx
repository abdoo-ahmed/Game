
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Route'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'
import LoadingScreen from './Features/Components/LoadingScreen/LoadingScreen'

function App() {

  const queryClient = new QueryClient()
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingScreen />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  )
}

export default App
