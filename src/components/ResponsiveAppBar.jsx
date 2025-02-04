import {Menubar} from "primereact/menubar";
import {useAppContext} from "./AppContext";
import {useNavigate} from "react-router-dom";
import {InputText} from "primereact/inputtext";

function ResponsiveAppBar() {
    const {selectedDate, setSelectedDate} = useAppContext();
    const navigate = useNavigate();

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"
                       className="mr-2"></img>;

    const items = [
        {label: "Home", icon: "pi pi-home", command: () => navigate("/")},
        {label: "About", icon: "pi pi-info", command: () => navigate("/about")},
        {label: "Dashboard", icon: "pi pi-chart-bar", command: () => navigate("/dashboard")}
    ];

    return (
        <div className="card">
            <Menubar
                start={start}
                model={items}
                end={
                    <InputText
                        type="date"
                        className="p-inputtext p-ml-3"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                }
            />
        </div>
    );
}

export default ResponsiveAppBar;
