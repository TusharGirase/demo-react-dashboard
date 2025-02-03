import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

    return (
        <AppContext.Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </AppContext.Provider>
    );
};

// ✅ Define prop types for AppProvider
AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
