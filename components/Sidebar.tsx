import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import { 
    UsersIcon,
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon, 
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow';


function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow Icon={false} src={session?.user?.image || 'https://api.lorem.space/image/face?w=30&h=30&hash=crc4vvrn'} title={session?.user?.name} />
        <SidebarRow src={false} title='Friends' Icon={UsersIcon} />
        <SidebarRow src={false} title='Groups' Icon={UserGroupIcon} />
        <SidebarRow src={false} title='Marketplace' Icon={ShoppingBagIcon} />
        <SidebarRow src={false} title='Watch' Icon={DesktopComputerIcon} />
        <SidebarRow src={false} title='Events' Icon={CalendarIcon} />
        <SidebarRow src={false} title='Memories' Icon={ClockIcon} />
        <SidebarRow src={false} title='See More' Icon={ChevronDownIcon} />
    </div>
  )
}

export default Sidebar;