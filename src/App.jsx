import { Routes, Route } from 'react-router-dom';
import { Error } from './views/Error';

import { Screen } from './views/Screen';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
