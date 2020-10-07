class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Show profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" width="100px" height="100px" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers : ${user.followers}</span>
                    <span class="badge badge-primary">Following : ${user.following}</span>
                
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Website/Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    // Show alert message
    showAlert(message ,className) {
        // Before creating alert remove other alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add class
        div.className = className;
        // Append message
        div.appendChild(document.createTextNode(message));
        // Get parent id
        const container = document.querySelector('.serachContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search);
        // Remove alert after few seconds
        setTimeout(() => {
            this.clearAlert()
        },3000);
    }   

    // Show repos
    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-primary">Watchers : ${repo.watchers_count}</span>
                            <span class="badge badge-primary">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;

            // Output repos
            document.getElementById('repos').innerHTML = output;

        });
    }

    // Clear alert message
    clearAlert() {
        const notif = document.querySelector('.alert');

        if(notif) {
            notif.remove();
        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}