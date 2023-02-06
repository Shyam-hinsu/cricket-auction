<template>
  <header
    class="w-full p-2 align-middle flex items-center"
    style="
      height: 8%;
      vertical-align: middle;
      border-bottom: 0.7px solid #4a4c54c2;

      color: #1373ab;
    "
  >
    <!-- #1373ab  #373f4a  -->
    <!-- PREMIUM LEAGUE  -->
    <img src="logo.svg" style="height: 30px" />
    <h1 class="self-end font-black">
      &nbsp;Premier <span style="color: #4e9e62">League</span>
    </h1>
  </header>
</template>

<script>
// import { db } from "@/firebase/firebaseinit";
// import { collection } from "firebase/firestore";
export default {
  // eslint-disable-next-line
  name: "Header",
  // methods: {
  //   init() {
  //     this.fetchedDataFromFirebase = collection(db, "players");

  //     this.getNotes();
  //   },
  // },
  // created() {
  //   this.init();
  // },
};
</script>
