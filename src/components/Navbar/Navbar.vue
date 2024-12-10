<template>
  <header class="bg-white pt-4">
    <nav class="flex justify-between items-center px-4 py-3 md:px-8">
      <div>
        <img src="../../assets/Logo/Holmen logo.svg" alt="Holmen Logo" class="h-8 md:h-10" />
      </div>

      <!-- Toggle button for mobile -->
      <button
        class="block md:hidden focus:outline-none"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Desktop navigation -->
      <ul class="hidden md:flex justify-between items-center gap-8">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li>
          <router-link to="/services" class="nav-link">Solutions & Services</router-link>
        </li>
        <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
        <li>
          <router-link
            to="/get-in-touch"
            class="bg-pink-100 text-pink-600 font-bold py-2 px-4 rounded-md hover:bg-pink-200"
          >
            Get in Touch
          </router-link>
        </li>
      </ul>

      <!-- Mobile navigation -->
      <div
        id="mobile-menu"
        class="md:hidden"
        :class="{ 'hidden': !isMenuOpen }"
      >
        <ul class="flex flex-col items-start gap-4 py-4">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
          <li>
            <router-link to="/services" class="nav-link">Solutions & Services</router-link>
          </li>
          <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
          <li>
            <router-link
              to="/get-in-touch"
              class="bg-pink-100 text-pink-600 font-bold py-2 px-4 rounded-md hover:bg-pink-200"
            >
              Get in Touch
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.nav-link {
  @apply font-medium text-gray-700 hover:text-pink-600 transition-colors duration-300;
}
</style>