
const metricsData2 = [
    { name: "Covid Protocols", value: 95, img: "./img4.jpg" },
    { name: "Cyber Security Basic", value: 92, img: "./img5.jpg" },
    { name: "Social Media Policies", value: 89, img: "./img6.jpg" }
];

const metricsContainer2 = document.getElementById("metricstwo");

metricsData2.forEach(metric2 => {
    const barItem2 = document.createElement("div");
    barItem2.classList.add("bar-item2");
    
    barItem2.innerHTML = `
        <div class="bar-top2">
            
            <span class="bar-label2">${metric2.name}</span>
        </div>
        <div class="bar-content2">
            <img src="${metric2.img}" alt="${metric2.name}">
            <div class="bar-container2">
                <div class="bar2" style="width: ${metric2.value}% Correct;"></div>
            </div>
            <span class="bar-percentage2">${metric2.value}% Correct</span>
        </div>
    `;
    
    metricsContainer2.appendChild(barItem2);
});


