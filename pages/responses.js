import axios from 'axios';
import '../static/styles/tailwind.css';


const TableData = (props) => {
    return <td className="py-4 m-4 px-6 border-b border-grey-light">{props.children}</td>
}

const TableHead = (props) => {
    return (
        <th className="py-4 px-6 font-sans font-medium uppercase text-sm font-bold border-b border-grey-light">
            {props.children}
        </th>
    );
}

const Table = (props) => {
    if (props.items.length == 0) {
        return (
            <div className="flex justify-center align-middle">
                <p className="text-center">There have been no responses!!!!</p>
            </div>
        );
    }
    console.log(props.items);
    return (
        <div className="flex justify-center align-middle">
        <table className="m-4">
        <thead>
            <tr>
                <TableHead>Candidate #</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Date of Birth</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
            </tr>
        </thead>
        <tbody>
            {
                props.items.map((item,index)=>(
                    <tr key={index}>
                        <TableData>{index+1}</TableData>
                        <TableData>{item.first_name}</TableData>
                        <TableData>{item.last_name}</TableData>
                        <TableData>{item.dob}</TableData>
                        <TableData>{item.gender}</TableData>
                        <TableData>{item.phone}</TableData>
                        <TableData>{item.email}</TableData>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    );
}


const Responses = (props) => {
    return (
        <div className="max-w-lg bg-white mx-auto p-4">
            <Table items={props.students} />
        </div>
    );
}



Responses.getInitialProps = async function() {
    let res;
    let data;
    let url = "https://nameless-sea-90483.herokuapp.com/students";
    let devUrl = "'http://127.0.0.1:5000/students'";
    try {
        res = await axios(url);
      } catch(err) {
        console.log("An error has occured " + err);
        return {
            students: []
        };
      }
    data = res.data;
    if (data === undefined) {
        return {
            students: []
        };
    }
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      students: data
    };
  };

export default Responses;