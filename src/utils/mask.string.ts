const maskString = (input = "", maskChar = '*') => {
    return maskChar.repeat(input.length);
};

export default maskString