import { useTranslations } from 'next-intl'
import Winners from '..'

const WinnerContainer = () => {
  const t = useTranslations('Home.Winners')

  return (
    <Winners
      description={t('description')}
      eng={t('eng')}
      sci={t('sci')}
      title={t('title')}
      year={t('year')}
    />
  )
}

export default WinnerContainer
