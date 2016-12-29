/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, hashHistory, IndexRoute} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon,  } from 'antd';

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.js';
import myForm from './components/form.js';
import myChart from './components/chart.js';
import myAnimate from './components/animate.js';
import myCalendar from './components/calendar.js';
import myCard from './components/fetch.js';
import sidebar from './components/sidebar';

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={sidebar}>
            <IndexRoute path="myCard" component={myCard} />
            <Route path="myTable" component={myTable} />
            <Route path="myForm" component={myForm} />
            <Route path="myChart" component={myChart} />
            <Route path="myCalendar" component={myCalendar} />
            <Route path="myAnimate" component={myAnimate} />
            <Route path="myCard" component={myCard} />
        </Route>
    </Router>
), document.getElementById('app'));


