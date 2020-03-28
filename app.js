let day = new Date();


switch(day.getDay()) {
    case 0:
    
    break;

    case 1:
    console.log('Lunes');
    break;

    case 2:
    console.log('Martes');
    break;

    case 3:
    console.log('Miercoles');
    break;

    case 4:
    console.log('Jueves');
    break;

    case 5:
    console.log('Viernes');
    break;

    case 6:
        let day = document.getElementById('day');
        day.innerHTML = ` 
        <h1>Sábado</h1>
        `
    
    
    break;

} 






