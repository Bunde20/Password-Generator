# Random Password Generator

## Client Needs
- In order to make sure that sensitive data is protected, the client would like to be able to have a password generated for them as an extra layer of security.
  
## Acceptance Criteria
- Upon clicking the generate password button, there should be prompts that gather information for the newly created password.
    - This was done by providing a series of questions for the user that include the options to set the length of the password, and if any uppercase, lowercase, numbers, or any special characters should be used.
- In order to create a secure password, the length should be set between 8 and 128 characters.
    - When the user clicks the generate password button the first prompt given will allow them to enter any number between 8 and 128. If a number is entered that is outside of that range, the prompts will alert them to try again to ensure they are within that range. 
- As the user navigates through the prompts there should be options to include or exclude lowercase, uppercase, numeric, and/or special characters.
    - Each prompt given to the user will contain the option to include any of the four criteria to which the user can accept or deny allowing them to customize their final password.
- Ensure that if at least one criteria is accepted a password will print.
    - After all prompt information is collected, if at least one option was included the password will be created and printed on the screen. If no options are selected the user will be prompted to try again.
- Once all prompts are answered the printed password should reflect all characters that were selected to be included.
    - After the final selection is made by the user the password printed in the text box will include all accepted characters for the user to copy and use.

## Usage
![PG mock up](https://github.com/Bunde20/Password-Generator/assets/135177057/3e55ac12-33d9-4bde-b338-f2d66bba8330)

## Credits
The starter code was provided by Xandromus: [https://github.com/coding-boot-camp/urban-octo-telegram](https://github.com/coding-boot-camp/friendly-parakeet)

## Deployed Application Link
Here is a link to the deployed application: https://bunde20.github.io/Password-Generator/
