import { BrowserRouter} from 'react-router-dom';
import { Layout} from 'antd';
import NavBar from "./UI/NavBar";
import AppRoute from './UI/AppRoute';
import { AuthorContext } from './context';
import { useEffect, useState } from 'react';
function App() { 
  const [isAuthor, setIsAuthor] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuthor(true)
    }
  },[])
  return(<AuthorContext.Provider
  value={{
    isAuthor, setIsAuthor
  }}>
  <BrowserRouter>
    <Layout>
     <NavBar/>
     <AppRoute/>
  </Layout>
  </BrowserRouter>
  </AuthorContext.Provider>)
}
 

export default App;
