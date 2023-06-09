# Vue 3 + TypeScript + Vite + Pinia + Element-Plus

---

前置说明：node 版本可能需要高版本，老项目有些不能用太高的版本，建议装 nvm 进行 node 版本切换

**安装：**

```shell
npm i
```

**运行：**

```shell
npm run dev
```

**格式化代码：**

```shell
npm run prettier
```

代码默认安装 prettier，保存可以自动格式代码，vs code 可能需要进行相关设置：

可能保存不生效，没有按照配置来：

先在`VsCode`的设置中查看配置保存文件时确认是否开启自动格式化内容：文件-首选项-设置-搜索 onsave-Editor: Format On Save 打钩

- 在扩展找到插件
- 点设置图标
- 扩展设置
- 找到 Prettier: Use Editor Config
- 取消 Prettier: Use Editor Config 的复选框，这样就不会优先使用**editorconfig 配置文件**了
- 插件配置 Prettier: Config Path 填写`.prettierrc 将本文件作为其代码格式化规范
- 如果还不行，进入某个页面，右键，选择 **使用...格式化文档** ，选择 **配置默认格式化程序**，用 prettier
#   v u e 3 - e x a m p l e - p r o j e c t  
 