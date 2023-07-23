import { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './index.module.less'
import routes from 'src/router/routes'
import { classes } from 'src/utils'

const Menu = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isSameRoute = (p1, p2) => {
    return p1.replace(/^\/?/, '/') === p2.replace(/^\/?/, '/')
  }
  const nav2 = path => {
    !isSameRoute(location.pathname, path) && navigate(path)
  }
  const children = routes[0].children.filter(item => item.path)
  const items = children.map(item => {
    const active = isSameRoute(location.pathname, item.path)
    const className = classes([styles.menuItem, active && styles.active])
    return (
      <li key={item.path} className={className} onClick={() => nav2(item.path)}>
        {item.label}
      </li>
    )
  })
  return (
    <div className={styles.menu}>
      <ul>{items}</ul>
    </div>
  )
}

export default memo(Menu)
