<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import CariComponent from '@/components/CariComponent.vue';
import Toast from 'primevue/toast';
import 'primeicons/primeicons.css'
import { useToast } from 'primevue/usetoast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';



const store = useStore()
const response_data = computed(() => store.getters.pd)
onMounted(() => {
    store.dispatch("getPD")
})

const selectedGtk = ref()
const toast = useToast();
const onRowSelect = (event) => {
    toast.add({ severity: 'info', summary: 'PD Selected', detail: 'Name: ' + event.data.nama, life: 3000 });
    cek.value = false
};
const onRowUnselect = (event) => {
    toast.add({ severity: 'warn', summary: 'PD Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    cek.value = true
}

const ubah = () => {
    console.log(selectedGtk.value)
}
const cek = ref(true)
const dt = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};

const visible = ref(false);

</script>

<template>
    <div class="flex justify-between">
        <div class="space-x-2">
            <router-link :to="{ name: 'tambahPegawai' }"
                class="bg-blue-500 p-3 text-white font-semibold rounded-md">Tambah</router-link>
            <!-- <Button label="Tambah" @click="tambahData" /> -->
            <Button label="Ubah" severity="warn" @click="ubah" :disabled="cek" />
            <Button icon="pi pi-times" label="Hapus" severity="danger" :disabled="cek" />
            <Button label="Profil Tendik" :disabled="cek" />
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
        <CariComponent />
    </div>
    <div class="card">
        <DataTable v-model:selection="selectedGtk" :value="response_data.rows" selectionMode="single"
            dataKey="peserta_didik_id" :metaKeySelection="false" @rowSelect="onRowSelect" @rowUnselect="onRowUnselect"
            tableStyle="min-width: 50rem, max-height: 50rem" ref="dt">
            <Column field="nipd" header="NIS" class="text-sm"></Column>
            <Column field="nama" header="Nama" class="text-sm"></Column>
            <Column field="jenis_kelamin" header="Jk" class="text-sm"></Column>
            <Column field="nisn" header="NISN" class="text-sm"></Column>
            <Column field="tempat_lahir" header="Tmp.Lahir" class="text-sm"></Column>
            <Column field="tanggal_lahir" header="Tgl Lahir" class="text-sm"></Column>
            <Column field="rombel" header="Rombel" class="text-sm"></Column>
            <!--<Column field="jenis_ptk_id_str" header="Jenis GTK" class="text-sm"></Column>
            <Column field="nomor_surat_tugas" header="No. SK" class="text-sm"></Column> -->
        </DataTable>
        <Toast />
    </div>



    <!-- Tambah  Guru -->
    <Dialog v-model:visible="visible" pt:root:class="!border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
        <template #container="{ closeCallback }">
            <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
                style="background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))">
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="block mx-auto">
                    <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--p-primary-700)" />
                    <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="var(--p-primary-200)" />
                </svg>
                <div class="inline-flex flex-col gap-2">
                    <label for="username" class="text-primary-50 font-semibold">Username</label>
                    <InputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"></InputText>
                </div>
                <div class="inline-flex flex-col gap-2">
                    <label for="password" class="text-primary-50 font-semibold">Password</label>
                    <InputText id="password" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" type="password">
                    </InputText>
                </div>
                <div class="flex items-center gap-4">
                    <Button label="Cancel" @click="closeCallback" text
                        class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"></Button>
                    <Button label="Sign-In" @click="closeCallback" text
                        class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"></Button>
                </div>
            </div>
        </template>
    </Dialog>
    <!-- End ofTambah  Guru -->

</template>