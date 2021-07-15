export const baseURL = 'https://www.atg.se/services/racinginfo/v1/api';
export const sortProductsByTime = (a, b) =>new Date(b.startTime) - new Date(a.startTime);
export const formatDate = function (date){
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const time = (hours<10 ?'0'+hours:hours)+':'+(minutes<10 ?'0'+minutes:minutes);
    
    return `${d.getFullYear()} - ${d.getMonth()} - ${d.getDate()} : ${time}`;
};