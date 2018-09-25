---
layout: documentation
github_link: functionnalities/pimgento_cron
version: v2.0-api
page_name: documentation
---

# Cron setup

### Schedule my tasks :

You can configure crontask through configuration for each import. 
To do so :

*  Set your cron expression in your crontab following this exemple :

```bash
0 22 * * * /usr/bin/php /path/to/magento/current/bin/magento pimgento:import --code=import-type >> /path/to/magento/current/var/log/pimgento_import_type.cron.log`
```

### Command line :

You can also launch import directly with command line :

```bash
php bin/magento pimgento:import --code=import-type
```