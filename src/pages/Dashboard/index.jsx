import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Dashboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Gradient color - this week
    const gradientThisWeek = ctx.createLinearGradient(0, 0, 0, 150);
    gradientThisWeek.addColorStop(0, "#5555FF");
    gradientThisWeek.addColorStop(1, "#9787FF");

    // Gradient color - previous week
    const gradientPrevWeek = ctx.createLinearGradient(0, 0, 0, 150);
    gradientPrevWeek.addColorStop(0, "#FF55B8");
    gradientPrevWeek.addColorStop(1, "#FF8787");

    const multiply = {
      id: "multiply",
      beforeDatasetsDraw(chart) {
        chart.ctx.globalCompositeOperation = "multiply";
      },
      afterDatasetsDraw(chart) {
        chart.ctx.globalCompositeOperation = "source-over";
      },
    };

    const config = {
      type: "line",
      data: {
        labels: ["SUN", "MON", "TUE", "WED"],
        datasets: [
          {
            label: "Temperature",
            data: [20, 22, 14, 22],
            fill: false,
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: 2,
            pointBackgroundColor: "transparent",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 3,
            pointHoverBorderColor: "rgba(255, 255, 255, 0.2)",
            pointHoverBorderWidth: 10,
            lineTension: 0,
          },
        ],
      },
      options: {
        responsive: false,
        elements: {
          point: {
            radius: 6,
            hitRadius: 6,
            hoverRadius: 6,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "transparent",
            displayColors: false,
            bodyFontSize: 14,
            callbacks: {
              label(tooltipItems) {
                return tooltipItems.formattedValue + "°C";
              },
            },
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
            beginAtZero: true,
          },
        },
      },
      plugins: [multiply],
    };

    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="flex max-xl:flex-col md:mt-10 justify-between xl:space-x-10 max-xl:space-y-5">
      <div className="w-full space-y-5">
        <div className="bg-[#243A52] p-4  flex max-md:flex-col max-md:space-y-4 justify-between rounded-md">
          <div className="text-white basis-2/5 flex justify-center items-baseline">
            <div className="space-y-7 md:space-y-14">
              <div className="flex justify-between gap-x-5">
                <p>IndianA,USA</p>
                <p> Today 00:32 PM</p>
              </div>
              <div>
                <p className="text-[40px] md:text-[80px]">20°C</p>
                <p>Mostly Clear</p>
              </div>
              <div className="flex justify-between items-center gap-x-4">
                <p>
                  <span>icon </span>
                  <span>720hpa</span>
                </p>
                <p>
                  <span>icon </span>
                  <span>32%</span>
                </p>
                <p>
                  <span>icon </span>
                  <span>12km/h</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card basis-full md:basis-2/5 ">
            {/* Custom information */}
            <div className="about">
              <p className="lead">Temperature in °C</p>
            </div>

            {/* Canvas for Chart.js */}
            <canvas ref={canvasRef} width="300" height="200"></canvas>

            {/* Custom Axis */}
            <div className="axis">
              <div className="tick">
                <span className="day-number">20°C</span>
                <span className="day-name">Morning</span>
                <span className="value value--this">20°C</span>
              </div>
              <div className="tick">
                <span className="day-number">22°C</span>
                <span className="day-name">After noon</span>
                <span className="value value--this">22°C</span>
              </div>
              <div className="tick">
                <span className="day-number">14°C</span>
                <span className="day-name">Evening</span>
                <span className="value value--this">14°C</span>
              </div>
              <div className="tick">
                <span className="day-number">22°C</span>
                <span className="day-name">Night</span>
                <span className="value value--this">22°C</span>
              </div>

              {/* <div className="tick">
          <span className="day-number">14</span>
          <span className="day-name">FRI</span>
          <span className="value value--this">20°C</span>
        </div>
        <div className="tick">
          <span className="day-number">15</span>
          <span className="day-name">SAT</span>
          <span className="value value--this">12°C</span>
        </div>
        <div className="tick">
          <span className="day-number">16</span>
          <span className="day-name">SUN</span>
          <span className="value value--this">18°C</span>
        </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between max-xl:flex-wrap max-xl:space-y-4 xl:space-x-4">
          <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
            <div className="space-y-3">
              <p className="font-semibold text-lg">Wind </p>
              <p className="text-gray-400">Today wind speed</p>
              <p className="font-semibold text-lg">12km/h</p>
            </div>
            <div>
              <img src="/wind-removebg-preview.png" alt="" width={200} />
            </div>
          </div>
          <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
            <div className="space-y-3">
              <p className="font-semibold text-lg">Rain Chanse </p>
              <p className="text-gray-400">Today rain chanse</p>
              <p className="font-semibold text-lg">24%</p>
            </div>
            <div className="w-[200px] ml-6">
              <div className="circle-wrap">
                <div className="inner-circle">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between max-xl:flex-wrap max-xl:space-y-4 xl:space-x-4">
          <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
            <div className="space-y-3">
              <p className="font-semibold text-lg">Pressure </p>
              <p className="text-gray-400">Today Pressure</p>
              <p className="font-semibold text-lg">720hpa</p>
            </div>
            <div>
              <img
                src="/pressure.png"
                alt=""
                width={200}
                style={{
                  height: "200px",
                }}
              />
            </div>
          </div>
          <div className="bg-[#ECF3FB] py-4 px-7 rounded-md flex justify-evenly items-center w-full">
            <div className="space-y-3">
              <p className="font-semibold text-lg">UV Index </p>
              <p className="text-gray-400">Today UV Index</p>
              <p className="font-semibold text-lg">2</p>
            </div>
            <div className=" ml-6">
              <div className="circle-wrap">
                <div className="inner-circle">Low</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md w-full p-4">
        <div className="space-y-4">
          <p className="text-xl font-bold">Today</p>
          <div className="flex gap-x-2">
            <div className="bg-[#243A52] rounded-md flex justify-center items-center text-white px-4 py-2 w-[100px]">
              <div className="space-y-2">
                <p>Now</p>
                <p className="h-[30px] w-[30px] bg-white rounded-full "></p>
                <p>22°</p>
              </div>
            </div>
            <div className="rounded-md flex justify-center items-center bg-gray-100 px-4 py-2 w-[100px]">
              <div className="space-y-2">
                <p>01PM</p>
                <p className="h-[30px] w-[30px] bg-yellow-400 rounded-full "></p>
                <p>12°</p>
              </div>
            </div>
            <div className="rounded-md flex justify-center items-center bg-gray-100 px-4 py-2 w-[100px]">
              <div className="space-y-2">
                <p>02PM</p>
                <p className="h-[30px] w-[30px] bg-yellow-400 rounded-full "></p>
                <p>11°</p>
              </div>
            </div>
            <div className="rounded-md flex justify-center items-center bg-gray-100 px-4 py-2 w-[100px]">
              <div className="space-y-2">
                <p>03PM</p>
                <p className="h-[30px] w-[30px] bg-yellow-400 rounded-full "></p>
                <p>10°</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <iframe
            width="100%"
            height="300"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            scrolling="no"
          ></iframe>
          <br />
        </div>
        <div className="border p-2">
          <iframe
            src="https://map.worldweatheronline.com/?ref=websitehunt.co"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
