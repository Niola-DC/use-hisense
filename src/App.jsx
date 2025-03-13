// import './App.css';
import ContactUsPage from './pages/contactuspage';
import HomePage from './pages/homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivacyPolicyPage from './pages/privacypolicy';
import RootLayout from './pages/layout';
import TermsPage from './pages/termspage';
import './index.css';


// function App() {
//   return (
//     <BrowserRouter>
//       <HomePage />
//       <ContactUsPage />
//     </BrowserRouter>
//   );
// }

// export default App;

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/policy", element: <PrivacyPolicyPage /> },
        { path: "/contact", element: <ContactUsPage /> },
        { path: "/terms", element: <TermsPage /> },

        { path: "*", element: <h1>404</h1>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

