import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation"

const Shop = () => {
  return (
    <div>
      <h2>Shop page example</h2>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>  {/* parent route always present on page */}
        <Route index element={<Home />} /> {/* index - this route (page) will show at start on parents path (/) */}
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
