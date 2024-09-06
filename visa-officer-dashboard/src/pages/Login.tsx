
import SidebarNavigation from "../compoents/SidebarNavigation"
import VisaApplicationInsights from "../compoents/VisaApplicationGraph"
import ParentComponent from '../components/InterpolList'
const Login = () => {
  return (
    <div>
      <ParentComponent/>
      <SidebarNavigation/>
      <VisaApplicationInsights/>
    </div>
  )
}

export default Login