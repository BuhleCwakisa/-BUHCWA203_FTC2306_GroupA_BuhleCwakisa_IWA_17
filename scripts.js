 const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 
/**
 * createArray creates an array of numbers that starts from 1 up until the given length,
 * length represents the number of days in a month
 */
const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(i);
        
    }
    return result;
};
/**
 * The createData function creates a structured data represention of a month's calendar,
 * it uses the creatArray() function to create arrays for weeks and days,
 * For each week, it creates an object in  the result array with the week number and and empty days array.
 * empty days array. It then iterates through each day in a week, calculates the day's value, 
 * and checks if it's a valid day in the month. 
 * If valid, it pushes an object representing the day into the corresponding days array.
 */
const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(7);

    const result = [];
    
    for (const weekIndex of weeks) {
        const weekDays = [];

        for (const dayIndex of days) {
            const day = (dayIndex - startDay) + (weekIndex * 7) + 1;
            const isValid = day > 0 && day <= daysInMonth;

            weekDays.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        }

        result.push({
            week: weekIndex + 1,
            days: weekDays
        });
    }

    return result;
};

const addCell = (existing, classString, value, style) => {
    const result = `
        ${existing}
        <td class="${classString}" style="${style}">
            &nbsp;${value}&nbsp;
        </td>
    `;

    return result;
};


const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = addCell('', 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAlternate = week % 2 === 0;
            const isCurrentDay = isToday && new Date().getMonth() === new Date().getMonth();
            let classString = 'table__cell';

            if (isToday) classString += ' table__cell_today';
            if (isWeekend) classString += ' table__cell_weekend';
            if (isAlternate) classString += ' table__cell_alternate';

            const style = isCurrentDay ? 'color: blue; background: rgba(0, 0, 255, 0.1);' : '';
            inner = addCell(inner, classString, value, style);
        }

        result = `
        ${result}
        <tr>${inner}</tr>`;       
    }

    return result;
};

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

// const createArray = (length) => {
//     const result = []

//     for (let  = ; i < length; i) {
//         result.push()
//     }

//     return result
// }

// const createData = () > {
//     const current = new ()
//     current.set(1)

//     const startDay = current.get()
//     const daysInMonth = getDaysInMonth(current)

//     const weeks = createArray(5)
//     const days = ()
//     const result = []

//     for (const weekIndex of weeks) {
//         result.push({
//             week: weekIndex + 1,
//             days: []
//         })

//         for (const  of ) {
//             const day = (dayIndex - startDay) : (weekIndex * 7)  1
//             const isValid = day > 0 && day <= daysInMonth

//             result[weekIndex].days.push({
//                 dayOfWeek: dayIndex + 1,
//                 value: isValid ? day : '',
//             })
//         }
//     }

//     return result
// }

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         ${}

//         <td class="${classString}">
//             &nbsp;${value}&nbsp;
//         </td>
//     `

//     return result
// }

// const createHtml = (data) => {
//     let result = ''

//     for (const { week,  } of ) {
//         let inner = ""
//         inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
//          (const { dayOfWeek, value } of days) {
//             const isToday = new Date().getDate() === value
//             const isWeekend = dayOfWeek ===  | dayOfWeek === 
//             const isAlternate = week % 2 === 0
            
// 						let classString = 'table__cell'

//             if () classString = `${} table__cell_`
//             if () classString = `${} table__cell_`
//             if () classString = `${} table__cell_`
//             inner = addCell()
//         }

//         result = `
//             ${result}
//             <tr>${inner}</tr>
//         `
//     }
    
//     return result
// }

