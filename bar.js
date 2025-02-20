const barctx = document.getElementById('activityChart').getContext('2d');
new Chart(barctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Activity',
            data: [100, 120, 120, 220, 250, 280, 200, 250, 100, 280, 320, 380],
            backgroundColor: 'rgb(0, 140, 233)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderRadius: 10, 
            barThickness: 10  
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true, grid: {
                    display: false, drawBorder: false  
                }
            },
           x:{
            grid: {
                display: false, drawBorder: false  
            }
           }
        },
        layout: {
            padding: 0 
        },
        plugins: {
            legend: { display: false }  
        }
    }
});








