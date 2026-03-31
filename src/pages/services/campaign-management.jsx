import ServiceDetail from './ServiceDetail'
import { servicesData } from './servicesData'
export default function Page() {
  return <ServiceDetail service={servicesData['campaign-management']} />
}
