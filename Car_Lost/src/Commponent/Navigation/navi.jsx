import './navi.css';
import LOGO from '../Images/Home/Logo.jpg'

function navi(){
    return(
        <>
        <nav className='navbar'>
            <div className='navidiv'>
            <div className='name'><img src={LOGO} /></div>
            <ul>
                <li className='col'><a className="btn light" href='/HomePage'><span className="text">Home</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66669 11.3334L11.3334 4.66669" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66669 4.66669H11.3334V11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                <li className='col'><a className="btn light" href='/Myprofile'><span className="text">My Profile</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66669 11.3334L11.3334 4.66669" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66669 4.66669H11.3334V11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                <li className='col'><a className="btn light" href='#About_us'><span className="text">About</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66669 11.3334L11.3334 4.66669" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.66669 4.66669H11.3334V11.3334" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>
                
                
            </ul>
            </div>
        </nav>
        </>
    );

}
export default navi;