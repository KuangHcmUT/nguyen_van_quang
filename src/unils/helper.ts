export const checkPrice = (price: number, range: string) => {
    switch (range) {
        case "1":
            return price < 1000000;
        case "2":
            return price >= 1000000 && price <= 2000000;
        case "3":
            return price >= 2000000 && price <= 3000000;
        case "4":
            return price >= 3000000 && price <= 5000000;
        case "5":
            return price >= 5000000 && price <= 7000000;
        case "6":
            return price >= 7000000 && price <= 10000000;
        case "7":
            return price >= 10000000 && price <= 20000000;
        case "8":
            return price >= 20000000;
        default:
            return true;
    }
};

export const checkArea = (area: number, range: string) => {
    switch (range) {
        case "1":
            return area < 20;
        case "2":
            return area >= 20 && area <= 30;
        case "3":
            return area >= 30 && area <= 50;
        case "4":
            return area >= 50 && area <= 60;
        case "5":
            return area >= 60 && area <= 70;
        case "6":
            return area >= 70 && area <= 80;
        case "7":
            return area >= 80 && area <= 100;
        case "8":
            return area >= 100;
        default:
            return true;
    }
};

export type CandlestickData = {
    x: string;
    o: number;
    h: number;
    l: number;
    c: number;
};

// Generate random float between min and max
const getRandomFloat = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

// Generate random date string for the x value
const getRandomDate = (startDate: Date, endDate: Date): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

// Generate 30 candlestick data points
export const generateCandlestickData = (): CandlestickData[] => {
    const data: CandlestickData[] = [];
    const date = new Date();

    for (let i = 0; i < 30; i++) {
        const open = getRandomFloat(100, 200);
        const high = open + getRandomFloat(0, 20);
        const low = open - getRandomFloat(0, 20);
        const close = getRandomFloat(low, high);

        data.push({
            x: getRandomDate(new Date(2024, 0, 1), new Date(2024, 8, 1)), // Dates between Jan 1, 2024 and Sep 1, 2024
            o: parseFloat(open.toFixed(2)),
            h: parseFloat(high.toFixed(2)),
            l: parseFloat(low.toFixed(2)),
            c: parseFloat(close.toFixed(2)),
        });

        date.setDate(date.getDate() + 1); // Increment the date
    }

    return data;
};
