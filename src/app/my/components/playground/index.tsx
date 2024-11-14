import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import style from './playground.module.scss';

export default function Playground() {
  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <BaseInfo />

        <AddModule />

        <section className={style.modules}>

        </section>
      </main>

      <section className={style['right-wrapper']}>

      </section>
    </div>
  );
}
