import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import TitleCard from "@/Components/Cards/TitleCard";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function LineChart() {
    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "MAU",
                data: labels.map(() => {
                    return Math.random() * 100 + 500;
                }),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <TitleCard title={"Montly Active Users (in K)"}>
            <Line
                data={data}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                    },
                }}
            />
        </TitleCard>
    );
}

export default LineChart;
