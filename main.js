function getGitHubRepos(user) {
  fetch(`https://api.github.com/users/${user}/repos`, { method: "GET" })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      res.forEach(repo => {
        $("#repository").append(`<div class="col-md-4 pt-5">
        <div class="portfolio-element text-center py-3">
          <div class="portfolio-text">
            <h2>${repo.name}</h2>
            <p>
              ${repo.description}
            </p>
            <a
              class="text-center"
              target="_blank"
              href="${repo.html_url}"
              >visit the project
              <i class="fa fa-arrow-right" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>`);
      });
    });
}

getGitHubRepos("RiccardoCherchi");
