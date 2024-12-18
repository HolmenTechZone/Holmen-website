<template>
    <div>
        <Navbar />

        <div class="flex flex-col md:flex-row justify-between items-center py-12 px-6">
            <div class="md:w-1/2 md:mr-12 ml-11">
                <h2 class="text-4xl font-bold mt-12">
                    About <span class="text-purple-500">Us</span>
                </h2>
                <p class="text-gray-600 leading-relaxed mb-6 font-bold text-[22px]">
                    We are a tightly focused professional services organization dedicated to empowering businesses with
                    innovative, insightful, and results-driven solutions. Our expertise spans across strategy,
                    technology, and creative services, enabling us to address complex challenges and drive measurable
                    success.
                </p>
                <button
                    class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                    Meet the Team
                </button>
            </div>

            <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center pt-11">
                <img src="../../assets/Images/aboutUs.svg"
                    alt="A diverse team of professionals working together at computers"
                    class="w-full max-w-[480px] rounded-lg shadow-lg h-auto object-cover" />
            </div>
        </div>


    </div>
</template>

<script>
import Navbar from "../../components/Navbar/Navbar.vue";

export default {
    components: {
        Navbar,
    },
};
</script>
