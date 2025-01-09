import Navi from '../Navigation/navi.jsx';
import './Profile.css';
import ProImg from '../Images/Home/image1.jpg';
function Profile(){
    return(
        <>
        <Navi/>
        <div className='profile'>
           <div className='profileimg'>
            <img className='imgpro' src={ProImg}></img>
           </div>
           <div className='aboutmain1'>
            <h1>James Anderson</h1>
            <p>Doctor</p>
            <div className='edit'>
                <button>Edit</button>
            </div>
           </div>
           <div className='details1'>
           <button>About</button>
           </div>
           
           <div className='details2'>
           <button>Vehicle Details</button>
           </div>
           <div className='aboutdetails'>
           <table className='table1' cellSpacing={20} cellPadding={20}>
                <tr><td>User Id</td><td>Ja4567</td></tr>
                <tr><td>Full Name</td><td>James Anderson</td></tr>
                <tr><td>Phone Number</td><td>+63 3478906</td></tr>
                <tr><td>Email</td><td>james67@gmail.com</td></tr>
                <tr><td>City</td><td>London</td></tr>
            </table>
           </div>
           <div className='aboutdetails'>
           <table className='table1' cellSpacing={20} cellPadding={20}>
                <tr><td>Owner Id</td><td>Ja4567</td></tr>
                <tr><td>Brand</td><td>BMW</td></tr>
                <tr><td>Model</td><td>I7</td></tr>
                <tr><td>Product Year</td><td>2010</td></tr>
                <tr><td>Registered Year</td><td>2013</td></tr>
            </table>
           </div>
        </div>
        </>
    );

}
export default Profile;