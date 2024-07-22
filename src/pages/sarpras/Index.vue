<template>
    <nav class="w-[250px] fixed">
        <div class="flex h-screen flex-col justify-between border-e bg-white">
            <div class="px-4 py-3">
                <ul class="mt-6 space-y-1">
                    <li>
                        <router-link :to="{ name: 'berandaSarpras' }"
                            class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                            exactActiveClass="bg-gray-100 font-medium">
                            Beranda
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/" class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                            exactActiveClass="bg-gray-100 font-medium">
                            Sekolah
                        </router-link>
                    </li>
                    <!-- Sarpras -->
                    <li>
                        <button
                            class="w-full text-left py-2 px-4 flex justify-between items-center text-sm hover:bg-gray-100"
                            @click="ShowMenu">Sarpras
                            <span>
                                >
                                <!-- <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg> -->
                            </span>
                        </button>
                        <div class="px-3">
                            <ul>
                                <li>
                                    <router-link to="/sarpras/tanah-bangunan"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Tanah &
                                        Bangunan</router-link>
                                </li>
                                <li>
                                    <router-link to="/sarpras/ruang"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Ruang</router-link>
                                </li>
                                <li>
                                    <router-link to="/sarpras/alat-angkut"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Alat
                                        angkut</router-link>
                                </li>
                                <li>
                                    <router-link to="/sarpras/sanitasi"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Sanitasi</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <!-- <li>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span class="text-sm hover:bg-gray-100 font-medium"> Teams </span>

                                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </summary>

                            <ul class="mt-2 space-y-1 px-4">
                                <li>
                                    <a href="#"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Banned Users
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Calendar
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <a href="#"
                            class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Billing
                        </a>
                    </li>

                    <li>
                        <a href="#"
                            class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            Invoices
                        </a>
                    </li>

                    <li>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <span class="text-sm hover:bg-gray-100 font-medium"> Account </span>

                                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </summary>

                            <ul class="mt-2 space-y-1 px-4">
                                <li>
                                    <a href="#"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Details
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                        class="block rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        Security
                                    </a>
                                </li>

                                <li>
                                    <form action="#">
                                        <button type="submit"
                                            class="w-full rounded-lg px-4 py-2 text-sm hover:bg-gray-100 font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700">
                                            Logout
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </details>
                    </li> -->
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