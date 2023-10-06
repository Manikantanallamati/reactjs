import './App.css';
function Events(){
    let a =[{
        name:'dharan',
        rollno:'4d4',
    },{
        name:'krishna',
        rollno:'458',
    },];

    const getdata=(res) => {
        res.map(a)=>{
        document.write(res);
    };
};
    return (
        <div>
            <h1>Events</h1>
            <button onClick={()=>getdata(a)}>click</button>
        </div>
    );
}

export default Events;