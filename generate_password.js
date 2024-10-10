function generatePassword(length = 12) {
    //Create an empty list for the output.
    let output = []

    //Define the characters that we will be making our passwords from.
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';

    //Use a for loop to make sure our password loops over twelve times for the amount of characters we want in each password.
    for (let i = 0; i < length; i++) {

    //Use this in the loop to generate the random characters we want for the password.
        const randomIndex = Math.floor(Math.random() * characters.length);
        //We also want to add each new random character to our output for each time it does a loop to make up the entire 12 character password.
        output.push(characters.charAt(randomIndex));
    
    //The password we are returning will be the output (total of all random characters) joined together.
    }
    let password = output.join("")
    return password
} 

module.exports = generatePassword;
