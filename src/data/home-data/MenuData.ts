import { toAbsoluteUrl } from "../../helper/HelperConstants";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    menu_class?: string;
    home_sub_menu?: {
        menu_details: {
            link: string;
            title: string;
            badge?: string;
            badge_class?: string;
        }[];
    }[];
    sub_menus?: {
        link: string;
        title: string;
        dropdown?: boolean;
        mega_menus?: {
            link: string;
            title: string;
        }[];
    }[];
};

const menu_data: MenuItem[] = [

    {
        id: 1,
        title: "Home",
        link: toAbsoluteUrl("/"),
        menu_class: "mega-menu",
        // home_sub_menu: [
        //     {
        //         menu_details: [
        //             { link: toAbsoluteUrl("/"), title: "Main Home" },
        //             { link: toAbsoluteUrl("/home-two"), title: "Online Course", badge_class: "tg-badge", badge: "Hot" },
        //             { link: toAbsoluteUrl("/home-three"), title: "University", badge_class: "tg-badge-two", badge: "New" },
        //             { link: toAbsoluteUrl("/home-four"), title: "Yoga Instructor", badge_class: "tg-badge-two", badge: "New" },
        //             { link: toAbsoluteUrl("/home-five"), title: "Kindergarten", badge_class: "tg-badge", badge: "Hot" },]
        //     },
        //     {
        //         menu_details: [
        //             { link: toAbsoluteUrl("/home-six"), title: "Language Academy", badge_class: "tg-badge-two", badge: "New" },
        //             { link: toAbsoluteUrl("/home-seven"), title: "Business Coach", badge_class: "tg-badge-two", badge: "New" },
        //             { link: toAbsoluteUrl("/home-eight"), title: "Kitchen Coach", badge_class: "tg-badge", badge: "Hot" },]
        //     },
        // ],
    },
    {
        id: 2,
        title: "Courses",
        link: "#",
        // sub_menus: [
        //     { link: toAbsoluteUrl("/courses"), title: "All Courses" },
        //     { link: toAbsoluteUrl("/course-details"), title: "Course Details" },
        //     { link: toAbsoluteUrl("/lesson"), title: "Course Lesson" },
        // ],
    },
    {
        id: 3,
        title: "Pages",
        link: "#",
        // sub_menus: [
        //     { link: "/about-us", title: "About Us", },
        //     {
        //         link: "#",
        //         title: "Our Instructors",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/instructors"), title: "Our Instructors", },
        //             { link: toAbsoluteUrl("/instructor-details"), title: "Instructor Details", },
        //         ]
        //     },
        //     {
        //         link: "#",
        //         title: "Our Events",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/events"), title: "Our Events", },
        //             { link: toAbsoluteUrl("/events-details"), title: "Event Details", },
        //         ]
        //     },
        //     {
        //         link: "#",
        //         title: "Shop",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/shop"), title: "Shop" },
        //             { link: toAbsoluteUrl("/shop-details"), title: "Shop Details" },
        //             { link: toAbsoluteUrl("/wishlist"), title: "Wishlist" },
        //             { link: toAbsoluteUrl("/cart"), title: "Cart Page" },
        //             { link: toAbsoluteUrl("/check-out"), title: "Checkout" },
        //         ]
        //     },
        //     {
        //         link: "#",
        //         title: "Blog",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/blog"), title: "Blog Right Sidebar" },
        //             { link: toAbsoluteUrl("/blog-2"), title: "Blog Left Sidebar" },
        //             { link: toAbsoluteUrl("/blog-3"), title: "Blog Full Width" },
        //             { link: toAbsoluteUrl("/blog-details"), title: "Blog Details" },
        //         ]
        //     },
        //     { link: toAbsoluteUrl("/login"), title: "Student Login" },
        //     { link: toAbsoluteUrl("/registration"), title: "Student Registration" },
        //     { link: toAbsoluteUrl("/404"), title: "404 Page" },
        //     { link: toAbsoluteUrl("/contact"), title: "Contact" },
        // ],
    },
    {
        id: 4,
        title: "Contact Us",
        link: toAbsoluteUrl("/contact"),
        // sub_menus: [
        //     {
        //         link: "#",
        //         title: "Instructor Dashboard",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/instructor-dashboard"), title: "Dashboard" },
        //             { link: toAbsoluteUrl("/instructor-profile"), title: "Profile" },
        //             { link: toAbsoluteUrl("/instructor-enrolled-courses"), title: "Enrolled Courses" },
        //             { link: toAbsoluteUrl("/instructor-wishlist"), title: "Wishlist" },
        //             { link: toAbsoluteUrl("/instructor-review"), title: "Reviews" },
        //             { link: toAbsoluteUrl("/instructor-attempts"), title: "My Quiz Attempts" },
        //             { link: toAbsoluteUrl("/instructor-history"), title: "Order History" },
        //             { link: toAbsoluteUrl("/instructor-courses"), title: "My Course" },
        //             { link: toAbsoluteUrl("/instructor-announcement"), title: "Announcements" },
        //             { link: toAbsoluteUrl("/instructor-quiz"), title: "Quiz Attempts" },
        //             { link: toAbsoluteUrl("/instructor-assignment"), title: "Assignments" },
        //             { link: toAbsoluteUrl("/instructor-setting"), title: "Settings" },
        //         ]
        //     },
        //     {
        //         link: "#",
        //         title: "Student Dashboard",
        //         dropdown: true,
        //         mega_menus: [
        //             { link: toAbsoluteUrl("/student-dashboard"), title: "Dashboard" },
        //             { link: toAbsoluteUrl("/student-profile"), title: "Profile" },
        //             { link: toAbsoluteUrl("/student-enrolled-courses"), title: "Enrolled Courses" },
        //             { link: toAbsoluteUrl("/student-wishlist"), title: "Wishlist" },
        //             { link: toAbsoluteUrl("/student-review"), title: "Reviews" },
        //             { link: toAbsoluteUrl("/student-attempts"), title: "My Quiz Attempts" },
        //             { link: toAbsoluteUrl("/student-history"), title: "Order History" },
        //             { link: toAbsoluteUrl("/student-setting"), title: "Settings" },
        //         ]
        //     },
        // ],
    },
];
export default menu_data;
