<template>
<section class="mb-5">
    <h5 class="section-title-small" style="margin-left: 10px;">Volunteer Experience</h5>
    <ul class="right-list">
        <li  v-for="(vol,index) in volunteerInfo" :key="index">       
                <span style="margin-bottom: 0;font-size:15px">{{vol.title}} | </span>
                <span style="font-size:13px;font-style: italic;">{{vol.duration}} </span>
                <span style="margin-bottom: 0;color: #6c757d !important;font-size:13px"> ({{vol.organisation}})</span>
        </li>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        volunteerInfo: {
            type: Object
        },
    },
}
</script>

<style>

</style>
