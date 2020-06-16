
    let newDate = new Date()
    export let date = newDate.getDate();
    //
    let month = newDate.getMonth();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    export let monthName = monthNames[month];
    //
    let day = newDate.getDay() - 1 ;
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    export let dayName = dayNames[day];
    //
    export let year = newDate.getFullYear();