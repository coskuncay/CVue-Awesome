<template>
<section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">Education</h3>
    <ul class="timeline">
        <li v-for="(education,index) in educationInfo" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
            <div class="timeline-arrow"></div>
            <p class="h5 bold">
                <!-- <i class="fa fa-university mr-1"></i> -->
                 {{education.school}}
            </p>
            <p class="h6">{{education.title}}</p>
            <span style="font-style: italic;">{{education.location}}</span><br>
            <span style="font-style: italic;">{{education.duration}}</span>
            <p class="mt-2" v-html="education.description"></p>
        </li>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        educationInfo: {
            type: Object,
        }
    }
}
</script>

<style>

</style>
