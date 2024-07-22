<script setup>
// import { ref } from 'vue';
</script>


<template>
    <div class="py-3">
        <main class="mt-3 my-3 flex justify-center">
            <div class="w-[550px]">
                <div class="flex gap-2 my-2">
                    <div>
                        <input type="checkbox" id="all" class="peer hidden" />
                        <label for="all"
                            class="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-1 px-2 text-sm  transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                            Semua </label>
                    </div>
                    <div>
                        <input type="checkbox" id="ptk" class="peer hidden" />
                        <label for="ptk"
                            class="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-1 px-2 text-sm  transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                            PTK</label>
                    </div>
                    <div>
                        <input type="checkbox" id="siswa" class="peer hidden" />
                        <label for="siswa"
                            class="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-1 px-2 text-sm  transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 ">
                            PD</label>
                    </div>
                </div>
                <div
                    class="w-full bg-transparent flex border-b-2 max-md:order-1 border-red-500 focus-within:border-blue-500 focus-within:bg-gray-100 px-4 rounded-sm h-11 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                        class="fill-gray-400 mr-4 rotate-90">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type='text' placeholder='Search...'
                        class="w-full outline-none bg-transparent text-[#333] text-sm" />
                </div>
            </div>
        </main>


    </div>
</template>