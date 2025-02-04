import {useAppContext} from "./AppContext.jsx";
import {useEffect, useState} from "react";
import InfoCard from "./InfoCard.jsx";
import {FaCalendar, FaClipboardList, FaExclamationTriangle, FaTasks} from "react-icons/fa";
import {Row} from "react-bootstrap";
import BarChart from "./BarChart.jsx";

function Dashboard() {
    const {selectedDate} = useAppContext();
    const [summary, setSummary] = useState({processed: 0, failed: 0});

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

            <Row>
                {/* Earnings Card */}
                <InfoCard title="Earnings (Monthly)" value="$40,000" icon={FaCalendar} color="primary"/>

                {/* Tasks Card */}
                <InfoCard title="Tasks" value="24" icon={FaClipboardList} color="success"/>

                {/* Pending Requests Card */}
                <InfoCard title="Pending Requests" value="8" icon={FaExclamationTriangle} color="warning"/>

                {/* Completed Tasks Card */}
                <InfoCard title="Completed Tasks" value="56" icon={FaTasks} color="danger"/>
            </Row>
            <Row>
                <BarChart/>
            </Row>
        </div>
    );
}

export default Dashboard;
