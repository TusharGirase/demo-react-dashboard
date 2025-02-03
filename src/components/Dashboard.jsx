import {useAppContext} from "./AppContext.jsx";
import {useEffect, useState} from "react";

function Dashboard() {
    const { selectedDate } = useAppContext();
    const [summary, setSummary] = useState({ processed: 0, failed: 0 });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/summary?date=${selectedDate}`);
                const data = await response.json();
                setSummary(data);
            } catch (error) {
                console.error("Error fetching summary:", error);
            }
        };

        fetchData();
    }, [selectedDate]);

    return (
        <div className="container mt-4">
            <h2>Dashboard Summary</h2>
            <p><strong>Date:</strong> {selectedDate}</p>

            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h5 className="card-title">Processed Files</h5>
                            <p className="card-text">{summary.processed}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h5 className="card-title">Failed Files</h5>
                            <p className="card-text">{summary.failed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
