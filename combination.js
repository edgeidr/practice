const combinations_array = [];
const word = "dog";
const word_array = word.split("");

const get_combination = () => {
    if (typeof word !== "string") return "Parameter must be string";

    word_array.forEach((letter) => try_combination(letter));

    return combinations_array;
};

const try_combination = (first_letter, string_length = 1) => {
    if (string_length > word_array.length) return;

    let combination_temp = [first_letter];

    word_array.forEach((letter, index) => {
        console.log({
            first_letter: first_letter,
            letter: letter,
            string_length: string_length,
            combination_temp_length: combination_temp.length,
        });

        if (letter === first_letter) return;
        if (combination_temp.length === string_length) return;

        combination_temp.push(letter);

        if (combination_temp.length === string_length && index < word_array.length-1) {
            combinations_array.push(combination_temp.join(""))
            combination_temp.pop();
        }
    });

    combinations_array.push(combination_temp.join(""))

    if (string_length <= word_array.length) try_combination(first_letter, ++string_length);
}

console.log(get_combination(word));