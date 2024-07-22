import { createWebHistory, createRouter } from "vue-router";
import Kesiswaan from '@/pages/kesiswaan/Index.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('@/pages/Home.vue'),
        meta: { title: 'Kesiswaan'}
    },
    {
        path: '/kurikulum',
        component: ()=>import('@/pages/kurikulum/Index.vue'),
        meta: { title: 'kurikulum'},
        children: [
            {
                path:'',
                component: ()=> import('@/pages/kurikulum/child/BerandaKurikulum.vue'),
                name: 'berandaKurikulum'
            },
            {
                path:'rombel',
                children: [
                    {
                        path:'reguler',
                        component: ()=> import('@/pages/kurikulum/child/rombel/Reguler.vue'),
                    },
                    {
                        path:'praktik',
                        component: ()=> import('@/pages/kurikulum/child/rombel/Praktik.vue'),
                    },
                    {
                        path:'ekskul',
                        component: ()=> import('@/pages/kurikulum/child/rombel/Ekskul.vue'),
                    },
                    {
                        path:'matpel',
                        component: ()=> import('@/pages/kurikulum/child/rombel/Matpel.vue'),
                    },
                ]
            },
        ]
    },
    {
        path: '/kesiswaan',
        // name: 'kesiswaan',
        component: Kesiswaan,
        meta: { title: 'Kesiswaan'},
        children: [
            {
                path:'',
                component: ()=> import('@/pages/kesiswaan/beranda/Index.vue'),
                name: 'berandaKesiswaan'
            },
            {
                path: 'peserta_didik',
                component: () => import ('@/pages/kesiswaan/peserta_didik/PesertaDidik.vue'),
                name: 'peserta_didik'
            },
            {
                path: 'pd_keluar',
                component: () => import ('@/pages/kesiswaan/peserta_didik/PdKeluar.vue'),
                name: 'pd_keluar'
            },
            // Nilai Rapor
            {
                path: 'catatan-walas',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputCatatanWalas.vue'),
                name: 'inputCatatanWalas'
            },
            {
                path: 'data-pkl',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputDataPKL.vue'),
                name: 'inputDataPKL'
            },
            {
                path: 'kehadiran',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputKehadiran.vue'),
                name: 'inputKehadiran'
            },
            {
                path: 'nilai-rapor',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputNilaiRapor.vue'),
                name: 'inputRapor'
            },
            {
                path: 'input-kenaikan-kelas',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputKenaikanKelas.vue'),
                name: 'inputKenaikanKelas'
            },
            {
                path: 'input-nilai-ukk',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputNilaiUKK.vue'),
                name: 'inputNilaiUKK'
            },
            {
                path: 'input-nilai-ekskul',
                component: () => import ('@/pages/kesiswaan/input_rapor/InputNilaiEkskul.vue'),
                name: 'inputNilaiEkskul'
            },

        ]
    },
    {
        path: '/kepegawaian',
        name: 'kepegawaian',
        component: ()=>import('@/pages/kepegawaian/Index.vue'),
        meta: { title: 'Kepegawaian'},
        children: [
            {
                path: '',
                component: ()=>import('@/pages/kepegawaian/beranda/Index.vue'),
                name: 'berandaKepegawaian'
            },
            {
                path: 'guru',
                component: ()=>import('@/pages/kepegawaian/gtk/Guru.vue'),
                name: 'guru'
            },
            {
                path: 'tendik',
                component: ()=>import('@/pages/kepegawaian/gtk/Tendik.vue'),
                name: 'tendik'
            },
            {
                path: 'gtk-nontendik',
                component: ()=>import('@/pages/kepegawaian/gtk/GTKNonTendik.vue'),
                name: 'gtkNontendik'
            },
            {
                path: 'tambah-pegawai',
                component: ()=>import('@/pages/kepegawaian/crud/Tambah.vue'),
                name: 'tambahPegawai'
            },
        ]
    },
    {
        path: '/sarpras',
        name: 'sarpras',
        component: ()=>import('@/pages/sarpras/Index.vue'),
        meta: { title: 'Sarpras'},
        children: [
            {
                path:'',
                component: ()=>import('@/pages/sarpras/beranda/Index.vue'),
                name: 'berandaSarpras'
            },
            {
                path: 'tanah-bangunan',
                component: () => import('@/pages/sarpras/child/TanahDanBangunan.vue'),
            },
            {
                path: 'ruang',
                component: () => import('@/pages/sarpras/child/Ruang.vue'),
            },
            {
                path: 'alat-angkut',
                component: () => import('@/pages/sarpras/child/AlatAngkut.vue'),
            },
            {
                path: 'sanitasi',
                component: () => import('@/pages/sarpras/child/Sanitasi.vue'),
            },
        ]
    },
    {
        path: '/surat-menyurat',
        name: 'surat-menyurat',
        component: ()=>import('@/pages/surat/Index.vue'),
        meta: { title: 'Surat'}
    },
    {
        path: '/hubin',
        name: 'hubin',
        component: ()=>import('@/pages/hubin/Index.vue'),
        meta: { title: 'Hubin'},
        children: [
            {
                path:'',
                name: 'berandaHubin',
                component: ()=>import('@/pages/hubin/child/BerandaHubin.vue')
            },
            {
                path:'relasi-dudi',
                name: 'relasiDudi',
                component: ()=>import('@/pages/hubin/child/RelasiDudi.vue')
            },
            {
                path:'perjanjian-kerja-sama',
                name: 'pks',
                component: ()=>import('@/pages/hubin/child/PKS.vue')
            },
            {
                path:'pd-mengikuti-pkl',
                name: 'pdPkl',
                component: ()=>import('@/pages/hubin/child/PdPkl.vue')
            },
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: ()=>import('@/pages/admin/Index.vue'),
        meta: { title: 'Admin'},
        children:[
            {
                path:'',
                component:()=>import('@/pages/admin/child/Seting.vue'),
                name:'general'
            },
            {
                path:'tarik-data',
                component:()=>import('@/pages/admin/child/TarikData.vue'),
                name:'tarikData'
            },
            {
                path:'webservices',
                component:()=>import('@/pages/admin/child/WebService.vue'),
                name:'webservices'
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savePosition){
        if(savePosition){
            return savePosition
        } else if (to.hash){
            return {
                selector: to.hash,
            }
        } else {
            return { x: 0, y:0}
        }
    }
})

export default router;