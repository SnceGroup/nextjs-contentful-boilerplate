# Schurter Beehive Next.js App

## Manage microcopy translations

We used this npm package for managed microcopy translations (https://www.npmjs.com/package/next-i18next).
Below a quick explanation for day by day usage:

### Repo Setup
- `next-i18next.config.js` contains locales settings (not only for handle translations)
- `public/locales/[locale]/` contains all translations json based on locale, you can define different files (namespace) 
   in order to organize better the translations in the repository.

### Inclusion in pages
At page level add plugin inclusion
```
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps(context) {
    return {
        props: {
            ...await serverSideTranslations(context.locale, ['common']) //array with all namespace needed
        },
    }
}
```

### Usage
```
import {useTranslation} from 'next-i18next';

const { t } = useTranslation('common') //namespace
{t('read-more')} // translation key
```


