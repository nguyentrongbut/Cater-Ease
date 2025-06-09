const maskString = (input: string, maskChar = '*') => {
    return maskChar.repeat(input.length);
};

export default maskString