import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';  //ESM 방식으로 root 컴포넌트인 App 컴포넌트를 import

createRoot(document.getElementById('root')).render(
  <App /> // 태그 형태로 루트 컴포넌트 불러와서 렌더링
)
