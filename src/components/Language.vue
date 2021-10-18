<template>
<section class="mb-5">
    <h3 class="section-title-small" style="margin-left: 10px;">Language</h3>
    <ul class="right-list">
        <li class="right-list-item" v-for="(lang,index) in languageInfo" :key="index">
            <span>{{lang.name}} </span>
            <small style="color: #6c757d !important;"> ({{lang.level}})</small>
        </li>
    </ul>
</section>
</template>

<script>
export default {
props: {
        languageInfo: {
            type: Object
        },
    },
}
</script>

<style>

</style>
