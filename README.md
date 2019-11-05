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
 * 迁移数据库 `php artisan migrate`  (迁移数据是用端口33060，迁移完后改成3306)  
 * 启动项目 `vagrant up`  
 
 ### 开发环境 
  * PHP框架 `laravel6.0.0`
  * 开发环境Homestead [详细教程](https://xueyuanjun.com/post/19915.html) 
  
 ### 开发步骤  
   #### 构建前后端分离项目  
     第一步：清理默认安装配置  
        由于我们构建的是基于 API 驱动的应用，所以有些自带的代码、文件及目录是不需要的：
          
         移除 app/Http/Controllers/Auth 目录，我们将通过 Socialite 重构用户认证功能
         移除 resources/views/welcome.blade.php 文件，这个是默认的欢迎页面，我们呢不需要它
     
     第二步：新增目录
      由于我们构建的是单页面应用（SPA），所以在整个应用中只需要两个视图即可！我们会通过 VueJS 组件和 Vue Router 来处理多个页面
      因此所需要的只是一个可以展示 SPA 视图以及一个登录视图：
      
      新增 resources/views/app.blade.php 视图文件
      新增 resources/views/login.blade.php 视图文件 
       
     第三步：Github 的用户认证
       如果运行报错：Class 'App\Http\Controllers\Web\Socialite' not found  
       在控制器加上：use Laravel\Socialite\Facades\Socialite;  
      
   #### Laravel高性能，项目实战Swoole篇  
      待续
   #### 后台管理系统，iview开源项目  
      待续
