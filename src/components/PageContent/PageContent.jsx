
import './pagecontent.scss'
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const PageContent = () => {
  return (
    <div className='pagecontent'>
      <div className='content'>
        <div className='head'>
          <div className='sc'>
            sc
          </div>
          <div className='title'>
            <ul>
              <li> kldsahfa jkabdfjka jdasj reiutb jhdsghd vxml asftbs</li>
              <li>   Subbmited by:
                <span className='avater'>
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt='submited by' />

                </span>
                Assigned on: <span className='date'>14 apr 2021, 8:45PM</span>
              </li>
            </ul>
          </div>
          <div className='days'>
            <HourglassFullOutlinedIcon className='icon' />
            <span> 4 days</span>
          </div>
        </div>
        <div className='text'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </div>
        <div className='pdfDownload'>
          <img src='https://logowik.com/content/uploads/images/adobe-pdf3324.jpg' alt='download' />
          <ul>
            <li>
              Download Pdf
            </li>
            <li>
              2.5 MB
            </li>
          </ul>
          <ArrowDownwardOutlinedIcon className='icon' />
        </div>
      </div>

      <div className='main-content'>
        <div className='grade'>
          <div className='grade-btn'>
            <button className='not-grade-btn'>Not Grade</button>
            <button className='grades-btn'>Grade</button>
          </div>
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="active-users">
          <div className='avatar'>
            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='user-avater' />
          </div>
          <div className='user-info'>
            <ul>
              <li>Bipin Gurung</li>
              <li>April 14, 2023</li>
              <li>On time</li>
            </ul>
          </div>
        </div>
        <div className="unactive-users">
          <div className='avatar'>
            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='user-avater' />
          </div>
          <div className='user-info'>
            <ul>
              <li>Bipin Gurung</li>
              <li>April 14, 2023</li>
              <li>Late Submission</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContent