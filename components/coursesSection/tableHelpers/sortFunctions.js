
export function sortByString(arr, key, order) {

    if(order == 'asc'){
        let sorted = arr.sort((a, b) => {
            let fa = a[key].toString().toLowerCase(),
                fb = b[key].toString().toLowerCase();
           
            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        });

        return sorted  
    } else {
        let sorted = arr.sort((a, b) => {
            let fa = a[key].toLowerCase(),
                fb = b[key].toLowerCase();
           
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return sorted
    }
  
}   

export function sortByBools(arr, key, order){
    if(order == 'asc'){
        const trueFirst = arr.sort((a, b) => Number(b[key]) - Number(a[key]));
        return trueFirst
    } if (order == 'dsc') {
        const falseFirst = arr.sort((a, b) => Number(a[key]) - Number(b[key]));
        return falseFirst

    }
}