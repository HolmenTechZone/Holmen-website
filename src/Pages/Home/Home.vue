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
            class="px-6 py-3 bg-purple-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300">
            Book a Free Consulting Call
          </button>
        </div>

        <!-- Image and Services Section -->
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-10">
          <img src="../../assets/Images/consulting firm.svg" alt="Consulting Team"
            class="rounded-lg shadow-lg w-full" />
        </div>

        <div class="py-10">
          <div class="container mx-auto px-4">
            <div
              class="text-center lg:flex lg:justify-between lg:items-start lg:space-x-7 md:justify-center md:items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4 lg:mb-0 lg:text-4xl">
                  Let's learn more<br>
                  about our services.
                </h2>
              </div>
              <div class="md:text-center">
                <p class="text-gray-600 max-w-md py-2">
                  We provide experienced technical and consulting services for
                  both large and mid-market companies across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>




        <div class="py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-yellow-50 p-8 rounded-lg text-center">
                <div class="mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto">
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 14.67 9.67 13 12 13C14.33 13 18 14.67 18 17V18H6V17Z"
                      fill="#4B5563" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Consulting</h3>
                <p class="text-gray-600">We collaborate with you to discuss your project requirements and solutions.</p>
                <button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Get in Touch</button>
              </div>
              <div class="bg-pink-50 p-8 rounded-lg text-center">
                <div class="mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto">
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 14.67 9.67 13 12 13C14.33 13 18 14.67 18 17V18H6V17Z"
                      fill="#4B5563" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Management</h3>
                <p class="text-gray-600">We assist you in defining and managing the tasks and timelines for your
                  project.</p>
                <button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Get in Touch</button>
              </div>
              <div class="bg-gray-50 p-8 rounded-lg text-center">
                <div class="mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto">
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 14.67 9.67 13 12 13C14.33 13 18 14.67 18 17V18H6V17Z"
                      fill="#4B5563" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Implementation</h3>
                <p class="text-gray-600">We provide both functional and technical resources to aid you in implementing
                  your solutions.</p>
                <button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Get in Touch</button>
              </div>
              <div class="bg-cyan-50 p-8 rounded-lg text-center">
                <div class="mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mx-auto">
                    <path
                      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 14.67 9.67 13 12 13C14.33 13 18 14.67 18 17V18H6V17Z"
                      fill="#4B5563" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Advisory Services</h3>
                <p class="text-gray-600">We also provide alternate financial engineering solutions to add your ideas to
                  life.</p>
                <button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Get in Touch</button>
              </div>
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
