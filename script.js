document.addEventListener('DOMContentLoaded', () => {
    const busStops = [
        { name: 'Main Street & 1st Ave', distance: '50m' },
        { name: 'Oak Street & 2nd Ave', distance: '120m' },
        { name: 'Pine Street & 3rd Ave', distance: '250m' },
        { name: 'Maple Street & 4th Ave', distance: '400m' },
    ];

    const busStopList = document.getElementById('bus-stop-list');

    busStops.forEach(stop => {
        const listItem = document.createElement('li');

        const nameSpan = document.createElement('span');
        nameSpan.textContent = stop.name;

        const distanceSpan = document.createElement('span');
        distanceSpan.textContent = stop.distance;

        listItem.appendChild(nameSpan);
        listItem.appendChild(distanceSpan);

        busStopList.appendChild(listItem);
    });
});
