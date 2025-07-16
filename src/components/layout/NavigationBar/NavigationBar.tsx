import style from './NavigationBar.module.scss';
import NavigationAnchor from '@/components/anchors/Navigation';

function Navigation() {
  return (
    <div className={style['nav-bar__nav-container']}>
      <NavigationAnchor className={style['nav-bar__nav-container__item']}>Funds</NavigationAnchor>
      <NavigationAnchor className={style['nav-bar__nav-container__item']}>Profile</NavigationAnchor>
    </div>
  )
}

export default function NavBar() {
  return (
    <nav className={style['nav-bar']}>
      <Navigation />
    </nav>
  )
}