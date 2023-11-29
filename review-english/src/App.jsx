import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/:day" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;