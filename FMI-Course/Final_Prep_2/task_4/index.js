function formatProfile(data, options = {}) {

    if (!data || typeof data !== "object") {
      return {};  
    }

    const { formatName = true, createUsername = true, hideEmail = false } = options;
    let result = {};

    
    if (formatName) {
        if (data.firstName) 
            result.firstName = data.firstName[0].toUpperCase() + data.firstName.slice(1);
        if (data.lastName) 
            result.lastName = data.lastName[0].toUpperCase() + data.lastName.slice(1);
    } else {
        if (data.firstName) 
            result.firstName = data.firstName;
        if (data.lastName) 
            result.lastName = data.lastName;
    }

    if (createUsername && data.firstName && data.lastName) {
        result.username = data.firstName.slice(0, 3).toLowerCase() + data.lastName.slice(0, 3).toLowerCase();
    }

    if (data.email) {
        if (hideEmail) {
            const atIndex = data.email.indexOf("@");
            result.email = data.email[0] + "***" + data.email.slice(atIndex);
        } else {
            result.email = data.email;
        }
    }

    return result;
}

// Example usage:
const user = { firstName: "john", lastName: "doe", email: "john.doe@email.com" };
console.log(formatProfile(user, { createUsername: true }));
console.log(formatProfile(user, { hideEmail: true, formatName: false }));
console.log(formatProfile("invalid data"));
console.log(formatProfile({ firstName: "ana", email: "ana@test.com" }));