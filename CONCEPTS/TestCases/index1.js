// Define a function to create a key maker with your special key
function createKeyMaker(specialKey) {
    // Define an inner function that generates a new key for your friend
    function generateKey(friendName) {
      // Combine the special key and friend's name to create a unique key
      const combinedKey = `${specialKey}-${friendName}`;
      
      // Define a function to open the mailbox using the generated key
      function openMailbox(keyToOpen) {
        if (typeof keyToOpen === 'string') {
          // Split the key to extract the friend's name
          const [, name] = keyToOpen.split('-');
          
          // Check if the friend's name matches the name encoded in the key
          if (name === friendName) {
            return "Mailbox opened. Here's the secret letter.";
          } else {
            return "Access denied. Invalid key.";
          }
        } else {
          return "Access denied. Invalid key.";
        }
      }
      
      // Return the key generator function along with the openMailbox function
      return {
        generateKey,
        openMailbox,
      };
    }
    
    // Return the key maker function
    return generateKey;
  }
  
  // Create a key maker with your special key
  const yourSpecialKey = "MySecret123";  // Replace with your actual special key
  const keyMaker = createKeyMaker(yourSpecialKey);
  
  // Your friend's name
  const friendName = "Alice";  // Replace with your friend's actual name
  
  // Generate a key for your friend
  const friendKey = keyMaker(friendName).generateKey(friendName);
  
  // Try to open the mailbox with the friend's key
  const result = keyMaker(friendName).openMailbox(friendKey);
  
  // Output the result
  console.log(result);

  // O/P:

  // Output is not working prperly once check it


//   Question - 2

// Imagine you have a special mailbox with a unique key, and inside this mailbox, you keep a secret letter. 
// Now, you want to share this mailbox with a friend but ensure that only your friend can access the letter 
// inside, and others can't tamper with it.
// To achieve this, you decide to create a "key maker" function. This function takes your special key and 
// returns a new key that your friend can use to open the mailbox. However, the catch is that this new key 
// is a bit different; it's a combination of your special key and the friend's name. So, when your friend uses 
// this new key to open the mailbox, it checks if the friend's name matches the name encoded in the key. If 
// it does, the mailbox opens and reveals the secret letter. This "key maker" function which remembers 
// your special key and combines it with your friend's name