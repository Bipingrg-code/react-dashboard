import './navbar.scss'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const Header = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='assignmentLink'>
          <KeyboardBackspaceOutlinedIcon className='icon' />
          Assignments <span>/</span> Lorem Lorem
        </div>
        <div className='itemLink'>
          <div className='notification'>
            <NotificationsNoneOutlinedIcon />
            <div className='counter'>3</div>
          </div>
          <div className='avater'>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="avater" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header