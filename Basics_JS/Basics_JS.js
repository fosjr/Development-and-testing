//Task 1
function filter_list(arr) {
    arr.filter(Number);
    return arr;
}

console.log(filter_list([1,2,'a','b']));


//Task 2
function first_non_repeating_letter(str) {
    let new_str = str.toLowerCase();
    for(let i = 0; i < new_str.length; i++) {
        let smb = new_str.charAt(i);
        if (i == new_str.lastIndexOf(smb)) {
         return smb;
        }
    }
    return null;
}

console.log(first_non_repeating_letter("arrays of mine"));


//Task 3
function digital_root(num) {
    let str = String(num);
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += Number(str[i]);
    }

    if (res >= 10) {
        res = digital_root(res);
    }

    return res;
}

console.log(digital_root(17745));


//Task 4
function count_sum(arr, trg) {
   let res = 0;
   for(let i = 0; i < arr.length; i++) {
       for(let j = i + 1; j < arr.length; j++) {
           if((arr[i] + arr[j]) == trg) res += 1;
       }
   } 

   return res;
}

console.log([1, 3, 6, 2, 2, 0, 4, 5], 5);


//Task 5
function sort(str) {
    let temp = str.toUpperCase().split(";");
    let size = temp.length;
    let new_arr = [];
    for(let i = 0; i < size; i++) {
        new_arr.push(temp[i].split(":"));
    }

    new_arr.sort();
    
    for(let i = 0; i < size - 1; i++) {
        if(new_arr[i][1] < new_arr[i + 1][1]) { 
            let tempor = new_arr[i];
            new_arr[i] = new_arr[i + 1];
            new_arr[i + 1] = tempor;
        } 
    }

    let res = new String();
    for(let i = 0; i < size - 1; i++) {
        res += ("(" + new_arr[i][0] + ", " + new_arr[i][1] + ") ");
    }
    
    return res;
}

let s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(sort(s));


//Extra Task1
function nextBigger(num){
    let num_str = String(num);
    for(let i = num_str.length - 1; i >= 1; i--) {
        console.log(num_str[i] + "     " + num_str[i - 1]);
        if(num_str[i] > num_str[i - 1]) {
            let temp = num_str[i];
            num_str = num_str.replace(num_str[i], num_str[i-1]);
            num_str = num_str.replace(num_str[i-1], temp);
            return Number(num_str);
        }
    }

    return -1;
}

console.log(nextBigger(513))