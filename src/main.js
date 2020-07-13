// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import AuthPlugin from "./plugins/auth";

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);
  Vue.use(AuthPlugin);

  router.beforeEach((to, from, next) => {
    if (to.path != "/profile") {
      next();
    } else if (router.app.$auth.isAuthenticated()) {
      // if authenticated allow access
      console.log("User authenticated!!!!");
      if (from.name !== null) {
        if (from.query._storyblok) {
          return next(false);
        }
      }
      next();
    } else {
      // trigger auth0's login
      console.log("User Login");
      router.app.$auth.login();
    }
  });

  Vue.component("Layout", DefaultLayout);

  head.meta.push({
    name: "keywords",
    content:
      "Python, Dart, Shell Scripting, PowerShell, Go, Java, C/C++, SQL, HTML5, CSS, Rust JavaScript, Systems & Technologies, Git, PostgreSQL, MySQL, Firebase (NoSQL), AWS, Serverless/Lambda, Microsoft Office Suite, G-Suite, Slack, Airtable, Windows 10, Windows Server 2012 R2, Ubuntu, CentOS, MacOS, Android Studio, Xcode, Lakeland, Florida, Freelancer",
  });

  head.meta.push({
    name: "description",
    content: "Elijah Luckey, your friendly neighborhood developer.",
  });

  head.meta.push({
    name: "author",
    content: "Elijah Luckey",
  });

  head.link.push({
    rel: "stylesheet",
    // TODO: Get new fonts?
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });
}

/*
Python, Dart, Shell Scripting, PowerShell, Go, Java, C/C++, SQL, HTML5, CSS, Rust JavaScript, Systems & Technologies, Git, PostgreSQL, MySQL, Firebase (NoSQL), AWS, Serverless/Lambda, Microsoft Office Suite, G-Suite, Slack, Airtable, Windows 10, Windows Server 2012 R2, Ubuntu, CentOS, MacOS, Android Studio, Xcode
*/
