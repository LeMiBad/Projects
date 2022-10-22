import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
