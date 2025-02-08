import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import HomeTwo from '../pages/HomeTwo';
import HomeEight from '../pages/HomeEight';
import HomeSeven from '../pages/HomeSeven';
import HomeSix from '../pages/HomeSix';
import HomeFive from '../pages/HomeFive';
import HomeFour from '../pages/HomeFour';
import HomeThree from '../pages/HomeThree';
import Course from '../pages/Course';
import Lesson from '../pages/Lesson';
import CourseDetails from '../pages/CourseDetails';
import About from '../pages/About';
import Instructor from '../pages/Instructor';
import InstructorDetails from '../pages/InstructorDetails';
import Event from '../pages/Event';
import EventDetails from '../pages/EventDetails';
import Shop from '../pages/Shop';
import ShopDetails from '../pages/ShopDetails';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import CheckOut from '../pages/CheckOut';
import Blog from '../pages/Blog';
import BlogTwo from '../pages/BlogTwo';
import BlogThree from '../pages/BlogThree';
import BlogDetails from '../pages/BlogDetails';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Contact from '../pages/Contact';
import InstructorDashboard from '../pages/InstructorDashboard';
import InstructorProfile from '../pages/InstructorProfile';
import InstructorEnrollCourse from '../pages/InstructorEnrolledCourses';
import InstructorWishlist from '../pages/InstructorWishlist';
import InstructorReview from '../pages/InstructorReview';
import InstructorQuiz from '../pages/InstructorQuiz';
import InstructorHistory from '../pages/InstructorHistory';
import InstructorCourses from '../pages/InstructorCourses';
import InstructorAnnouncement from '../pages/InstructorAnnouncement';
import InstructorAssignment from '../pages/InstructorAssignment';
import InstructorSetting from '../pages/InstructorSetting';
import InstructorAttempt from '../pages/InstructorAttempt';
import StudentDashboard from '../pages/StudentDashboard';
import StudentProfile from '../pages/StudentProfile';
import StudentEnrollCourse from '../pages/StudentEnrolledCourses';
import StudentWishlist from '../pages/StudentWishlist';
import StudentReview from '../pages/StudentReview';
import StudentAttempt from '../pages/StudentAttempt';
import StudentHistory from '../pages/StudentHistory';
import StudentSetting from '../pages/StudentSetting';
import NotFound from '../pages/NotFound';
import { toAbsoluteUrl } from '../helper/HelperConstants';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={toAbsoluteUrl("/")} element={<Home />} />
        <Route path={toAbsoluteUrl("/home-two")} element={<HomeTwo />} />
        <Route path={toAbsoluteUrl("/home-three")} element={<HomeThree />} />
        <Route path={toAbsoluteUrl("/home-four")} element={<HomeFour />} />
        <Route path={toAbsoluteUrl("/home-five")} element={<HomeFive />} />
        <Route path={toAbsoluteUrl("/home-six")} element={<HomeSix />} />
        <Route path={toAbsoluteUrl("/home-seven")} element={<HomeSeven />} />
        <Route path={toAbsoluteUrl("/home-eight")} element={<HomeEight />} />
        <Route path={toAbsoluteUrl("/courses")} element={<Course />} />
        <Route path={toAbsoluteUrl("/course-details")} element={<CourseDetails />} />
        <Route path={toAbsoluteUrl("/lesson")} element={<Lesson />} />
        <Route path={toAbsoluteUrl("/about-us")} element={<About />} />
        <Route path={toAbsoluteUrl("/instructors")} element={<Instructor />} />
        <Route path={toAbsoluteUrl("/instructor-details")} element={<InstructorDetails />} />
        <Route path={toAbsoluteUrl("/events")} element={<Event />} />
        <Route path={toAbsoluteUrl("/events-details")} element={<EventDetails />} />
        <Route path={toAbsoluteUrl("/shop")} element={<Shop />} />
        <Route path={toAbsoluteUrl("/shop-details")} element={<ShopDetails />} />
        <Route path={toAbsoluteUrl("/cart")} element={<Cart />} />
        <Route path={toAbsoluteUrl("/wishlist")} element={<Wishlist />} />
        <Route path={toAbsoluteUrl("/check-out")} element={<CheckOut />} />
        <Route path={toAbsoluteUrl("/blog")} element={<Blog />} />
        <Route path={toAbsoluteUrl("/blog-2")} element={<BlogTwo />} />
        <Route path={toAbsoluteUrl("/blog-3")} element={<BlogThree />} />
        <Route path={toAbsoluteUrl("/blog-details")} element={<BlogDetails />} />
        <Route path={toAbsoluteUrl("/login")} element={<Login />} />
        <Route path={toAbsoluteUrl("/registration")} element={<Registration />} />
        <Route path={toAbsoluteUrl("/contact")} element={<Contact />} />
        <Route path={toAbsoluteUrl("/instructor-dashboard")} element={<InstructorDashboard />} />
        <Route path={toAbsoluteUrl("/instructor-profile")} element={<InstructorProfile />} />
        <Route path={toAbsoluteUrl("/instructor-enrolled-courses")} element={<InstructorEnrollCourse />} />
        <Route path={toAbsoluteUrl("/instructor-wishlist")} element={<InstructorWishlist />} />
        <Route path={toAbsoluteUrl("/instructor-review")} element={<InstructorReview />} />
        <Route path={toAbsoluteUrl("/instructor-attempts")} element={<InstructorAttempt />} />
        <Route path={toAbsoluteUrl("/instructor-history")} element={<InstructorHistory />} />
        <Route path={toAbsoluteUrl("/instructor-courses")} element={<InstructorCourses />} />
        <Route path={toAbsoluteUrl("/instructor-announcement")} element={<InstructorAnnouncement />} />
        <Route path={toAbsoluteUrl("/instructor-quiz")} element={<InstructorQuiz />} />
        <Route path={toAbsoluteUrl("/instructor-assignment")} element={<InstructorAssignment />} />
        <Route path={toAbsoluteUrl("/instructor-setting")} element={<InstructorSetting />} />
        <Route path={toAbsoluteUrl("/student-dashboard")} element={<StudentDashboard />} />
        <Route path={toAbsoluteUrl("/student-profile")} element={<StudentProfile />} />
        <Route path={toAbsoluteUrl("/student-enrolled-courses")} element={<StudentEnrollCourse />} />
        <Route path={toAbsoluteUrl("/student-wishlist")} element={<StudentWishlist />} />
        <Route path={toAbsoluteUrl("/student-review")} element={<StudentReview />} />
        <Route path={toAbsoluteUrl("/student-attempts")} element={<StudentAttempt />} />
        <Route path={toAbsoluteUrl("/student-history")} element={<StudentHistory />} />
        <Route path={toAbsoluteUrl("/student-setting")} element={<StudentSetting />} />
        {/* <Route path="/blog-details/:id" element={<DynamicBlogDeatils />} /> */}
        <Route path={toAbsoluteUrl("*")} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
