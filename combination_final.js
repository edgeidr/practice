const combinations_array = [];
const word = "dog";
const word_array = word.split("");

const get_combination = () => {
    if (typeof word !== "string") return "Parameter must be string";

    word_array.forEach((str, index) => try_combination(str, [index]));

    return combinations_array.sort((a, b) => a.length - b.length);
};

const try_combination = (str, used) => {
    if (str.length > word_array.length) return;
    if (!combinations_array.includes(str)) {
        combinations_array.push(str);
    }

    word_array.forEach((letter, index) => {
        let combination_temp = [str];

        if (used.includes(index)) return;
        combination_temp.push(letter);
        try_combination(combination_temp.join(""), [...used, index]);
    });
}

console.log(get_combination(word));