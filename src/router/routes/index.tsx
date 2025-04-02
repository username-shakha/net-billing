import { RouteObject } from 'react-router-dom';
import {
  Home,
  Calendar,
  NotFound,
  Sent,
  OnExecution,
  ForReview,
  MyDocuments,
  Messages,
} from '@/pages';
import { Layout } from '@/layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'my-documents', element: <MyDocuments /> },
      { path: 'messages', element: <Messages /> },
      {
        path: 'sent',
        element: <Sent />,
        children: [
          { path: 'on-execution', element: <OnExecution /> },
          { path: 'for-review', element: <ForReview /> },
        ],
      },

      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
