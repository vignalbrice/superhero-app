<template>
  <div class="header">
    <router-link to="/"><h2>Comics</h2></router-link>
    <div>
      <li><router-link :to="{path: '/library'}">Library</router-link></li>
      <li><router-link :to="{path: '/about'}">About</router-link></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  height: 80px;
  justify-content: space-between;
  display: flex;
  h2 {
    color: #fff;
    float: left;
    font-family: "Rock Salt";
    font-weight: bolder;
    margin: 10px 20px;
    font-size: 45px;
  }
  li {
    margin-top: 10px;
    border: 0;
    transition: all 0.1s ease-out;
  }
  div {
    display: flex;
    li {
      margin-left: 10px;
    }
  }
}

li {
  list-style: none;
  a {
    text-decoration: none;
    color: #fff;
    font-family: "Rock Salt";
  }
  a:hover {
    color: #333;
  }
}
.fa {
  cursor: pointer;
  margin-left: 5px;
}

.fade-transition {
  transition: all 0.2s ease-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
