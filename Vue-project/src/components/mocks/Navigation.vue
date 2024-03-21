<template>
  <ul class="nav__list">
    <li class="nav__link" v-for="link in navLinks" :key="link.id">
      <router-link :to="link.navLink">{{ link.title }}</router-link>
    </li>
    <li class="nav__item">
      <router-link :to="{ name: 'params', params: { id: '12345667' } }"
        >Params</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navLinks: [
        {
          id: 0,
          navLink: "/",
          title: "Home",
        },
        {
          id: 1,
          navLink: "/about",
          title: "About",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.nav__list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.router-link-active {
  color: crimson;
  text-decoration: none;
}
</style>
