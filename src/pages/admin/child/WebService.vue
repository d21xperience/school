<script setup>
import { ref } from 'vue';
const isLoginToDapodik = ref(true)

</script>

<template>
    <div>
        <!-- Cek apakah sudah login, jika belum login silahkan login terlebih dahulu -->
        <!-- Login ke dapodi berpungsi untuk mendapatkan akses  -->
        <h1>Has Login</h1>

        <template v-if="isLoginToDapodik">
            <div class="p-2 border-2 min-h-64">
                <div class="flex border-b-2 pb-1">
                    <div>
                        <button type="button"
                            class="bg-blue-400 border  p-1 hover:opacity-80 text-white">Tambah</button>
                    </div>
                    <div>
                        <button type="button" class="bg-green-700 border  p-1 hover:opacity-80 text-white">Ubah</button>
                    </div>
                    <div>
                        <button type="button" class="bg-red-700 border  p-1 hover:opacity-80 text-white">Hapus</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nama Aplikasi</th>
                            <th>IP Address</th>
                            <th>Key</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </template>
        <template v-else>
            <form action="">
                <h1>Login to Dapodik</h1>
                <div>
                    <label for="username">Username</label>
                    <input id="username" type="text">
                </div>
                <div>
                    <label for="password">password</label>
                    <input id="password" type="password">
                </div>
            </form>
        </template>



        <button type="button" class="bg-blue-400 border rounded-lg p-2 hover:opacity-80">Webservices</button>
    </div>
</template>