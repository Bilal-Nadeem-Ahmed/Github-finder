class GitHub {
  constructor(){
    this.client_id="1e63525ae47f9f335afd";
    this.client_secret="cd35bbb15335638eb36f0f71fb6bfbb7a083efdd";
    this.repos_count = 5;
    this.repos_sort = "created: asc"
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clientid=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clientid=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
      profile,
      repos
    }
  }
}