// flot chart bar script
$(function () {
    var data = [
        ["0", 6],
        ["1", 8],
        ["2", 4],
        ["3", 5],
        ["4", 6],
        ["5", 7],
    ];

    if ($("#earningChart").length) {
        $.plot("#earningChart", [data], {
            series: {
                bars: {
                    show: true,
                    barWidth: 0.5,
                    align: "center",
                    fillColor: "#3f50f6",
                },
                color: "#3f50f6",
                lines: {
                    fill: true,
                },
            },
            xaxis: {
                mode: "categories",
                tickLength: 0,
                ticks: [],
            },
            yaxis: {
                ticks: [],
            },
            grid: {
                borderWidth: 0,
                labelMargin: 10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius: 6,
            },
        });
    }
});