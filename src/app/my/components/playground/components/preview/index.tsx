import style from './preview.module.scss';

const SCALE = 0.8;

export default function Preview() {
  return (
    <section className={style['preview-wrapper']}>
      <div className={style['preview-inner-wrapper']}>
        <div className={style['preview-device-wrapper']}
          // TODO 支持小尺寸屏幕
          style={{
            width: `${Math.min(350, 385 * SCALE)}px`,
            height: `${Math.min(750, 882 * SCALE)}px`
          }}
        >
          <div className={style['preview-device']}
            style={{
              width: '385px',
              height: '882px',
              transform: `scale(${SCALE})`
            }}
          >

          </div>

          <div className={style['preview-device-simulator']}></div>
        </div>
      </div>
    </section>
  );
}
