import { useTranslations } from 'next-intl'
import Editions from '..'

const EditionsContainer = () => {
  const t = useTranslations('Home.Editions')

  return (
    <Editions
      label={t('label')}
      mainText1={t('mainText1')}
      mainText2={t('mainText2')}
      retrospective={t('retrospective')}
      retrospectiveText={t('retrospectiveText')}
      subtitle={t('subtitle')}
    />
  )
}

export default EditionsContainer
