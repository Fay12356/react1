import React, { Component } from 'react';

import { Layout, Menu } from 'antd';

import axios from 'axios'

import {
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'

import routes from './routes'

const { Header, Content, Sider } = Layout;
const navRoutes = routes.filter((route) => route.isNav === true)

function getRepos(username){
  // 这里使用了 ES6 的字符串模板
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getGithubInfo(username){
  // 将请求回来的数据做了一个 merge 操作
  return axios.all([
    getRepos(username),
  //   getUserInfo(username)
  ])
  .then((arr) => ({
      repos: arr[0].data,
      bio: arr[1].data}
  ));
}

class App extends Component {
  // state = {
  //   bio: {
  //     name: 'Fay12356'
  //   },
  //   repos: ['a', 'b', 'c']
  // }
  // componentDidMount(){

  //   getGithubInfo( this.props.params.username )
  //     .then( ( data ) => {
  //       // 测试一下传入用户名后返回的数据
  //       console.log( data );
  //       // 更新state数据
  //       this.setState({
  //         bio: data.bio,
  //         repos: data.repos
  //       })
  //     });
  //   } 
render(){
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              navRoutes.map((route) => (
                <Menu.Item key={route.path}><NavLink to={route.path}>{route.title}</NavLink></Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              {
                routes.map((route) => {
                  const C = route.component
                  return (
                    <Route
                      path={route.path}
                      exact
                      render={(props) => (
                        <C {...props} />
                      )}
                    />
                  )
                })
              }
              <Redirect to="/dashboard" from="/" exact />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );}
}

export default App



// import React from 'react'

// import { Button } from 'antd'//
// import 'antd/dist/reset.css'//样式引入
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <Button>test</Button>
//     </div>
//   );
// }

// export default App



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
