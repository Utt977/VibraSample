import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./componets/Header";
import Funding from "./componets/Funding";
import LandLords from "./componets/LandLords";
import Footer from "./componets/Footer";
import ContactUs from "./componets/ContactUs";
import Body from "./componets/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/landlords",
          element: <LandLords />,
        },
        {
          path: "/funding",
          element: <Funding />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
