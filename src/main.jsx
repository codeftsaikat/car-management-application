import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProvider from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>
   <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
 </div>
)
