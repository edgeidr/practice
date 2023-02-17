const is_anagram = (first_word, second_word) => {
    let first_word_alphabetical = first_word.toLowerCase().split("").sort().join("");
    let second_word_alphabetical = second_word.toLowerCase().split("").sort().join("");

    return first_word_alphabetical === second_word_alphabetical;
};

console.log(is_anagram("peach", "chEAp"));
