<template>




  <header class="bg-white shadow-md">
    <nav class="flex justify-between items-center">
      <div>
        <img src="../../assets/Logo/Holmen logo.svg" alt="Holmen Logo" />

      </div>

      <ul class="flex justify-between items-center gap-8">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li>
          <router-link to="/services" class="nav-link">Solutions & Services</router-link>
        </li>
        <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
        <li>
          <router-link to="/get-in-touch"
            class="bg-pink-100 text-pink-600 font-bold py-2 px-4 rounded-md hover:bg-pink-200">
            Get in Touch
          </router-link>
        </li>
      </ul>







    </nav>
  </header>
</template>

<script>


export default {

};
</script>
