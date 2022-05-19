import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/hikaruisasleep/shallomindo.xyz.git', // Update to point to your repository
  user: {
   name: 'Ben Wu', // update to use your name
   email: 'benayaj.2004@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);