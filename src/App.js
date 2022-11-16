
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './component/Home/Home';
import Topics from './component/Topics/Topics';
import Statistics from './component/Statistics/Statistics';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import TopicDetails from './component/TopicDetails/TopicDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, 
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topic/:topicId',
          loader: async({params})=>{
            // console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        }
        
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
