import './Update.css'

function Update(){
    return(
        <body>
            <div>
                <form>
                  <table>
                    <tr>
                    <td>Enter Your UserName</td>
                    <td><input type='text'></input></td>
                    </tr>
                    <tr>
                    <td>Vehical Number</td>
                    <td><input type='text'></input></td>
                    </tr>
                    <tr>
                    <td>Location</td>
                    <td><input type='text'></input></td>
                    </tr>
                    <tr>
                    <td>Vehical Status</td>
                    <td><input type='radio' name='Damage'></input></td>
                    <td><input type='radio' name='LOst' ></input></td>
                    </tr>
                  </table>
                </form>
            </div>
        </body>
    );

}
export default Update