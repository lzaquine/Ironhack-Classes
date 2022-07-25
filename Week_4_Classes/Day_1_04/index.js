// Promises
// Async code

const myPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve(return value)
    } else {
        reject(reason)
    }
})

// 3 states - Pending, resolved, rejected

// Pending
    const pendingPromise = new Promise((resolve, reject) => {});
    console.log(pendingPromise); // Promise { <pending> }

// Resolved
    const resolvedPromise = Promise.resolve(42);
    console.log(resolvedPromise); // Promise { 42 }


// Rejected
    const rejectedPromise = Promise.reject('We rejected the promise.')
    console.log(rejectedPromise); // error


const names = ['Andre', 'Xico', 'Diogo', 'Carolina'];
function obtainNames(count) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            console.log(names[count])
    
            if(!names[count]) reject('Name not found')
            else resolve()
    }, 1000)
    })
}


obtainNames(0) // Andre
obtainNames(5) // undefined - Name not found
.then(() => obtainNames(1))
.then(() => obtainNames(2))
.then(() => obtainNames(3))
.catch((err) => console.log(err));


// then only happens if the promise was resolved
// catch only happens when a promise is rejected
obtainNames(0).then((name) => console.log(name));
.catch((err) => console.log(err));


const pr3 = new Promise((resolve, reject) => {
    throw new Error('Rejected by throwing an error')
})

pr3
.then((value) => console.log(value));
.catch((err) => console.log(err));


const pr4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('A', 2000))
})

pr4.then((value1) => {
    console.log('value1:', value1)
    return 'B'
}).then((value2) => {
    console.log('value2:', value2)
    return 'C'
})
.catch((err) => console.log(err));
// .then only happens if the promise resolves

// finally
// finally runs no matter what

const pr6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ironhack'), 2000)
})

pr6.then((value) => console.log(value, '.then()'))
.then(() => Promise.reject('Something went wrong'))
.then(() => console.log('3 .then()'))
.catch((err) => console.log(err))
.finally(() => console.log('.finally()'))

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Xico'), 1000)
})
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Diogo'), 3000)
})
const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Carolina'), 5000)
})

// Promise.all
                        //// Array of values
Promise.all([firstPromise, secondPromise, thirdPromise]).then((values) => console.log(values));


// Async await
async function getNames() {
}


const getNames = async () => {
    let username = await obtainNames(0);
    await obtainNames(1);
    await obtainNames(2);
    
    console.log(username);
}

getNames(); // vai demorar 1 segundo. enquanto o await esta sendo "usado", nada mais vai rodar. depois sim

// try / catch block
try {

} catch (error) {
    
}


const getNames = async () => {
    try { let username = await obtainNames(0);
    await obtainNames(1);
    await obtainNames(2);
    await obtainNames(4);
    console.log(username);
    } catch (error) {
        console.log(error);
    }
};

getNames();

