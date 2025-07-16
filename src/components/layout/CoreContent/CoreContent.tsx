import style from './CoreContent.module.scss';

export default function CoreContent({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <main className={style['core-content']}>
      { children }
    </main>
  )
}