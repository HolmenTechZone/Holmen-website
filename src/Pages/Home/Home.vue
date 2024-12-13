<template>
  <section>
    <Navbar />
    <!-- Hero Section -->
    <div class="pt-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Holmen Consulting. <br />
          Aligning <span class="text-purple-500">Technology</span> with
          Business.
        </h1>

        <p class="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl">
          Holmen Consulting partner with businesses to provide scalable
          enterprise solutions to meet the needs of our clients. Our solutions
          are delivered through a team of experienced, result-driven resources.
        </p>

        <div class="mt-6">
          <button
            class="px-6 py-3 bg-purple-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Book a Free Consulting Call
          </button>
        </div>

        <!-- Image and Services Section -->
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10"
        >
          <img
            src="../../assets/Images/consulting firm.svg"
            alt="Consulting Team"
            class="rounded-lg shadow-lg w-full"
          />
        </div>

        <div class="py-10">
          <div class="container mx-auto px-4">
            <div
              class="text-center lg:flex lg:justify-between lg:items-start lg:space-x-6"
            >
              <h2 class="text-3xl font-bold text-gray-800 mb-4 lg:mb-0 lg:text-4xl">
                Let’s learn more <br> 
                about our services.
              </h2>
              <p class="text-gray-600 max-w-md py-2">
                We provide experienced technical and consulting services for
                both large and mid-market companies across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
