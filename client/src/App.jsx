import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";


import { AdminLogin, AdminSignup, AdminLanding, AdminCourses, AdminCourse, AddCourse } from "./components/Admin/index";
import { Login, Signup, Landing, ShowCourses, PurchasedCourses, BuyCourse } from "./components/User";


function App() {


  return (
    <>
      <RecoilRoot>
        <BrowserRouter>

          {/* Admin Routes */}
          <Routes>
            <Route exact path="/admin" element={<AdminLanding />} />
            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/admin/signup" element={<AdminSignup />} />
            <Route exact path="/admin/courses" element={<AdminCourses />} />
            <Route exact path="/admin/course/:courseId" element={<AdminCourse />} />
            <Route exact path="/admin/addCourse" element={<AddCourse />} />
          </Routes>

          {/* User Routes  */}

          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/courses" element={<ShowCourses />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/purchasedCourses" element={<PurchasedCourses />} />
            <Route exact path="/Course/:courseId" element={<BuyCourse />} />
          </Routes>

        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App

