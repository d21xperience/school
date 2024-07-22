<template>
    <nav class=" w-[70px] lg:w-[250px] lg:fixed">
        <div class="flex h-screen flex-col justify-between border-e bg-white">
            <div class="px-4 py-3">
                <ul class="mt-6 space-y-1">
                    <li>
                        <router-link to="/admin/" class="block rounded-lg  px-4 py-2 text-sm  text-gray-700"
                            exactActiveClass="bg-gray-100 font-medium">
                            Beranda
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/tarik-data" class="block rounded-lg px-4 py-2 text-sm  text-gray-700"
                            exactActiveClass="bg-gray-100 font-medium">Sync Dapodik</router-link>
                    </li>
                    <li>
                        <router-link to="/admin/webservices" class="block rounded-lg px-4 py-2 text-sm  text-gray-700"
                            exactActiveClass="bg-gray-100 font-medium">Web Service Dapodik</router-link>
                    </li>
                </ul>
            </div>

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
        </div>
    </nav>
    <div class="lg:ml-[250px]">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>