import './navi.css';

function navi(){
    return(
        <>
        <nav className='navbar'>
            <div className='navidiv'>
            <div className='name'><h1>Car Lost Finder</h1></div>
            <ul className='link'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>My Profile</a></li>
                <li><a href='#'>About</a></li>
                
                
            </ul>
            </div>
        </nav>
        </>
    );

}
export default navi;