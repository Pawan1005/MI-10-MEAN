function secondLarge() {
    event.preventDefault();
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let num4 = parseInt(document.getElementById('num4').value);
    let num5 = parseInt(document.getElementById('num5').value);

    let listNumber = [num1, num2, num3, num4, num5];
    
    function mergeSort(arr) {
        let len = arr.length;

        if(len < 2) {
            return arr;
        }
        let mid = Math.floor(len/2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    function merge(left, right) {
        var result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen){
            if(left[l] < right[r]) {
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }

        return result.concat(left.slice(l)).concat(right.slice(r));
    }

    const findNumber = list => {
        
        let sortList = mergeSort(list)

        // Using inbuilt sort method then convert into desending order and return second large value from list
        // // reversing list of values
        // list.sort( (number1, number2) => {
        //     return number2 - number1;
        // });

        //  return list of second value
        // return list[1]

        return sortList[sortList.length - 2];
    }
    document.getElementById('secNumber').innerHTML = `List of values are: <b>[${listNumber}]</b> Second Large value From list is <b>${findNumber(listNumber)}</b>`;
}