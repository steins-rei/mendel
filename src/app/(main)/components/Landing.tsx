'use client';

import style from '../main.module.scss';
import PrimaryButton from '@/components/buttons/Primary/Primary';

export default function Landing() {
  return (
    <>
      <div className={style['greetings']}>
        <div className={style['greetings__text']}>
          <h1 className={style['greetings__text__heading']}>Welcome to 10 Mendelssohn</h1>
          <h2 className={style['greetings__text__sub']}>Created by yours truly, steins.rei ( Rayne Joseph )</h2>
        </div>
        <div className={style['greetings__cta']}>
          <PrimaryButton link='/' className={style['greetings__cta__log']}>Login with Facebook</PrimaryButton>
        </div>
      </div>
    </>
  )
}