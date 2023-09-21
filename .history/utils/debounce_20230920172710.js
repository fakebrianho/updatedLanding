export default function debounce(fn, ms = 300){
    let timeoutId;
    return functio (...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=> fn.apply(args), ms)
    }
}