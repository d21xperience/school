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
                        <router-link :to="{ name: 'berandaKesiswaan' }" class="costum-dropdown-menu "
                            exactActiveClass="bg-gray-100 font-medium">
                            Beranda
                        </router-link>
                    </li>

                    <!-- Peserta Didik -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">Peserta
                            Didik
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="hidden px-3">
                            <ul>
                                <li>
                                    <router-link to="/kesiswaan/peserta_didik" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Peserta
                                        Didik</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">PD Keluar</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- Cetak Nilai -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">Cetak Nilai
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-3 hidden">
                            <ul>
                                <li>
                                    <router-link to="/kesiswaan/peserta_didik" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak
                                        Leger</router-link>
                                </li>
                                <li>
                                    <router-link to="/kesiswaan/pd_keluar" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Cetak Laporan
                                        Sumatif</router-link>
                                </li>
                                <li>
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
                                </li>
                            </ul>
                        </div>
                    </li>
                    <!-- End Of Cetak Nilai -->
                    <!-- Cetak Absensi -->
                    <li>
                        <router-link to="/admin/" class="costum-dropdown-menu"
                            exactActiveClass="bg-gray-100 font-medium">
                            Cetak Absensi Siswa
                        </router-link>
                    </li>
                    <!-- End of Cetak Absensi -->
                    <!-- Cetak Nilai -->
                    <li>
                        <button class="costum-dropdown-menu" @click="ShowMenu">Input Rapor
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-3 hidden">
                            <ul>
                                <li>
                                    <router-link :to="{ name: 'inputRapor' }" class="costum-dropdown-menu "
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input
                                        Nilai Rapor</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputKehadiran' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input
                                        Kehadiran</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputCatatanWalas' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input Catatan
                                        Walas</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputDataPKL' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input Data
                                        PKL</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputNilaiEkskul' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input Nilai
                                        Ekskul</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputKenaikanKelas' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input Kenaikan
                                        Kelas</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'inputNilaiUKK' }" class="costum-dropdown-menu"
                                        exactActiveClass="bg-gray-100 text-gray-700 font-medium">Input UKK</router-link>
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