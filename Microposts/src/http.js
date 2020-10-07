/** 
 * EasyHttp Library
 * Library for making HTTP request
 * 
 * @version 3.0.0 
 * @author Brad Traversy 
 * @licence MIT
 * 
**/

class EasyHTTP {
    // Make an HTTP GET request
    async get(url) {

            const res = await fetch(url);
            const data = await res.json();
            return data;
    }

    // Make a POST request
    async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const user = await res.json();
        console.log('New POST');
        return user;
    }

    // Make an HTTP PUT request
    async put(url, data) {

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const user = await res.json();
        console.log('POST updated');
        return user;
    }

    // Make an HTTP DELETE request
    async delete(url) {

        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        const user = await res.json();
        console.log(user);
        console.log('Post DELETED');
        const res2 = await fetch(url);
            const data = await res2.json();
            return data;
    }

}

export const http = new EasyHTTP();