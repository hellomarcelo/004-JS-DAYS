let day = new Date();


switch(day.getDay()) {
    case 0:
         let day0 = document.getElementById('day');
        day0.innerHTML = ` 
        <h1>Domingo</h1>
        `
    break;

    case 1:
     let day1 = document.getElementById('day');
        day1.innerHTML = ` 
        <h1>Lunes</h1>
        `
    break;

    case 2:
     let day2 = document.getElementById('day');
        day2.innerHTML = ` 
        <h1>Martes</h1>
        `
    break;

    case 3:
    let day3 = document.getElementById('day');
        day3.innerHTML = ` 
        <h1>Míercoles</h1>
        `
    break;

    case 4:
    let day4 = document.getElementById('day');
        day4.innerHTML = ` 
        <h1>Jueves</h1>
        `
    break;

    case 5:
     let day5 = document.getElementById('day');
        day5.innerHTML = ` 
        <h1>Viernes</h1>
        `
    break;

    case 6:
        let day6 = document.getElementById('day');
        day6.innerHTML = ` 
        <h1>Sábado</h1>
        `
    break;

} 






