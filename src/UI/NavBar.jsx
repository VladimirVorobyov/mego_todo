import { NavLink } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { AuthorContext } from '../context';
import {useContext} from 'react'
import '../App.css';
const { Sider } = Layout;


export default function NavBar (){
  const {isAuthor,setIsAuthor} = useContext(AuthorContext);
  return(
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
       {(isAuthor) ?<>
       <Menu.Item onClick={()=>{setIsAuthor(false); localStorage.removeItem('auth')}}
        key="1" icon={<UserOutlined />}>
          Выход тут  
        </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <NavLink  to='/total'>Total</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <NavLink to="/tasks">Tasks</NavLink>
        </Menu.Item>
        </>
          :  <Menu.Item key="3" icon={<UploadOutlined />}>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item>
          } 
      </Menu>
    </Sider>
  )
}