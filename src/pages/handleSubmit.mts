
async function handleSubmit(event) {
event.preventDefault();
const formData = new FormData(event.target);
const bio = formData.get('bio');

// Save the user bio to your backend or database here
console.log('User bio:', bio);
}
