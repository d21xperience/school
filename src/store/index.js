//import the createStore object from Vuex
import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from "axios"
export default createStore({
    state: {
        dapodik:{
            connected: true,
            usename:'',
            password: '',
            networkStatus: false
        },
        ptk:'',
        pd:'',
        rombel:'',
        dudi:'',
        mou:'',
        sekolah: {
            id:'8a5bd957-66bc-4096-9ff1-fee096b87ba0',
            tahun_ajaran_id: 2022
        }
    },
    getters: {
        mou: state => state.mou,
        dudi: state => state.dudi,
        rombel: state => state.rombel,
        ptk: state => state.ptk,
        pd: state => state.pd,
        dapodik: state => state.dapodik
    },
    actions: {
        getMou({commit}){
            commit('getMou')
        },
        getDudi({commit}){
            commit('getDudi')
        },
        getRombel({commit}){
            commit('getRombel')
        },
        getPDKeluar({commit}){
            commit('getPDKeluar')
        },
        getPD({commit}){
            commit('getPD')
        },
        getGtk({commit},jenis_gtk){
            commit('getGtk',jenis_gtk)
        },
        getGtkNonTendik({commit}){
            commit('getGtkNonTendik')
        },
        // deleteGtk({commit}){
        //     commit('deleteGtk')
        // },
    },
    mutations: {
        async getMou(state){
            // const params = {
            //     sekolah_id: state.sekolah.id,
            //     pd_module: 'pdkeluar',
            //     semester_id: 20222,
            //     // limit: 1000
            // }
            try {
                const res = await axios.get('/api/rest/Mou', {
                    withCredentials: true,
                    // params: params
                })
                state.mou = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getDudi(state){
            // const params = {
            //     sekolah_id: state.sekolah.id,
            //     pd_module: 'pdkeluar',
            //     semester_id: 20222,
            //     // limit: 1000
            // }
            try {
                const res = await axios.get('/api/rest/Dudi', {
                    withCredentials: true,
                    // params: params
                })
                state.dudi = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getRombel(state){
            const params = {
                sekolah_id: state.sekolah.id,
                pd_module: 'pdkeluar',
                semester_id: 20222,
                // limit: 1000
            }
            try {
                const res = await axios.get('/api/rest/RombonganBelajar', {
                    withCredentials: true,
                    params: params
                })
                state.rombel = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getPDKeluar(state){
            const params = {
                sekolah_id: state.sekolah.id,
                pd_module: 'pdkeluar',
                tahun_ajaran_id: state.sekolah.tahun_ajaran_id,
                // limit: 1000
            }
            try {
                const res = await axios.get('/api/rest/PesertaDidik', {
                    withCredentials: true,
                    params: params
                })
                state.pd = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getPD(state){
            const params = {
                sekolah_id: state.sekolah.id,
                pd_module: 'pdterdaftar',
                tahun_ajaran_id: state.sekolah.tahun_ajaran_id,
                // limit: 1000
            }
            try {
                const res = await axios.get('/api/rest/PesertaDidik', {
                    withCredentials: true,
                    params: params
                })
                state.pd = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getGtk(state,jenis_gtk){
            const params = {
                entry_sekolah_id: state.sekolah.id,
                ptk_module: 'ptkterdaftar',
                tahun_ajaran_id: state.sekolah.tahun_ajaran_id,
                jenis_gtk: jenis_gtk,
            }
            try {
                const res = await axios.get('/api/rest/Ptk', {
                    withCredentials: true,
                    params: params
                })
                state.ptk = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async getGtkNonTendik(state){
            const params = {
                entry_sekolah_id: state.sekolah.id,
                ptk_module: 'ptkkeluar',
                tahun_ajaran_id: state.sekolah.tahun_ajaran_id,
                // jenis_gtk: jenis_gtk,
            }
            try {
                const res = await axios.get('/api/customrest/ptk', {
                    withCredentials: true,
                    params: params
                })
                state.ptk = res.data
            } catch (error) {
                console.log(error)
            }
        },
        // async deleteGtk(state){
        //     const params = {
        //         entry_sekolah_id: state.sekolah.id,
        //         ptk_module: 'ptkkeluar',
        //         tahun_ajaran_id: state.sekolah.tahun_ajaran_id,
        //         // jenis_gtk: jenis_gtk,
        //     }
        //     try {
        //         const res = await axios.get('/api/rest/PtkTerdaftar', {
        //             withCredentials: true,
        //             params: params
        //         })
        //         state.ptk = res.data
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
    }
})
/** we have just created a boiler plate for our vuex store module**/