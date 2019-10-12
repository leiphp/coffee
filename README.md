# phpsystem
:ox:laravel6.0.0+swoole+vue技术架构打造一套全新PHP项目系统  

### 服务器要求  
Laravel 框架对 PHP 版本和必需扩展有一定要求，不过这些要求 Laravel Homestead 虚拟机都已经满足了，所以强烈推荐使用它作为 Laravel 本地集成开发环境。  

不过，如果你没有使用 Homestead 的话，那么就需要确认自己的环境满足以下要求：  
- PHP >= 7.2.0  
- PHP OpenSSL 扩展  
- PHP PDO 扩展  
- PHP Mbstring 扩展  
- PHP Tokenizer 扩展  
- PHP XML 扩展  
- PHP Ctype 扩展  
- PHP JSON 扩展  
- PHP BCMath 扩展   

满足以上需求之后，就可以开始安装 Laravel 了。  
Laravel 使用 Composer 管理依赖，所以，安装之前确保已经在机器上安装了 Composer（如果尚未安装的话参考[这份文档](https://docs.phpcomposer.com/00-intro.html)去安装吧）。

### 项目环境配置  
 * 安装依赖 `composer install` 
 * 复制配置文件 `cp .env.example .env`  
 * 打开.env 进行配置 `vi .env`  
 * 迁移数据库 `php artisan migrate`  
 * 启动项目 `vagrant up`  
 
 ### 开发环境 
  * PHP框架 `laravel6.0.0`
  * 开发环境Homestead [详细教程](https://xueyuanjun.com/post/19915.html)   