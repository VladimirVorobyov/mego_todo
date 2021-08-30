import Task from "../pages/Task";
import {Route,Switch,Redirect} from 'react-router-dom';
import { Layout} from 'antd';
import Total from "../pages/Total";
import FullPage from "../pages/FullPage";
import Login from '../pages/Login';
import { AuthorContext } from "../context";
import { useContext } from "react";
const { Header, Content } = Layout;
export default function AppRoute() {
  const {isAuthor} = useContext(AuthorContext)
  return (
        <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {(isAuthor) ?
            <Switch>
          <Route exact path='/tasks'>
            <Task/>
          </Route>
          <Route path='/total'>
            <Total/>
          </Route> 
          <Route exact path='/tasks/:id'>
            <FullPage/>
          </Route>
          <Redirect to='/tasks'/>
          </Switch>
          :  <Route exact path='/login'>
            <Login/>
          </Route> 
          }
          
        </div>
      </Content>
    </Layout>
  )
}