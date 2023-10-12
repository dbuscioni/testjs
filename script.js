// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('will');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}