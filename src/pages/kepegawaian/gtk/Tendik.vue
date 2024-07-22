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
const store = useStore()
const response_data = computed(() => store.getters.ptk)
onMounted(() => {
    store.dispatch("getGtk", 'tendik')
})

const selectedGtk = ref()
const toast = useToast();
const onRowSelect = (event) => {
    toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.nama, life: 3000 });
    cek.value = false
};
const onRowUnselect = (event) => {
    toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
    cek.value = true
}

const ubah = () => {
    console.log(selectedGtk.value)
}
const cek = ref(true)
</script>

<template>
    <div class="flex justify-between">
        <div class="space-x-2">
            <Button label="Tambah" />
            <Button label="Ubah" severity="warn" @click="ubah" :disabled="cek" />
            <Button icon="pi pi-times" label="Hapus" severity="danger" :disabled="cek" />
            <Button label="Profil Tendik" :disabled="cek" />
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
        <CariComponent />
    </div>
    <div class="card">
        <DataTable v-model:selection="selectedGtk" :value="response_data.rows" selectionMode="single" dataKey="ptk_id"
            :metaKeySelection="false" @rowSelect="onRowSelect" @rowUnselect="onRowUnselect"
            tableStyle="min-width: 50rem">
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
        <Toast />
    </div>
</template>