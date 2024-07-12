import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'

function HomePage()  {
    const [data, setData] = useState([]);
    // const [detailOpen, setDetailOpen] = useState(false);
    // const [addOpen, setAddOpen] = useState(false);

    const callAPI = async () => {
        // const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}all`);
        const res = await fetch('http://127.0.0.1:8000/all/')
        const body = await res.json();
        setData(body);
    }

    useEffect(() => {
        callAPI();
    }, [])
    return (
        <div className="container">
            <h1 className="text-center mb-3">Welcome to the Recipies Website!</h1>
            <h3 className="text-center mb-3">Lookup your favorites or add your own!</h3>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {data && Object.keys(data).map(key => (
                        <tr key={key}>
                            <td>{data[key].name}</td>
                            <td>{data[key].ingredients}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {/* <Button variant="contained">Back</Button>
                <Button variant="contained">Add</Button> */}
            </div>
        </div>
    );
}

export default HomePage;