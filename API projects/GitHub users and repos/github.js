class Github {
    constructor() {
        this.client_id = '99b90b02aa73b5889e27';
        this.client_secret = '90953812f8ba257f27ef4b84cfb6894726f45218';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }    
}

    
