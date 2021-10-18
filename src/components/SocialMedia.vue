<template>
<section class="social-medias mb-5">
    <a v-for="(social,index) in socialMediaInfo" :key="index" target="_blank" :href="social.link" class="btn">
        <i :class="`fa fa-${social.name}`"></i>
        <!-- |  <span >@{{social.username}}</span> -->
    </a>
</section>
</template>

<script>
export default {
    props: {
        socialMediaInfo: {
            type: Object
        },
    }
}
</script>

<style>
</style>
