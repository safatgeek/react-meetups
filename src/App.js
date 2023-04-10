import { BrowserRouter, Route, Routes } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      {/* <h1>My Todos</h1>
      <Todo text = "learn todo"/>
      <Todo text = "learn react"/>
      <Todo text = "learn nextJS"/> */}

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetups />} />
            <Route path="/new-meet-up" element={<NewMeetup />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
