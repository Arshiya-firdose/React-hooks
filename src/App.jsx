import './App.css'
import IndiaGov from './components/UseContextComp/IndiaGov'
import UseEffectComp from './components/UseEffectComp'
import UseReducerComp from './components/UseReducerComp'
import UseRefComp from './components/UseRefComp'
import UseStateComp from './components/UseStateComp'
import Money from './components/UseContextComp/context/Money'
import UseLayoutEffectComp from './components/UseLayoutEffectComp'
import UseCallBackComp from './components/UseCallBack/UseCallBackComp'
import UseMemoComp from './components/UseMemoComp';
import CompA from './components/UseContextCom/CompA.JSX'
import { Name } from './components/UseContextCom/Context'
import Test from './components/UseCustomComp/Test'
function App() {

  return (
    <>
   {/* <UseStateComp/> */}
   {/* <UseReducerComp/> */}
   {/* <UseEffectComp/> */}
   {/* <UseRefComp/> */}



   {/*usecontext*/}
   {/* <Name>
     <CompA/>
      </Name> */}





   {/*uscontext*/}
  {/* < Money>
  <IndiaGov/>
  </Money> */}




  {/* <UseLayoutEffectComp/> */}
  {/* <UseCallBackComp/> */}
 {/* <UseMemoComp /> */}
 <Test/>
    </>
  )
}

export default App
