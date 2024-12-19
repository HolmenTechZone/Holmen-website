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
                    <h3 class="text-lg font-semibold mb-4">Digital Transformation</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Modernizing IT Infrastructure and System.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Enhancing Customer Experience with AI and Machine Learning.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Optimizing Operations through Automation.</span>
                        </li>
                    </ul>
                </div>

                <!-- Target Market -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/target_market.svg" alt="Target Market" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-4">Target Market</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Companies or Institutions in Transition.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Fast growing Entities or Large Corporate Groups.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Start ups.</span>
                        </li>
                    </ul>
                </div>

                <!-- Improved Management Focus -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/improved Management Focus.svg" alt="Improved Management Focus"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-4">Improved Management Focus</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Delivering first class professional service to Clients.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Less bureaucracy and faster decision.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Independence.</span>
                        </li>
                    </ul>
                </div>

                <!-- Operating Model -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Operating_Model.svg" alt="Operating Model" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-4">Operating Model</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Management, sales and delivery aligned at a local/market level.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Privately held.</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20">
                <!-- Focus on building strong customer relationships -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Digital_Transformation.svg" alt="Digital Transformation"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Focus on building strong customer relationships</h3>

                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Management, sales and delivery aligned at a local/market level.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Privately held.</span>
                        </li>
                    </ul>

                </div>

                <!-- Target Market -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/target_market.svg" alt="Target Market" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Commitment to employee personal and professional growth</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Management, sales and delivery aligned at a local/market level.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Privately held.</span>
                        </li>
                    </ul>
                </div>

                <!-- Improved Management Focus -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Improved_Management_Focus.svg" alt="Improved Management Focus"
                            class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2"> Better Customer Focus</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Management, sales and delivery aligned at a local/market level.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Privately held.</span>
                        </li>
                    </ul>
                </div>

                <!-- Operating Model -->
                <div
                    class="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
                    <div>
                        <img src="../../assets/Images/Operating_Model.svg" alt="Operating Model" class="w-12 h-12" />
                    </div>
                    <h3 class="text-lg font-semibold mb-2">Excellence in management and leadership</h3>
                    <ul class="text-left text-gray-600 space-y-2">
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Management, sales and delivery aligned at a local/market level.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="mr-2">•</span>
                            <span>Privately held.</span>
                        </li>
                    </ul>
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
