<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      // { hid: 'description', name: 'description', content: 'My custom description' }
      {
        name: "google-signin-scope",
        content: "https://www.googleapis.com/auth/spreadsheets"
      },
      {
        name: "google-signin-client_id",
        content:
          "251506536330-qssoe83v4koau4j4t4kjfu1aq6iect38.apps.googleusercontent.com"
      }
    ]
  },
  script: [
    { src: "https://apis.google.com/js/platform.js" },
    { src: "~/middleware/index.js " }
  ]
};
</script>