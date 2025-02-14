"use client"
// This component wraps the application with Redux provider. 
import { Provider } from "react-redux";
import { store } from "@/store/index";

interface ChildrenProps {
  children : React.ReactNode
}
const  WrapperPage:React.FC<ChildrenProps> =({children})=> {
  
    return (<Provider store={store}>
      {children}
    </Provider> );
}

export default WrapperPage;
