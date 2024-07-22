<script setup>
import axios from 'axios';
import qs from 'qs'
import { onMounted, reactive, ref, computed } from 'vue';
// Button
import Button from 'primevue/button';
// progress bar
import ProgressBar from 'primevue/progressbar';
// import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

// Icon
import 'primeicons/primeicons.css'
// Spiner
import ProgressSpinner from 'primevue/progressspinner';
// cookies
import Cookies from 'js-cookie';


const DapodikData = reactive(
    {
        host: 'localhost',
        port: '5774',
        username: 'd21xperience@gmail.com',
        password: 'Pasja123*',
        connectedToDapodik: false,
        connectionStatus: false,
        semester_id: 20222,
        connectionStatus_str: '',
        roleperan_url: '',
        cookie: ''
    }
)

// Menggunakan axios
const instance = axios.create({
    baseURL: 'http://localhost:5173',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html',
        withCredentials: true
    },
    timeout: 10000 //waktu tunggu permintaan dalam milidetik
})
instance.interceptors.request.use((config) => {
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = qs.stringify(config.data)
    }
    return config
})
const isLoading = ref(false)

const cekKoneksi = async () => {
    try {
        isLoading.value = true
        const response = await instance.get('/api/')
        if (response.data.includes('<!DOCTYPE HTML>')) {
            show("Berhasil terhubung", 'success')
            DapodikData.connectionStatus = true
            DapodikData.connectionStatus_str = "telah terhubung, Masukan User dan password"
        }
        isLoading.value = false
    } catch (error) {
        show(error.message, 'error')
        DapodikData.connectionStatus_str = "tidak terhubung!Pastikan alamat IP dan port sudah benar " + error.message

    }
}
// Jika cek koneksi suskse kemuadian masuk ke aplikasi dapodik-nya
const connectToDapodik = async () => {
    try {
        const res = await instance.post('/api/roleperan', DapodikData)
        // console.log(res.data)
        if (res.status === 200) {
            DapodikData.connectedToDapodik = true
            // res.data.includes("/login?data")
            const parser = new DOMParser()
            const doc = parser.parseFromString(res.data, 'text/html')
            // Pilih elemen <li> dengan kelas "w3-bar"
            const listItem = doc.getElementsByTagName('a');
            // console.log(listItem)
            for (let index = 0; index < listItem.length; index++) {
                if (listItem[index].href.includes('login')) {
                    DapodikData.roleperan_url = listItem[index].href
                }
            }
            // localStorage.setItem('token', res.data.token);
            console.log(DapodikData.roleperan_url)
            // Parsing url
            const parsedUrl = new URL(DapodikData.roleperan_url);
            parsedUrl.pathname = '/api/login'
            const newUrl = parsedUrl.toString()
            console.log('Domain:', newUrl);
            await instance.get(newUrl)
        }


    } catch (error) {
        console.error('Error fetching or parsing HTML:', error);
    }
}
const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};


const show = (cek, sev = 'info') => {
    toast.add({ severity: sev, summary: 'info', detail: cek, life: 3000 });
};
// Get Dudi
// Konfigurasi axios untuk mengirimkan cookies dengan setiap permintaan
// const axiosInstance = axios.create({
//     withCredentials: true,
// });
// const username = ref('d21xperience@gmail.com');
// const password = ref('Pasja123*');
// const semesterId = ref('20222');
// function getCookies() {
//     const cookies = document.cookie.split(';').reduce((cookies, cookieString) => {
//         const [name, value] = cookieString.split('=').map(c => c.trim());
//         cookies[name] = value;
//         return cookies;
//     }, {});
//     return cookies;
// }
// axios.defaults.withCredentials = true;

const apiClient = axios.create({
    // withCredentials: true, // Pastikan cookies dikirim dengan permintaan,
    Accept: 'application/json'
});
const getDudi = async () => {

    try {
        const res = await apiClient.get('/api/rest/Dudi', {
            withCredentials: true
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }


}
import { useStore } from 'vuex';
const store = useStore()
DapodikData.connectionStatus = computed(() => store.getters.dapodik.connected)
onMounted(() => {

})


</script>
<template>
    <div class="">
        <h1>Aplikasi Dapodik <span class="font-bold">{{ DapodikData.connectionStatus ? "Terhubung" : "Tidak terhubung"
                }}</span>
        </h1>

        <i class="pi pi-check" style="font-size: 1rem"></i>
        <i class="pi pi-times" style="font-size: 1.5rem"></i>
        <i class="pi pi-search" style="font-size: 2rem"></i>
        <i class="pi pi-user" style="font-size: 2.5rem"></i>

        <div>
            <h3>Daftar rest Dapodik</h3>
            <Button label="Update" icon="pi pi-refresh" iconPos="right" @click="getDudi" />

        </div>
        <div class="container w-[450px] h-[379px] bg-slate-200 p-10">
            <div v-if="!DapodikData.connectionStatus" class="relative">
                <div class="">
                    <div class="flex justify-between space-x-2">
                        <div>
                            <label class="block" for="ip-dapo">IP Dapodik</label>
                            <input type="text" id="ip-dapo" placeholder="192.168.1.1" class="p-1"
                                v-model=DapodikData.host>
                        </div>
                        <div>
                            <label class="block" for="port-dapo">port</label>
                            <input type="number" id="port-dapo" class="p-1" v-model="DapodikData.port">

                        </div>
                    </div>

                </div>
                <div class="flex justify-center mt-6">
                    <button class="bg-blue-400 p-3 rounded-lg hover:opacity-80" @click="cekKoneksi">Cek
                        Koneksi</button>
                </div>
                <div v-if="isLoading" class="absolute top-0 left-auto">
                    <ProgressSpinner />
                </div>
            </div>
            <div v-else>

                <form v-if="!DapodikData.connectedToDapodik" @submit.prevent="connectToDapodik"
                    class="flex items-center flex-col">
                    <h2 class="text-3xl">Masuk</h2>
                    <input type="email" placeholder="Username" class="my-3 p-3 w-full" name="username" value=""
                        v-model="DapodikData.username">
                    <input type="password" placeholder="Password" class="my-3 p-3 w-full" name="password" value=""
                        v-model="DapodikData.password">
                    <select name="semester_id" class="my-3 p-3 w-full" v-model="DapodikData.semester_id">
                        <option value="20221" selected="">2022/2023 Ganjil</option>
                        <option value="20222" selected="">2022/2023 Genap</option>
                    </select>
                    <button type="submit" id="login-dapodik"
                        class="p-3 rounded-xl bg-blue-300 font-semibold text-xl border-4 w-full">MASUK</button>
                </form>
                <div v-else>
                    <h3 class="text-2xl font-bold text-center">Dapodik berhasil terhubung</h3>
                    <p class="text-center mb-3">Silahkan lakukan tarik data</p>
                    <ul>
                        <li class="flex justify-between items-center space-x-2">
                            <div class="flex-none w-64">
                                <ProgressBar :value=value1></ProgressBar>

                            </div>
                            <div class="flex-1">
                                <button class="text-sm bg-blue-700 px-2 rounded-md my-3 text-white" type="button"
                                    @click="getDudi">Data
                                    Dudi</button>
                            </div>
                        </li>
                    </ul>

                    <div class="flex flex-row-reverse">
                        <div class="order-last">
                            <button type="button" class="bg-blue-700 rounded-lg p-2 text-white"
                                @click="startProgress">Tarik Semua</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div v-else>
            
        </div> -->
    </div>
    <Toast />
</template>

<style></style>