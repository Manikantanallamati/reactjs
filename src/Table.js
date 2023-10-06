import './App.css';
 
function Table() {
return (
<div >
    <table border={2} color='green' >
        <tr style={{background:'red'}}>
            <th>Name</th>
            <th>number</th>
            <th>campus</th>
        </tr>
        <tr>
            <td>Dharan</td>
            <td>20</td>
            <td>AEC</td>
        </tr>
        <tr>
            <td>Eswara</td>
            <td>20</td>
            <td>ACET</td>
        </tr>
        <tr>
            <td>Krishna</td>
            <td>20</td>
            <td>ACOE</td>
        </tr>
    </table>
</div>
);
}
 
export default Table;