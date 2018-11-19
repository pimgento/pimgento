---
layout: documentation
github_link: important-stuff/how_to
version: v1.0-api
page_name: documentation
---

# How to...

### Q :  How to install PIMGento (API) ?
**A** :
* Copy last release content in Magento root
* Use composer in Magento root to install required library:

```shell
composer require php-http/guzzle6-adapter:^1.1
composer require akeneo/api-php-client-ee:^3.0
```

* Clear the cache (System > Cache Management)
* Disconnect / reconnect to the Back Office
* Refresh Magento compilation if needed (System > Tools > Compilation)