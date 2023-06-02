
import './sidebar.scss'
import Logo from '../../assets/logo.jpeg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import RemoveFromQueueOutlinedIcon from '@mui/icons-material/RemoveFromQueueOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={Logo} alt='logo' />
        <h1 className='title'>MEDHAVHI</h1>
      </div>
      <div className='center'>
        <ul>
          <li>
            <DashboardIcon className = "icon"/>
            <span>Dashboard</span>
          </li>
          <li>
            <Groups2OutlinedIcon className = "icon"/>
            <span>Class</span>
          </li>
          <li>
            <Person2OutlinedIcon className = "icon"/>
            <span>Attendance</span>
          </li>
          <li>
            <MarkEmailUnreadOutlinedIcon className = "icon"/>
            <span>Test</span>
          </li>
          <li>
            <RemoveFromQueueOutlinedIcon className = "icon"/>
            <span>Report</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className = "icon"/>
            <span>Discipline</span>
          </li>
          <li>
            <LiveHelpOutlinedIcon className = "icon"/>
            <span>Douts</span>
          </li>
          <li>
            <MarkChatUnreadOutlinedIcon className = "icon"/>
            <span>Message</span>
            <div className='counter'>4</div>
          </li>
          <li>
            <CalendarMonthOutlinedIcon className = "icon"/>
            <span>Schedule</span>
          </li>
          <li>
            <MarkUnreadChatAltOutlinedIcon className = "icon"/>
            <span>Notify</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
        <ul>
          <li>
          <SettingsOutlinedIcon className="icon"/>
            <span>Setting</span>
            <div className='counter'>4</div>
          </li>
          <li>
          <LogoutOutlinedIcon className="icon"/>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar