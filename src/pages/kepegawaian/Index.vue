<template>
    <nav class="w-[250px] fixed">
        <div class="flex h-screen flex-col justify-between border-e bg-white">
            <div class="px-4 py-3">
                <ul class="mt-6 space-y-1">
                    <li>
                        <router-link :to="{ name: 'berandaKepegawaian' }" class="costum-dropdown-menu "
                            exactActiveClass="bg-gray-100 font-medium">
                            Beranda
                        </router-link>
                    </li>
                    <!-- GTK -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">GTK
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-3">
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'guru' }" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Guru</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'tendik' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Tendik</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'gtkNontendik' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">GTK
                                        Non-Tendik</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- End of GTk -->
                    <!-- Cetak -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">Cetak
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-3">
                            <ul>
                                <li>
                                    <router-link to="/kesiswaan/peserta_didik" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak
                                        Absensi Guru</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak SK</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak
                                        Profil</router-link>
                                </li>
                                <!-- <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak Rapor
                                        PTS</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak Pelengkap
                                        Rapor</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak Nilai
                                        Rapor</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak Rapor
                                        Project</router-link>
                                </li> -->
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