export const baseURL = 'https://www.atg.se/services/racinginfo/v1/api';
export const sortProductsByTime = (a, b) =>new Date(b.startTime) - new Date(a.startTime);
export const formatDate = function (date){
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const time = (hours<10 ?'0'+hours:hours)+':'+(minutes<10 ?'0'+minutes:minutes);
    return time;
};