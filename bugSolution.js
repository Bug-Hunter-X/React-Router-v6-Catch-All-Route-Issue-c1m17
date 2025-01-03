```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { /* ... */ }
function About() { /* ... */ }
function NotFound() {
  let location = useLocation();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
}
export default App;
```