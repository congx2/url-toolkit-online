import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import App from 'src/pages/App'
import NotFound from 'src/pages/NotFound'
import LazyComponent from 'src/components/LazyComponent'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/url-encode" />
      },
      {
        path: 'url-encode',
        label: 'URL编码',
        element: (
          <LazyComponent
            Component={lazy(() => import('src/pages/UrlEncode'))}
          />
        )
      },
      {
        path: 'url-decode',
        label: 'URL解码',
        element: (
          <LazyComponent
            Component={lazy(() => import('src/pages/UrlDecode'))}
          />
        )
      },
      {
        path: 'url-join',
        label: 'URL拼接',
        element: (
          <LazyComponent Component={lazy(() => import('src/pages/UrlJoin'))} />
        )
      },
      {
        path: 'url-parse',
        label: 'URL解析',
        element: (
          <LazyComponent Component={lazy(() => import('src/pages/UrlParse'))} />
        )
      },
      {
        path: 'url-microapp2wxmp',
        label: '生成小程序中转页跳微服务URL',
        element: (
          <LazyComponent
            Component={lazy(() => import('src/pages/UrlMicroApp2Wxmp'))}
          />
        )
      },
      {
        path: 'url-live2wxmp',
        label: '生成小程序直播间URL',
        element: (
          <LazyComponent
            Component={lazy(() => import('../pages/UrlLive2Wxmp'))}
          />
        )
      }
    ]
  }
]

export default routes
