function verificaPalindrome(string) {
 for (let i = 0; i < string.length / 2; i++) 
    if (string[i] !=string[string.length - i - 1]) {
    return false;
    } else {
        return true;
    } 
} console.log (verificaPalindrome('arara'));
  console.log (verificaPalindrome('desenvolvimento'));