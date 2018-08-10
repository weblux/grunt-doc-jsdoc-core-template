const lang = document.documentElement.lang || 'en'

/**
 * get - Get a translation
 *
 * @param  {object} i18n The translation with all available language
 * @return {object} The language needed
 */
function getI18N (i18n) {
  return (i18n[lang] !== undefined ? i18n[lang] : i18n['root'])
}

export default getI18N
