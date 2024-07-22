<script setup>
// const ShowMenu = (e) => {
//     // console.log(e.target.nextSibling)
//     let obj = e.target.nextSibling
//     obj.classList.toggle('hidden')
// }
</script>


<template>
    <nav class="w-[250px] fixed">
        <div class="flex h-screen flex-col justify-between border-e bg-white">
            <div class="px-4 py-3">
                <!-- <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img alt=""
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="size-10 rounded-full object-cover" />

                        <div>
                            <p class="text-xs">
                                <strong class="block font-medium">Eric Frusciante</strong>

                                <span> eric@frusciante.com </span>
                            </p>
                        </div>
                    </a>
                </div> -->

                <ul class="mt-6 space-y-1">
                    <li>
                        <router-link :to="{ name: 'berandaKurikulum' }" class="costum-dropdown-menu "
                            exactActiveClass="bg-gray-100 font-medium">
                            Beranda
                        </router-link>
                    </li>

                    <!-- Rombel -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">Rombongan
                            Belajar
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-3 hidden">
                            <ul class="">
                                <li>
                                    <router-link to="/kurikulum/rombel/reguler" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Reguler</router-link>
                                </li>
                                <li>
                                    <router-link to="/kurikulum/rombel/praktik" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Praktik</router-link>
                                </li>
                                <li>
                                    <router-link to="/kurikulum/rombel/ekskul" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Ekskul</router-link>
                                </li>
                                <li>
                                    <router-link to="/kurikulum/rombel/matpel" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Matpel
                                        Pilihan</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
    </nav>
    <div class="ml-[250px]">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>