interface CandlestickData {
    day: string; // Date in YYYY-MM-DD format
    open: number;
    high: number;
    low: number;
    close: number;
}

type CandlestickDataArray = CandlestickData[];

const getRandomValue = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const generateDateRange = (startDate: Date, endDate: Date): Date[] => {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
};

export const generateMonthlyData = (dates: Date[]): CandlestickDataArray => {
    const data: CandlestickDataArray = [];

    dates.forEach((date) => {
        const dayString = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
        const open = getRandomValue(20, 60);
        const high = getRandomValue(open, open + 20); // Ensure high is always >= open
        const low = getRandomValue(Math.max(0, open - 20), open); // Ensure low is always <= open
        const close = getRandomValue(low, high); // Ensure close is always between low and high

        data.push({ day: dayString, open, high, low, close });
    });

    return data;
};
