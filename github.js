class GitHub {
  constructor(){
    this.client_id="1e63525ae47f9f335afd";
    this.client_secret="41406310760b2e018d3c4dda5d7dd41a7551554d";
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clientid=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return{
      profile
    }
  }
}