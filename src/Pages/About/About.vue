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






        <div class="py-15 px-6 bg-[#FDEEFF]">
            <h2 class="text-5xl font-bold text-center mb-8">What we believe</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Digital Transformation -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Digital_Transformation.svg" alt="Digital Transformation"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Digital Transformation</h3>
                    <p class="text-gray-600">
                        Modernizing IT Infrastructure and System. Enhancing Customer Experience with AI and Machine
                        Learning. Optimizing Operations through Automation.
                    </p>
                </div>

                <!-- Target Market -->
                <div class=" flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg
                    hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/target_market.svg" alt="Target Market" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Target Market</h3>
                    <p class="text-gray-600">
                        Companies or Institutions in Transition. 
                        Fast growing Entities or Large Corporate Groups.
                        Start ups.
                    </p>
                </div>

                <!-- Improved Management Focus -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Improved_Management_Focus.svg" alt="Improved Management Focus"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Improved Management Focus</h3>
                    <p class="text-gray-600">
                        Delivering first-class professional service to Clients. Less bureaucracy and faster
                        decision-making. Independence.
                    </p>
                </div>

                <!-- Operating Model -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Operating_Model.svg" alt="Operating Model" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Operating Model</h3>
                    <p class="text-gray-600">
                        Management, sales, and delivery aligned at a local/market level. Privately held.
                    </p>
                </div>
            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
                <!-- Digital Transformation -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Digital_Transformation.svg" alt="Digital Transformation"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Digital Transformation</h3>
                    <p class="text-gray-600">
                        Modernizing IT Infrastructure and System. Enhancing Customer Experience with AI and Machine
                        Learning. Optimizing Operations through Automation.
                    </p>
                </div>

                <!-- Target Market -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/target_market.svg" alt="Target Market" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Target Market</h3>
                    <p class="text-gray-600">
                        Companies or Institutions in Transition. Fast growing Entities or Large Corporate Groups.
                        Start ups.
                    </p>
                </div>

                <!-- Improved Management Focus -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Improved_Management_Focus.svg" alt="Improved Management Focus"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Improved Management Focus</h3>
                    <p class="text-gray-600">
                        Delivering first-class professional service to Clients. Less bureaucracy and faster
                        decision-making. Independence.
                    </p>
                </div>

                <!-- Operating Model -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Operating_Model.svg" alt="Operating Model" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Operating Model</h3>
                    <p class="text-gray-600">
                        Management, sales, and delivery aligned at a local/market level. Privately held.
                    </p>
                </div>
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
