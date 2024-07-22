<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
const response_data = ref({})

// get response_data
const apiClient = axios.create({
    // baseURL: 'http//:localhost:5173',
    // withCredentials: true, // Pastikan cookies dikirim dengan permintaan,
    Accept: 'application/json'
});
const getresponse_data = async () => {
    try {
        const res = await apiClient.get('/api/rest/response_data', {
            withCredentials: true
        })
        console.log(res)
        response_data.value = res.data
    } catch (error) {
        console.log(error)
    }
}

const getSiswa = async () => {
    try {
        const res = await apiClient.get('/api/rest/PesertaDidik', {
            withCredentials: true
        })
        console.log(res)
        response_data.value = res.data
    } catch (error) {
        console.log(error)
    }
}
const getGtk = async (tahun_ajaran_id, jenis_gtk) => {
    const params = {
        entry_sekolah_id: '8a5bd957-66bc-4096-9ff1-fee096b87ba0',
        ptk_module: 'ptkterdaftar',
        tahun_ajaran_id: tahun_ajaran_id,
        jenis_gtk: jenis_gtk,
    }
    try {
        const res = await apiClient.get('/api/rest/Ptk', {
            withCredentials: true,
            params: params
        })
        response_data.value = res.data
    } catch (error) {
        console.log(error)
    }
}
// Parsing url
const getParseUrl = () => {
    const url = 'http://localhost:5173/api/login?data=eyJzZWtvbGFoX2lkIjoiOGE1YmQ5NTctNjZiYy00MDk2LTlmZjEtZmVlMDk2Yjg3YmEwIiwicGVyYW5faWQiOjUzLCJwZXJhbl9pZF9yZWFsIjo1M30=&params=eyJ1c2VybmFtZSI6ImQyMXhwZXJpZW5jZUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IlBhc2phMTIzKiIsInNlbWVzdGVyX2lkIjoiMjAyMjIiLCJyZW1lbWJlcm1lIjowfQ=='
    const parsedUrl = new URL(url);
    parsedUrl.pathname = '/api/login'

    const newUrl = parsedUrl.toString()
    console.log('Domain:', newUrl);
}




</script>


<template>
    <div class="flex space-x-2">
        <Button label="Get response_data" @click="getParseUrl" />
        <Button label="Get Siswa" @click="getSiswa" />
        <Button label="Get PTK" @click="getGtk(2022, 'guru')" />
        <Button label="Get Tendik" @click="getGtk(2022, 'tendik')" />
    </div>
    <!-- <div>
        <ol>
            <li v-for="(item, index) in response_data.rows">
                {{ ++index }}. {{ item.nama }}
            </li>
        </ol>
    </div> -->
    <div class="card">
        <DataTable :value="response_data.rows" tableStyle="min-width: 50rem">
            <Column field="ptk_induk" header="Induk" class="text-sm"></Column>
            <Column field="nama" header="Nama" class="text-sm"></Column>
            <Column field="jenis_kelamin" header="Jk" class="text-sm"></Column>
            <Column field="tempat_lahir" header="Tmp.Lahir" class="text-sm"></Column>
            <Column field="tanggal_lahir" header="Tgl Lahir" class="text-sm"></Column>
            <Column field="nama_ibu_kandung" header="Nama Ibu Kandung" class="text-sm"></Column>
            <Column field="status_kepegawaian_id_str" header="Sts Kepegawaian" class="text-sm"></Column>
            <Column field="jenis_ptk_id_str" header="Jenis GTK" class="text-sm"></Column>
            <Column field="nomor_surat_tugas" header="No. SK" class="text-sm"></Column>
        </DataTable>
    </div>


</template>