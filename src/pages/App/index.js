import { Outlet } from 'react-router-dom'
import Menu from 'src/components/Menu'
import styles from './index.module.less'

const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
