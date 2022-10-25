import React from 'react'
import Chart from "react-apexcharts"

function Charts() {
    return (
        <div>
            <Chart
                type='bar'
                width={600}
                height={600}
                series={[
                    {
                        name: "company 1",
                        data: [100, 300, 500, 245, 234, 645],
                    },
                    {
                        name: "company 1",
                        data: [150, 300, 400, 265, 234, 245],
                    },
                    {
                        name: "company 1",
                        data: [600, 340, 200, 235, 224, 145],
                    },
                    {
                        name: "company 1",
                        data: [340, 200, 240, 480, 604, 445],
                    },
                ]}
                options={{
                    colors: ["#ff0000", "#f0f", "#dd5", "#459"],
                    theme: {
                        mode: "dark",

                    },
                    chart: {
                        stacked: true
                    },
                    tooltip: {
                        followCursor: true
                    },
                    dataLabels: {
                        formatter: (val) => `$${val}`,
                        style: {
                            fontSize: 12
                        }
                    },
                    xaxis: {
                        tickPlacement: "on",
                        categories: ["jan", "feb", "mar", "apr", "may", "jun"],
                        title: {
                            text: "MONTHS"
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Amount"
                        }
                    },

                    legend: {
                        show: true,
                        position: "bottom"
                    },
                    title: {
                        text: "Barchart",
                        style: {
                            fontSize: 30
                        }
                    },
                    subtitle: {
                        text: "This chart showes revenue data companies by month",

                    },
                    grid: {
                        borderColor: "#ff0"
                    }
                }}
            >

            </Chart>
            <Chart
                type='area'
                width={600}
                height={600}
                series={[
                    {
                        name: "company 1",
                        data: [100, 300, 500, 245, 234, 645],
                    },
                    {
                        name: "company 1",
                        data: [150, 300, 400, 265, 234, 245],
                    },
                    {
                        name: "company 1",
                        data: [600, 340, 200, 235, 224, 145],
                    },
                    {
                        name: "company 1",
                        data: [340, 200, 240, 480, 604, 445],
                    },
                ]}
                options={{
                    colors: ["#ff0000", "#f0f", "#dd5", "#459"],
                    theme: {
                        mode: "dark",

                    },
                    chart: {
                        stacked: true
                    },
                    tooltip: {
                        followCursor: true
                    },
                    dataLabels: {
                        formatter: (val) => `$${val}`,
                        style: {
                            fontSize: 12
                        }
                    },
                    xaxis: {
                        tickPlacement: "on",
                        categories: ["jan", "feb", "mar", "apr", "may", "jun"],
                        title: {
                            text: "MONTHS"
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Amount"
                        }
                    },

                    legend: {
                        show: true,
                        position: "bottom"
                    },
                    title: {
                        text: "Area chart",
                        style: {
                            fontSize: 30
                        }
                    },
                    subtitle: {
                        text: "This chart showes revenue data companies by month",

                    },
                    grid: {
                        borderColor: "#ff0"
                    }
                }}
            >

            </Chart>
            <Chart
                type='line'
                width={600}
                height={600}
                series={[
                    {
                        name: "company 1",
                        data: [100, 300, 500, 245, 234, 645],
                    },
                    {
                        name: "company 1",
                        data: [150, 300, 400, 265, 234, 245],
                    },
                    {
                        name: "company 1",
                        data: [600, 340, 200, 235, 224, 145],
                    },
                    {
                        name: "company 1",
                        data: [340, 200, 240, 480, 604, 445],
                    },
                ]}
                options={{
                    colors: ["#ff0000", "#f0f", "#dd5", "#459"],

                    chart: {
                        stacked: true
                    },
                    tooltip: {
                        followCursor: true
                    },
                    dataLabels: {
                        formatter: (val) => `$${val}`,
                        style: {
                            fontSize: 12
                        }
                    },
                    xaxis: {
                        tickPlacement: "on",
                        categories: ["jan", "feb", "mar", "apr", "may", "jun"],
                        title: {
                            text: "MONTHS"
                        }
                    },
                    yaxis: {
                        title: {
                            text: "Amount"
                        }
                    },

                    legend: {
                        show: true,
                        position: "bottom"
                    },
                    title: {
                        text: "Line chart",
                        style: {
                            fontSize: 30
                        }
                    },
                    subtitle: {
                        text: "This chart showes revenue data companies by month",

                    },
                    grid: {
                        borderColor: "#ff0"
                    }
                }}
            >

            </Chart>

            <Chart
                type='pie'
                width={600}
                height={600}
                series={[340, 200, 240, 480, 604, 445]}
                options={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    tooltip: {
                        y: {
                            formatter: (val) => `$${val}`
                        }
                    },
                    title: {
                        text: "PieChart"
                    }
                }}
            >

            </Chart>
            <Chart
                type='donut'
                width={600}
                height={600}
                series={[340, 200, 240, 480, 604, 445]}
                options={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    tooltip: {
                        y: {
                            formatter: (val) => `$${val}`
                        }
                    },
                    title: {
                        text: "DonutChart"
                    }
                }}
            >

            </Chart>
        </div>
    )
}

export default Charts