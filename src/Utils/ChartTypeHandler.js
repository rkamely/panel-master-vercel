

const ChartTypeHandler = (type) => {
    switch (type) {
        case"Monetary":
            return 3
        case "Quantity":
            return 4
        case "All":
            return 0
        case "Charge":
            return 1
        case "Internet":
            return 2
        default:
            return null
    }
};

export default ChartTypeHandler;



