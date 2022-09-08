export default class Http {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async fetch(url, options) {
        const response = await fetch(`${this.baseURL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        let data;
        try {
            data = await response.json();
        } catch (error) {
            console.error(error);
        }
        if (response.status > 299 || response.status < 200) {
            const message = data && data.message ? data.message : '뭔가 잘못되었습니다.';
            return new Error(message);
        }
        return data;
    }
}