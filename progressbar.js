
    const metricsData = [
        { name: "Food Safety", value: 74, img: "./img/img1.jpg" },
        { name: "Compliance Basic Procedure", value: 52, img: "./img/img3.jpg" },
        { name: "Company Networking", value: 36, img: "./img/img2.jpg" }
    ];

    const metricsContainer = document.getElementById("metrics");
    
    metricsData.forEach(metric => {
        const barItem = document.createElement("div");
        barItem.classList.add("bar-item");
        
        barItem.innerHTML = `
            <div class="bar-top">
                
                <span class="bar-label">${metric.name}</span>
            </div>
            <div class="bar-content">
                <img src="${metric.img}" alt="${metric.name}">
                <div class="bar-container">
                    <div class="bar" style="width: ${metric.value}% Correct;"></div>
                </div>
                <span class="bar-percentage">${metric.value}% Correct</span>
            </div>
        `;
        
        metricsContainer.appendChild(barItem);
    });


