<template>
<section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Interest</h3>
    <ul class="right-list">
        <li v-for="(interest,index) in interestInfo" :key="index" class="right-list-item">
            <span>{{interest.name}}</span>
            <span v-if="interest.description.length != 0"> | </span>
            <small style="word-break: break-all;"><i>{{interest.description}}</i></small>
        </li>
    </ul>
</section>
</template>

<script>
export default {

    props: {
        interestInfo: {
            type: Object
        },
    },
}
</script>

<style>

</style>
