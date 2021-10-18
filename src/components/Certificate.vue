<template>
<section class="mb-5">
    <h3 class="section-title-small" style="margin-left: 10px;">Certificates & Licences</h3>
    <ul class="right-list">
        <li class="right-list-item" v-for="(cert,index) in certificateInfo" :key="index">
            <p style="margin-bottom: 0;font-size:16px">{{cert.title}} </p>
            <small style="color: #7A7D80 !important;font-style:italic;font-size:15px"> {{cert.organisation}}</small>
        </li>
    </ul>
</section>
</template>

<script>
export default {
props: {
        certificateInfo: {
            type: Object
        },
    },
}
</script>

<style>

</style>
