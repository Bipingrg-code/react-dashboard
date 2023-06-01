
import './sidebar.scss'
import Logo from '../../assets/logo.jpeg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
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
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <Groups2OutlinedIcon />
            <span>Class</span>
          </li>
          <li>
            <Person2OutlinedIcon />
            <span>Attendance</span>
          </li>
          <li>
            <span>Test</span>
          </li>
          <li>
            <span>Report</span>
          </li>
          <li>
            <span>Discipline</span>
          </li>
          <li>
            <span>Douts</span>
          </li>
          <li>
            <span>Message</span>
          </li>
          <li>
            <span>Schedule</span>
          </li>
          <li>
            <span>Notify</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
        <ul>
          <li><span>Setting</span></li>
          <li><span>Setting</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar