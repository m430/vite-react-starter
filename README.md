# vite-react-starter

`vite-react-starter`是一个基于`vite`的开箱即用`react`技术栈的脚手架模板，集成了很多开发实践中优秀的案例和库。

## vite构建环境
| 依赖包                      | 用途                        |
| :-------------------------- | :-------------------------- |
| @vitejs/plugin-react        | react官方插件               |
| vite-plugin-style-import    | style按需导入               |
| typescript                  | 支持`ts/tsx`                |
| postcss                     | 自动化构建`css`浏览器兼容   |
| less                        | 提供`less`支持              |
| autoprefixer                | 自动化添加样式浏览器前缀    |
| eslint(eslint-config-alloy) | 使用`AlloyTeam`的eslint标准 |

## react技术栈

| 包名称               | 用途                             |
| :------------------- | :------------------------------- |
| react@17.x           | react核心包                      |
| react-dom@17.x       | react-dom包                      |
| react-router-dom@4.x | 页面路由                         |
| antd@4.x             | 通用ui组件                       |
| dva@2.x              | 数据状态管理                     |
| dva-loading          | 自动化更新`effects`的loading状态 |
| tailwind             | 标准化的`css`库                  |
| @loadable/component  | 提供动态组件加载，代码分割       |
| classnames           | 操作`className`样式类的工具库    |

## 文件结构

```bash
src
├── api                       # api定义层
├── assets                    # 资源文件
├── components                # 公共组件
├── config                    # 配置信息
├── hooks                     # 公共hooks
├── layouts                   # 页面布局
├── libs                      # 第三方库
├── locales                   # 国际化
├── main.jsx                  # 入口文件
├── models                    # model定义
├── pages                     # 业务页面
├── router                    # 路由
│   ├── index.jsx             # 路由入口
│   ├── renderer.jsx          # 路由渲染器
│   └── router.config.js      # 路由配置
├── styles                    # 样式
│   └── index.css             # 全局样式
└── utils                     # 工具
```

