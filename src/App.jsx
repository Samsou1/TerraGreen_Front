import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./config/PrivateRoute";
import NotLoggedInRoute from "./config/NotLoggedInRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Resetpassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ShowProject from "./pages/ShowProject";
import NewProject from "./pages/NewProject";
import MyProjects from "./pages/MyProjects";
import EditProject from "./pages/EditProject";
import NewPassword from "./pages/NewPassword"
import {createContext, useState} from "react";
import NotFound from "./pages/NotFound";

import CookieConsent from "react-cookie-consent";

export const AppContext = createContext(null);

function App() {
  const [latestProject, setLatestProject] = useState(AppContext);
  return (
    <BrowserRouter>
      <CookieConsent
        location="bottom"
        cookieName="acceptCookies"
        expires={999}
        overlay
        enableDeclineButton
        flipButtons
        buttonStyle={{ backgroundColor: "#4CAF50", borderRadius: "5px" }}
        declineButtonStyle={{ backgroundColor: "#DB0A26", borderRadius: "5px" }}
      >
        This website uses cookies to enhance the user experience. It will only
        store your session, your email address and any other information you write in
        your profile. You can delete your account at any moment.
      </CookieConsent>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ShowProject />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/myprojects" element={<MyProjects />} />
            <Route path="/editproject/:id" element={<EditProject />} />
            <Route
              path="/newproject"
              element={
                <AppContext.Provider
                  value={{ latestProject, setLatestProject }}
                >
                  <NewProject />{" "}
                </AppContext.Provider>
              }
            />
          </Route>
          <Route element={<NotLoggedInRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/new_password" element={<NewPassword/>} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
