<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header
      class="w-full p-2 align-middle flex items-center"
      style="
        height: 8%;
        vertical-align: middle;
        border-bottom: 0.7px solid #4a4c54c2;

        color: #373f4a;
      "
    >
      <!-- PREMIUM LEAGUE  -->
      <img src="logo.svg" style="height: 30px" />
      <h1 class="self-end font-black">&nbsp;Premier League</h1>
    </header>
    <section class="w-full h-full flex scroller" style="height: 92%">
      <div
        style="width: 25%; height: 100%; border-right: 0.7px solid #4a4c54c2"
        class="p-4 flex flex-col"
      >
        <h1>Player List</h1>
        <span> Total Points : 20000</span>

        <span> Used Points : 2000</span>
        <input v-model="search" class="p-1 input mt-4" />
        <div
          class="flex flex-1 flex-col overflow-auto mt-4 h-fit mb-4"
          style="height: 90%"
        >
          <!-- <RecycleScroller
            :items="items"
            :item-size="40"
            key-field="counterName"
          >
            <template v-slot="{ item }">
              <div class="player bg-slate-800">{{ item }}</div>
            </template>
          </RecycleScroller> -->

          <div
            ref="itemRef"
            class="player bg-slate-700 flex justify-between item-container bg-slate-700"
            v-for="p in items"
            :key="p.name"
          >
            <h1>{{ p.name }}</h1>

            <span
              variant="transparent"
              class="cursor-move"
              style="padding: 3px 20px"
              :shadow="false"
              shape="circle"
              draggable="true"
              @dragstart="dragStart($event, p)"
              @dragend="dragEnd"
            >
              <font-awesome-icon icon="fa-solid fa-arrows-up-down-left-right" />
              <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
            </span>
          </div>
        </div>
      </div>
      <div style="width: 75%; height: 100%" class="p-4">
        <h1>Teams</h1>
        <div class="w-full h-full">
          <div
            :style="{
              display: 'grid',
              'grid-auto-rows': 'minmax(300px, max-content)',
              'grid-template-columns': 'repeat(2, minmax(100px, 1fr))',
              'grid-gap': '16px',
            }"
          >
            <div
              v-for="t in 4"
              :key="t"
              class="rounded-lg input flex flex-col items-center justify-center text-slate-500 item-container"
              style="border-style: dashed !important"
              @dblclick="showTeamInformation(t)"
              @dragover="allowDropSeries($event, t)"
            >
              <div
                class="w-full h-full flex flex-col items-center justify-center"
                @drop="dropSeries($event, t)"
              >
                TEAM {{ t }}
                <br />
                Drag Player
                <br />
                Total Points : 5000
                <br />
                Remaining Points : 500
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <vs-dialog overflow-hidden full-screen v-model="active" @close="closeModel">
      <template #header>
        <h4 class="not-margin"><b>Vuesax</b></h4>
      </template>

      <template #footer> </template>
    </vs-dialog>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      search: undefined,
      dragedPlayer: undefined,
      items: [
        {
          name: "player 1",
          point: 200,
        },
        {
          name: "player 2",
          point: 200,
        },
        {
          name: "player 3",
          point: 200,
        },
        {
          name: "player 4",
          point: 200,
        },
        {
          name: "player 5",
          point: 200,
        },
        {
          name: "player 6",
          point: 200,
        },
        {
          name: "player 7",
          point: 200,
        },
        {
          name: "player 8",
          point: 200,
        },
        {
          name: "player 9",
          point: 200,
        },
        {
          name: "player 10",
          point: 200,
        },
        {
          name: "player 11",
          point: 200,
        },
      ],
      active: false,
    };
  },
  methods: {
    showTeamInformation(t) {
      console.log(t);

      this.active = true;
    },
    dragStart(event, item) {
      event.dataTransfer.effectAllowed = "copy";
      this.dragedPlayer = item;
      event.dataTransfer.setDragImage(
        event.target.closest(".item-container"),
        0,
        0
      );
    },
    dragEnd() {
      this.dragedPlayer = undefined;
    },
    dropSeries(e, t) {
      if (this.dragedPlayer) {
        e.preventDefault();

        let index = this.items.findIndex(
          (item) => item.name === this.dragedPlayer.name
        );
        this.items = [
          ...this.items.slice(0, index),
          {
            ...this.items[index],
            team: t,
          },
          ...this.items.slice(index + 1),
        ];
        e.preventDefault();
      }
    },
    allowDropSeries(e) {
      if (this.dragedPlayer) {
        e.preventDefault();
      }
    },
    closeModel() {},
  },
};
</script>

<style>
@import "./index.css";
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(59, 59, 59);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #686868;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #212121;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: rgb(17, 17, 17);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.player {
  margin: 5px 0px;
  padding: 5px;
  border-radius: 5px;
}
.input {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #4a4c54c2;
}
</style>
