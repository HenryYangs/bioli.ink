import Navigator from './components/navigator';
import Playground from './components/playground';
import style from './my.module.scss';

export default function My() {
  return (
    <div className={style.wrapper}>
      <Navigator></Navigator>

      <Playground></Playground>
    </div>
  )
}