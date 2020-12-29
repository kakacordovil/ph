import Profile from '../models/Profile';

export default {
  render(profile: Profile) {
    return {
      id: profile.id,
      username: profile.username
    };
  },

  renderMany(profiles: Profile[]) {
    return profiles.map(profile => this.render(profile));
  }
};