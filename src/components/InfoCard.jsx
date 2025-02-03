import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const InfoCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <Card className={`border-start border-${color} shadow h-100 py-2`}>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Card.Text className={`text-uppercase text-${color} fw-bold small`}>
                                {title}
                            </Card.Text>
                            <Card.Title className="fw-bold text-dark">{value}</Card.Title>
                        </div>
                        {Icon && <Icon className="fa-2x text-secondary" />}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

// ✅ Define PropTypes
InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.elementType, // React Component for the icon
    color: PropTypes.string, // Bootstrap color class (e.g., primary, success, danger)
};

// ✅ Default Props
InfoCard.defaultProps = {
    color: "primary", // Default color
    icon: null, // Default to no icon
};

export default InfoCard;
