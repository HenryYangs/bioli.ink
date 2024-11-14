import Navigator from './components/navigator';
import style from './my.module.scss';

export default function My() {
  return (
    <div className={style['wrapper']}>
      <Navigator></Navigator>
    </div>
  )
}