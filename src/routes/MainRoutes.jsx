// project imports
import { Suspense, lazy } from "react";
import MainLayout from "../Layout/MainLayout";

// Lazy-loaded components
const Dashboard = lazy(() => import("../pages/Dashboard"));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: (
        <Suspense fallback={<>loading............</>}>
          <Dashboard />
        </Suspense>
      ),
    },
  ],
  // path: "/",
  // // element: <PrivateRoute />,
  // children: [
  //   {
  //     path: "",
  //     element: <MainLayout />,
  //     children: [
  //       {
  //         path: "",
  //         element: (
  //           <Suspense fallback={<>loading............</>}>
  //             <Dashboard />
  //           </Suspense>
  //         ),
  //       },
  //     ],
  //   },
  // ],
};

export default MainRoutes;

// // project imports

// import { lazy } from "react";
// import AppLayout from "../layouts/app/AppLayout";
// import Appointment from "../pages/Appointment";
// import Category from "../pages/Category";
// import Customer from "../pages/Customer";
// // import Dashboard from "../pages/Dashboard";
// const Dashboard = lazy(() => import("../pages/Dashboard"));
// import Service from "../pages/Service";
// import PrivateRoute from "./PrivateRoute";
// import ImagesSection from "../pages/ImagesSection";
// import BarberAccount from "../pages/BarberAccount";
// import BarberAccountCreate from "../pages/BarberAccount/BarberAccountCreate";
// import OpeningHour from "../pages/OpeningHour";
// import EmployeeList from "../pages/Employee";

// // ==============================|| MAIN ROUTING ||============================== //

// const MainRoutes = {
//   path: "app",
//   element: <PrivateRoute />,
//   children: [
//     {
//       path: "",
//       element: <AppLayout />,
//       children: [
//         {
//           path: "",
//           element: <Dashboard />,
//         },
//         {
//           path: "appointment",
//           element: <Appointment />,
//         },
//         {
//           path: "service",
//           element: <Service />,
//         },
//         {
//           path: "category",
//           element: <Category />,
//         },
//         {
//           path: "customer",
//           element: <Customer />,
//         },
//         {
//           path: "images",
//           element: <ImagesSection />,
//         },
//         {
//           path: "barber-account",
//           element: <BarberAccount />,
//         },
//         {
//           path: "barber-account/create",
//           element: <BarberAccountCreate />,
//         },
//         {
//           path: "opening-hours",
//           element: <OpeningHour />,
//         },
//         {
//           path: "employee-list",
//           element: <EmployeeList />,
//         },
//       ],
//     },
//   ],
// };

// export default MainRoutes;
