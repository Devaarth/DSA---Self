function isPalindrome(s: string): boolean {
    let onlyChars = s.toLowerCase().split('')
  .filter(
    (char) =>
      (char >= 'a' && char <= 'z') ||
      (char >= '0' && char <= '9')
  )
  .join('');
  const reversed = onlyChars.split('').reverse().join('');
    console.log("output " + onlyChars);
    return reversed === onlyChars;
};