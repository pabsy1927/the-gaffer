import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from '@/lib/store'
import Home from '@/pages/Home'
import CreateEvent from '@/pages/CreateEvent'
import EventHub from '@/pages/EventHub'
import JoinEvent from '@/pages/JoinEvent'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/create"      element={<CreateEvent />} />
          <Route path="/event"       element={<EventHub />} />
          <Route path="/join"        element={<JoinEvent />} />
          <Route path="/join/:code"  element={<JoinEvent />} />
          <Route path="*"            element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a3a2a',
            color: '#d1fae5',
            border: '1px solid #14532d',
            fontFamily: '"Crimson Pro", serif',
            fontSize: '15px',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
    </AppProvider>
  )
}
